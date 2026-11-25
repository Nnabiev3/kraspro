"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export type PageGroup = { title: string; pages: { path: string; title: string }[] };

export default function PagePicker({ groups, current }: { groups: PageGroup[]; current?: string }) {
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();
  const filtered = groups.map(group => ({
    ...group, pages: group.pages.filter(page => (page.title + " " + page.path).toLowerCase().includes(needle)),
  })).filter(group => group.pages.length);
  return <div className="cms-picker">
    <label className="cms-search"><Search size={17} aria-hidden="true" /><input placeholder="Название или URL" aria-label="Найти страницу" type="search" value={query} onChange={event => setQuery(event.target.value)} /></label>
    {!filtered.length && <p>Страницы не найдены.</p>}
    {filtered.map(group => <details key={group.title} open={Boolean(needle) || group.pages.some(page => page.path === current) || group === filtered[0]}>
      <summary>{group.title} <span className="cms-count">{group.pages.length}</span></summary>
      <ul>{group.pages.map(page => <li key={page.path}>
        <a href={"/admin?section=pages&page=" + encodeURIComponent(page.path)} aria-current={page.path === current ? "page" : undefined}>
          <span>{page.title}</span><small>{page.path}</small>
        </a>
      </li>)}</ul>
    </details>)}
  </div>;
}
