import "server-only";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { cache } from "react";
import { mkdir, open, readFile, rename, unlink, writeFile } from "node:fs/promises";
import { createHash, randomUUID } from "node:crypto";
import { join } from "node:path";

type Statement = {
  bind(...values: (string | number)[]): Statement;
  first<T>(): Promise<T | null>;
  all<T>(): Promise<{ results: T[] }>;
  run(): Promise<{ meta: { changes: number } }>;
};
type WorkerEnv = { KRASPRO_CONTENT?: { prepare(query: string): Statement }; KRASPRO_ADMIN_PASSWORD?: string };
type Row = { content: string; revision: number };

export function workerEnv(): WorkerEnv | undefined {
  try {
    return getCloudflareContext().env as WorkerEnv;
  } catch (error) {
    if ((error as Error).message.includes("getCloudflareContext")) return undefined;
    throw error;
  }
}

function storage() {
  const cloud = workerEnv();
  if (cloud?.KRASPRO_CONTENT) return { kind: "d1" as const, db: cloud.KRASPRO_CONTENT };
  if (!cloud && process.env.KRASPRO_CMS_LOCAL === "1") {
    return { kind: "file" as const, directory: join(process.cwd(), ".kraspro-cms") };
  }
}

export function storageReady() {
  return Boolean(storage());
}

function filename(directory: string, id: string) {
  return join(directory, createHash("sha256").update(id).digest("hex") + ".json");
}

async function readLocal(path: string): Promise<Row | null> {
  try {
    return JSON.parse(await readFile(path, "utf8")) as Row;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw error;
  }
}

export const readDocument = cache(async (id: string): Promise<Row | null> => {
  const target = storage();
  if (!target) return null;
  if (target.kind === "file") return readLocal(filename(target.directory, id));
  return target.db.prepare("SELECT content, revision FROM cms_documents WHERE id = ?").bind(id).first<Row>();
});

export async function readDocuments(ids: string[]) {
  const target = storage();
  if (!target || !ids.length) return new Map<string, Row>();
  if (target.kind === "d1") {
    const placeholders = ids.map(() => "?").join(", ");
    const { results } = await target.db.prepare(
      `SELECT id, content, revision FROM cms_documents WHERE id IN (${placeholders})`,
    ).bind(...ids).all<Row & { id: string }>();
    return new Map(results.map(row => [row.id, row]));
  }
  const rows = await Promise.all(ids.map(async id => [id, await readDocument(id)] as const));
  return new Map(rows.filter((row): row is readonly [string, Row] => row[1] !== null));
}

export function documentContent<T extends object>(row: Row | null | undefined, defaults: T): T {
  return row ? { ...defaults, ...JSON.parse(row.content) as Partial<T> } : defaults;
}

export async function loadContent<T extends object>(id: string, defaults: T): Promise<T> {
  try {
    return documentContent(await readDocument(id), defaults);
  } catch (error) {
    console.error("CMS read failed", id, error);
    return defaults;
  }
}

export async function publishDocument(id: string, value: object, revision: number): Promise<boolean> {
  const target = storage();
  if (!target) throw new Error("CMS storage is not configured");
  const content = JSON.stringify(value);
  if (target.kind === "d1") {
    const result = revision === 0
      ? await target.db.prepare("INSERT INTO cms_documents (id, content) VALUES (?, ?) ON CONFLICT(id) DO NOTHING").bind(id, content).run()
      : await target.db.prepare("UPDATE cms_documents SET content = ?, revision = revision + 1 WHERE id = ? AND revision = ?").bind(content, id, revision).run();
    return result.meta.changes === 1;
  }

  await mkdir(target.directory, { recursive: true });
  const path = filename(target.directory, id);
  const lockPath = path + ".lock";
  const lock = await open(lockPath, "wx").catch((error: NodeJS.ErrnoException) => {
    if (error.code === "EEXIST") return null;
    throw error;
  });
  if (!lock) return false;
  const temporary = path + "." + randomUUID() + ".tmp";
  try {
    if (((await readLocal(path))?.revision ?? 0) !== revision) return false;
    await writeFile(temporary, JSON.stringify({ content, revision: revision + 1 }), { flag: "wx" });
    await rename(temporary, path);
    return true;
  } finally {
    await unlink(temporary).catch(error => {
      if (error.code !== "ENOENT") console.error("CMS temporary file cleanup failed", error);
    });
    await lock.close();
    await unlink(lockPath);
  }
}
