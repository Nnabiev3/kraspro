"use server";

import { redirect } from "next/navigation";
import { isEditor, signIn, signOut } from "@/lib/cms/auth";
import { validateDocument } from "@/lib/cms/editor";
import { publishDocument } from "@/lib/cms/storage";
import type { Fields } from "@/lib/cms/fields";

export async function login(_previous: string, form: FormData) {
  const attempt = form.get("password");
  if (typeof attempt !== "string" || !signIn(attempt)) return "Проверьте пароль.";
  redirect("/admin");
}

export async function logout() {
  signOut();
  redirect("/admin");
}

export async function publish(id: string, revision: number, values: Fields) {
  if (!isEditor()) return { error: "Сеанс завершён. Войдите снова в отдельной вкладке." } as const;
  if (typeof id !== "string" || !Number.isSafeInteger(revision) || revision < 0) return { error: "Откройте раздел заново." } as const;
  const parsed = validateDocument(id, values);
  if ("error" in parsed) return { error: parsed.error } as const;

  try {
    const saved = await publishDocument(id, parsed.value, revision);
    if (!saved) return { error: "Этот раздел уже изменили. Откройте его в новой вкладке и сверьте правки перед публикацией." } as const;
    return { revision: revision + 1, values: parsed.value } as const;
  } catch (error) {
    console.error("CMS publish failed", id, error);
    return { error: "Хранилище не ответило. Проверьте сайт перед повторной публикацией." } as const;
  }
}
