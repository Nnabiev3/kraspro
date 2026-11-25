import "server-only";
import { z } from "zod";
import { services } from "@/data/services";
import { cityPages, geoServicePages, servicePages, standardPages } from "./pages";
import { footerDefaults, generalDefaults, headerDefaults } from "./settings";
import { labelFor, itemTemplate, safeLocalPath, safeWebUrl, isImageSource, optionalFields, optionalLinkGroups, type FieldValue, type Fields } from "./fields";
import { readDocument } from "./storage";

export type Section = "general" | "header" | "footer" | "pages";

type PageDefinition = { path: string; title: string; defaults: Fields };

export const pageGroups: { title: string; pages: PageDefinition[] }[] = [
  { title: "�᭮��� ��࠭���", pages: standardPages.map(([path, title, defaults]) => ({ path, title, defaults })) },
  { title: "��㣨", pages: servicePages },
  { title: "��த�", pages: cityPages },
  { title: "��㣨 �� ��த��", pages: geoServicePages },
];

export const settings = {
  general: { title: "��騥 ����ன��", description: "����⨯, ���⠪�� � ��뫪� ��������.", defaults: generalDefaults },
  header: { title: "����� ᠩ�", description: "����⨯ � ����, �������� � ������ ���.", defaults: headerDefaults },
  footer: { title: "������ ᠩ�", description: "���⠪��, ���ᠭ�� � ������� ��뫮�.", defaults: footerDefaults },
};

export const serviceOptions = services.map(({ slug, navLabel }) => ({ value: slug, label: navLabel }));
const serviceSlugs = new Set(serviceOptions.map(option => option.value));

export function getDefinition(id: string) {
  if (id === "header" || id === "footer" || id === "general") return settings[id];
  if (!id.startsWith("page:")) return undefined;
  return pageGroups.flatMap(group => group.pages).find(page => "page:" + page.path === id);
}

export async function getEditorDocument(id: string, defaults: Fields) {
  const row = await readDocument(id);
  return { revision: row?.revision ?? 0, values: row ? { ...defaults, ...JSON.parse(row.content) } as Fields : defaults };
}

function fieldSchema(key: string, value: FieldValue, parent?: string): z.ZodTypeAny {
  if (Array.isArray(value)) return z.array(fieldSchema(key, itemTemplate(key), parent)).max(40, "����᪠���� �� 40 ������⮢.");
  if (typeof value === "object") return z.object(Object.fromEntries(
    Object.entries(value).map(([name, entry]) => [name, fieldSchema(name, entry, key)]),
  ));
  if (typeof value === "number") return z.number().int().min(1).max(5);
  if (typeof value === "boolean") return z.boolean();
  const optional = optionalFields.has(key) || (key === "description" && parent === undefined) ||
    (key === "label" && optionalLinkGroups.has(parent ?? ""));
  const text = z.string().trim().min(optional ? 0 : 1, "�������� �� ����.").max(8000, "������ ⥪�� �� 8 000 ᨬ�����.");
  const validate = (check: (value: string) => boolean, message: string) =>
    text.refine(input => (optional && !input) || check(input), message);
  if (key === "logo" || key === "src") return validate(isImageSource, "������ ���� ����ࠦ���� ��� ���� �� ���� ᠩ�.");
  if (key === "sameAs" || key === "reviewUrl") return validate(safeWebUrl, "������ ����� ���� � https:// ��� http://.");
  if (key === "href" || key === "brandHref") return validate(
    input => safeLocalPath(input) || safeWebUrl(input) || /^#[\w-]+$/.test(input) || /^(tel|mailto):[^\s\\]+$/.test(input),
    "������ ���� ��뫪�, ���ਬ�� /contact ��� https://example.com.",
  );
  if (key === "phone") return validate(input => /^\+?[\d ()-]{7,30}$/.test(input) && input.replace(/\D/g, "").length >= 7, "������ ⥫�䮭, ���ਬ�� +1 410 555 0123.");
  if (key === "email") return validate(input => z.string().email().safeParse(input).success, "�஢���� ���� �����஭��� �����.");
  if (key === "service" || key === "slug" || key === "related") return validate(input => serviceSlugs.has(input), "�롥�� ���� �� ᯨ᪠.");
  if (key === "date") return validate(input => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(input)) return false;
    const date = new Date(input + "T00:00:00Z");
    return Number.isFinite(date.getTime()) && date.toISOString().startsWith(input);
  }, "������ ����⢨⥫��� ����.");
  return text;
}

export function validateDocument(id: string, value: unknown) {
  const definition = getDefinition(id);
  if (!definition) return { error: "��� ࠧ��� �� ������." } as const;
  const parsed = fieldSchema("", definition.defaults).safeParse(value);
  if (parsed.success) return { value: parsed.data as Fields } as const;
  const issue = parsed.error.issues[0];
  const path = issue.path.map((key, index) => typeof key === "number" ? String(key + 1) : labelFor(key, String(issue.path[index - 2] ?? ""))).join(" / ");
  return { error: path ? path + ". " + issue.message : "�஢���� ���������� �����." } as const;
}
