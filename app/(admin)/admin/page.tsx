import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, FileText, LayoutPanelTop, LogOut, PanelBottom, Settings2 } from "lucide-react";
import { editorPassword, isEditor } from "@/lib/cms/auth";
import { getDefinition, getEditorDocument, pageGroups, serviceOptions, settings, type Section } from "@/lib/cms/editor";
import { storageReady } from "@/lib/cms/storage";
import { logout } from "./actions";
import Editor, { type Panel } from "./Editor";
import Login from "./Login";
import PagePicker from "./PagePicker";
import "./admin.css";

export const metadata: Metadata = { title: "Управление сайтом | KrasPro", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

const sections = [
  { id: "general", label: "Общие настройки", icon: Settings2 },
  { id: "header", label: "Шапка сайта", icon: LayoutPanelTop },
  { id: "footer", label: "Подвал сайта", icon: PanelBottom },
  { id: "pages", label: "Страницы", icon: FileText },
] as const;

const groups: Record<Section, Panel[]> = {
  general: [
    { title: "Бренд", keys: ["name", "logo", "location"] },
    { title: "Контакты", keys: ["phone", "email", "streetAddress", "postalCode", "hours", "responseTime"] },
    { title: "Ссылки и лицензии", keys: ["reviewUrl", "sameAs", "licenseNumber", "epaCertification"] },
  ],
  header: [
    { title: "Бренд", keys: ["brand", "brandHref"] },
    { title: "Меню", keys: ["navigation", "showHomeOnDesktop"] },
    { title: "Заявки и телефон", keys: ["quote", "showPhone", "mobileQuote"] },
  ],
  footer: [
    { title: "Компания и контакты", keys: ["description", "showContacts", "quote", "privacy"] },
    { title: "Колонка услуг", keys: ["servicesTitle", "serviceLinks", "allServices"] },
    { title: "Колонка компании", keys: ["companyTitle", "companyLinks"] },
  ],
  pages: [
    { title: "Галерея", keys: ["galleryTitle", "gallery"] },
    { title: "Этапы и вопросы", keys: ["processTitle", "process", "faqTitle", "faqs"] },
    { title: "Отзывы", keys: ["reviews", "emptyText"] },
    { title: "SEO", keys: ["metaTitle", "metaDescription"] },
  ],
};

function panelsFor(section: Section, defaults: object) {
  const keys = Object.keys(defaults);
  const panels = groups[section].map(panel => ({ ...panel, keys: panel.keys.filter(key => keys.includes(key)) })).filter(panel => panel.keys.length);
  if (section !== "pages") return panels;
  const rest = keys.filter(key => !panels.some(panel => panel.keys.includes(key)));
  return [{ title: "Содержание", keys: rest }, ...panels].filter(panel => panel.keys.length);
}

function Brand() {
  return <div className="cms-brand">
    <Image src="/images/brand/logo-icon-transparent.svg" alt="" width={34} height={29} unoptimized />
    <div><strong>KrasPro</strong><span>Управление сайтом</span></div>
  </div>;
}

export default async function AdminPage({ searchParams }: { searchParams: { section?: string | string[]; page?: string | string[] } }) {
  if (!isEditor()) return <main className="cms cms-login" lang="ru">
    <div className="cms-login-card">
      <Brand />
      <h1>Вход в админку</h1>
      {editorPassword() ? <Login /> : <p>Доступ к редактору пока не настроен.</p>}
      <a href="/" className="cms-back">Перейти на сайт <ExternalLink size={15} /></a>
    </div>
  </main>;

  const section = sections.find(item => item.id === searchParams.section)?.id ?? "general";
  const page = typeof searchParams.page === "string" ? searchParams.page : "/";
  const id = section === "pages" ? "page:" + page : section;
  const definition = getDefinition(id);
  const caption = section === "pages" ? "Выберите страницу, чтобы изменить её содержание и SEO." : settings[section].description;
  const heading = sections.find(item => item.id === section)?.label;
  const ready = storageReady();
  let initial;
  try {
    if (definition && ready) initial = await getEditorDocument(id, definition.defaults);
  } catch (error) {
    console.error("CMS editor load failed", id, error);
  }

  return <div className="cms cms-workspace" lang="ru">
    <aside className="cms-sidebar">
      <Brand />
      <nav aria-label="Разделы админки">
        {sections.map(({ id, label, icon: Icon }) => <a href={"/admin?section=" + id} key={id} aria-current={section === id ? "page" : undefined}><Icon size={18} aria-hidden="true" /> {label}</a>)}
      </nav>
      <div className="cms-sidebar-bottom">
        <a href="/" target="_blank" rel="noreferrer"><ExternalLink size={18} /> Открыть сайт</a>
        <form action={logout}><button type="submit"><LogOut size={18} /> Выйти</button></form>
      </div>
    </aside>
    <main className="cms-main">
      <header className="cms-main-head"><h1>{heading}</h1><p>{caption}</p></header>
      <div className={section === "pages" ? "cms-page-layout" : "cms-settings-layout"}>
        {section === "pages" && <PagePicker groups={pageGroups.map(group => ({ title: group.title, pages: group.pages.map(({ title, path }) => ({ title, path })) }))} current={page} />}
        {definition && initial
          ? <Editor key={id} id={id} title={definition.title} path={"path" in definition ? definition.path : undefined} initial={initial} panels={panelsFor(section, definition.defaults)} services={serviceOptions} />
          : <p className="cms-blocked" role="status">{!ready ? "Хранилище публикаций ещё не подключено." : definition ? "Не удалось загрузить раздел. Попробуйте обновить страницу." : "Страница не найдена. Выберите страницу из списка."}</p>}
      </div>
    </main>
  </div>;
}
