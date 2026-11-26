import "server-only";
import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { workerEnv } from "./storage";

const sessionName = "kraspro_editor";
const seconds = 8 * 60 * 60;

export function editorPassword() {
  const password = workerEnv()?.KRASPRO_ADMIN_PASSWORD ?? process.env.KRASPRO_ADMIN_PASSWORD;
  return password && password.length >= 24 ? password : undefined;
}

function digest(value: string) {
  return createHash("sha256").update(value).digest();
}

function sign(expires: string, password: string) {
  return createHmac("sha256", password).update("kraspro-editor:" + expires).digest("hex");
}

export function isEditor() {
  const password = editorPassword();
  const session = cookies().get(sessionName)?.value;
  if (!password || !session) return false;
  const [expires, signature, extra] = session.split(".");
  if (extra !== undefined || !/^[0-9]{10}$/.test(expires) || !/^[a-f0-9]{64}$/.test(signature ?? "")) return false;
  return Number(expires) > Math.floor(Date.now() / 1000) &&
    timingSafeEqual(Buffer.from(signature, "hex"), Buffer.from(sign(expires, password), "hex"));
}

export function signIn(attempt: string) {
  const password = editorPassword();
  if (!password || attempt.length > 1024 || !timingSafeEqual(digest(attempt), digest(password))) return false;
  const expires = String(Math.floor(Date.now() / 1000) + seconds);
  cookies().set(sessionName, expires + "." + sign(expires, password), {
    httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/admin", maxAge: seconds,
  });
  return true;
}

export function signOut() {
  cookies().set(sessionName, "", {
    httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/admin", maxAge: 0,
  });
}
