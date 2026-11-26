export type FieldValue = string | number | boolean | FieldValue[] | { [key: string]: FieldValue };
export type Fields = Record<string, FieldValue>;

const labels: Record<string, string> = {
  name: "Название компании", logo: "Логотип", location: "Город и регион", phone: "Телефон", email: "Электронная почта",
  streetAddress: "Адрес", postalCode: "Почтовый индекс", hours: "Часы работы", responseTime: "Время ответа",
  licenseNumber: "Номер лицензии MHIC", epaCertification: "Сертификат EPA", reviewUrl: "Ссылка для публикации отзывов", sameAs: "Социальные сети",
  brand: "Текст рядом с логотипом", brandHref: "Ссылка логотипа", navigation: "Пункты меню", showHomeOnDesktop: "Показывать «Главная» на компьютере",
  showPhone: "Показывать телефон", quote: "Основная кнопка", mobileQuote: "Кнопка внизу мобильного экрана",
  showContacts: "Показывать контакты", servicesTitle: "Заголовок колонки услуг", serviceLinks: "Ссылки на услуги", allServices: "Ссылка на каталог",
  companyTitle: "Заголовок колонки компании", companyLinks: "Ссылки компании", privacy: "Ссылка на политику",
  metaTitle: "SEO-заголовок", metaDescription: "SEO-описание", title: "Заголовок", introduction: "Вступительный текст",
  hero: "Первый экран", eyebrow: "Подпись над заголовком", description: "Описание", image: "Изображение", heroImage: "Фото первого экрана",
  src: "Адрес изображения", alt: "Описание изображения", label: "Название ссылки", href: "Адрес ссылки", featured: "Выбранные услуги",
  slug: "Услуга", galleryTitle: "Заголовок галереи", gallery: "Фотографии", processTitle: "Заголовок раздела этапов", process: "Этапы работы",
  faqTitle: "Заголовок вопросов", faqs: "Вопросы и ответы", question: "Вопрос", answer: "Ответ", cta: "Заключительный блок с заявкой",
  approach: "Как мы работаем", story: "История компании", caption: "Подпись к фото", quoteTitle: "Заголовок раздела о смете",
  quoteDescription: "Что входит в смету", commitments: "Обязательства компании", areasTitle: "Заголовок о географии работы", areasDescription: "География работы",
  contactsTitle: "Заголовок над контактами", nextTitle: "Заголовок о следующем шаге", nextDescription: "Что будет после заявки", coverageLink: "Ссылка на районы",
  disclosure: "Условия финансирования", emptyText: "Текст при отсутствии отзывов", reviews: "Отзывы", date: "Дата", rating: "Оценка от 1 до 5", author: "Имя автора",
  text: "Текст отзыва", service: "Услуга", paragraphs: "Абзацы", listTitle: "Заголовок списка", listDescription: "Описание списка",
  communitiesTitle: "Заголовок списка городов", coverageNote: "Примечание о зоне обслуживания", limitsTitle: "Заголовок раздела ограничений", limits: "Ограничения",
  navLabel: "Название услуги в меню", h1: "Главный заголовок", heroSubhead: "Текст первого экрана", introTitle: "Заголовок о сервисе", intro: "Описание услуги",
  benefitsTitle: "Заголовок преимуществ", benefits: "Преимущества", subServices: "Варианты работ", related: "Связанные услуги",
  planningTitle: "Заголовок о планировании", planningText: "Текст о планировании", focusTitle: "Заголовок основного блока", checklist: "Что обсудить перед сметой",
};

export function labelFor(key: string, parent?: string) {
  if (key === "name" && parent === "reviews") return labels.author;
  return labels[key] || key;
}

export const longFields = new Set([
  "description", "introduction", "approach", "story", "quoteDescription", "areasDescription", "nextDescription", "coverageNote",
  "limits", "disclosure", "emptyText", "metaDescription", "heroSubhead", "planningText", "listDescription", "answer", "text", "paragraphs", "intro", "commitments",
]);

export const optionalFields = new Set([
  "brand", "mobileQuote", "phone", "email", "streetAddress", "postalCode", "hours", "responseTime", "licenseNumber",
  "epaCertification", "reviewUrl", "story", "introTitle", "alt",
]);

export const optionalLinkGroups = new Set(["quote", "privacy", "allServices"]);

export function itemTemplate(key: string): FieldValue {
  switch (key) {
    case "navigation": case "serviceLinks": case "companyLinks": return { label: "", href: "/" };
    case "featured": return { slug: "", description: "" };
    case "faqs": return { question: "", answer: "" };
    case "process": case "benefits": case "subServices": return { title: "", description: "" };
    case "gallery": return { title: "", src: "", alt: "" };
    case "reviews": return { name: "", date: "", service: "", rating: 5, text: "" };
    default: return "";
  }
}

export function safeWebUrl(value: string) {
  if (!/^https?:\/\/[^\s\\]+$/i.test(value)) return false;
  try {
    const url = new URL(value);
    return Boolean(url.hostname) && !url.username && !url.password;
  } catch {
    return false;
  }
}

export function safeLocalPath(value: string) {
  return /^\/(?![\/\\])[^\\\s]*$/.test(value);
}

export function isImageSource(value: string) {
  return (safeLocalPath(value) && value !== "/") || safeWebUrl(value);
}
