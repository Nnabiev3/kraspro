"use client";

import { useEffect, useState, type FormEvent } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUp, ExternalLink, Plus, Trash2 } from "lucide-react";
import { isImageSource, itemTemplate, labelFor, longFields, type FieldValue, type Fields } from "@/lib/cms/fields";
import { publish } from "./actions";

type Options = { value: string; label: string }[];
type FieldProps = { name: string; value: FieldValue; update: (value: FieldValue) => void; services: Options; parent?: string; item?: boolean };

function Field({ name, value, update, services, parent, item }: FieldProps) {
  const label = labelFor(name, parent);
  const options = name === "related" || name === "slug" || name === "service" ? services : undefined;
  if (Array.isArray(value)) {
    function move(index: number, offset: number) {
      const next = [...value as FieldValue[]];
      [next[index], next[index + offset]] = [next[index + offset], next[index]];
      update(next);
    }
    return <fieldset className="cms-list">
      <legend>{label} <span className="cms-count">{value.length}</span></legend>
      {value.map((entry, index) => {
        const fields = typeof entry === "object" && !Array.isArray(entry) ? entry : undefined;
        const summary = fields?.label || fields?.title || fields?.question || fields?.name || (typeof entry === "string" && entry);
        const title = typeof summary === "string" ? summary : "Новый элемент";
        return <details className="cms-list-item" key={index}>
          <summary><span>{index + 1}. {title}</span></summary>
          <div className="cms-list-content">
            <Field name={name} value={entry} update={next => update(value.map((original, i) => i === index ? next : original))} services={services} parent={name} item />
            <div className="cms-row-actions">
              <button type="button" className="cms-icon" disabled={index === 0} onClick={() => move(index, -1)} aria-label="Выше"><ArrowUp size={16} /></button>
              <button type="button" className="cms-icon" disabled={index === value.length - 1} onClick={() => move(index, 1)} aria-label="Ниже"><ArrowDown size={16} /></button>
              <button type="button" className="cms-remove" onClick={() => update(value.filter((_, i) => i !== index))}><Trash2 size={15} /> Удалить</button>
            </div>
          </div>
        </details>;
      })}
      <button type="button" className="cms-secondary" onClick={event => {
        const list = event.currentTarget.closest("fieldset");
        update([...value, itemTemplate(name)]);
        requestAnimationFrame(() => {
          const last = list?.querySelector<HTMLDetailsElement>(":scope > details:last-of-type");
          if (!last) return;
          last.open = true;
          last.querySelector<HTMLElement>("input, textarea, select")?.focus();
        });
      }} disabled={value.length >= 40}><Plus size={16} /> Добавить</button>
    </fieldset>;
  }
  if (typeof value === "object") {
    const children = Object.entries(value).map(([key, field]) => <Field key={key} name={key} parent={name} value={field} update={next => update({ ...value, [key]: next })} services={services} />);
    return item ? <div className="cms-field-stack">{children}</div> : <fieldset className="cms-object"><legend>{label}</legend><div className="cms-field-stack">{children}</div></fieldset>;
  }
  if (typeof value === "boolean") return <label className="cms-check"><input type="checkbox" checked={value} onChange={event => update(event.target.checked)} /> {label}</label>;
  if (typeof value === "number") return <label className="cms-field"><span>{label}</span><select value={value} onChange={event => update(Number(event.target.value))}>{[1, 2, 3, 4, 5].map(rating => <option key={rating}>{rating}</option>)}</select></label>;
  const image = (name === "logo" || name === "src") && isImageSource(value);
  return <label className="cms-field">
    <span>{item ? options ? "Услуга" : name === "sameAs" ? "Адрес" : "Текст" : label}</span>
    {options ? <select value={value} onChange={event => update(event.target.value)}>
      <option value="">Выберите услугу</option>
      {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
    </select> : longFields.has(name) ? <textarea rows={value.length > 160 ? 5 : 3} value={value} onChange={event => update(event.target.value)} />
      : <input type={name === "date" ? "date" : name === "email" ? "email" : name === "phone" ? "tel" : "text"} value={value} onChange={event => update(event.target.value)} />}
    {image && <Image className="cms-image-preview" src={value} alt="" width={140} height={82} unoptimized />}
  </label>;
}

export type Panel = { title: string; keys: string[] };

export default function Editor({ id, title, path, initial, panels, services }: {
  id: string; title: string; path?: string; initial: { values: Fields; revision: number }; panels: Panel[]; services: Options;
}) {
  const [values, setValues] = useState(initial.values);
  const [saved, setSaved] = useState(initial);
  const [panel, setPanel] = useState(0);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState({ text: "", error: false });
  const dirty = JSON.stringify(values) !== JSON.stringify(saved.values);
  useEffect(() => {
    if (!dirty) return;
    function prevent(event: BeforeUnloadEvent) { event.preventDefault(); event.returnValue = ""; }
    window.addEventListener("beforeunload", prevent);
    return () => window.removeEventListener("beforeunload", prevent);
  }, [dirty]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending || !dirty) return;
    setPending(true);
    setMessage({ text: "", error: false });
    try {
      const result = await publish(id, saved.revision, values);
      if (result.error) {
        setMessage({ text: result.error, error: true });
      } else if (result.values && result.revision !== undefined) {
        setValues(result.values);
        setSaved({ values: result.values, revision: result.revision });
        setMessage({ text: "Изменения опубликованы.", error: false });
      }
    } catch {
      setMessage({ text: "Связь прервалась. Проверьте страницу перед повторной публикацией.", error: true });
    } finally {
      setPending(false);
    }
  }

  return <form className="cms-editor" onSubmit={submit}>
    <div className="cms-document-head">
      <div><h2>{title}</h2>{path && <span className="cms-path">{path}</span>}</div>
      {path && <a href={path} target="_blank" rel="noreferrer" className="cms-secondary">Открыть страницу <ExternalLink size={15} /></a>}
    </div>
    {panels.length > 1 && <div className="cms-tabs" aria-label="Разделы редактора">
      {panels.map((item, index) => <button type="button" key={item.title} aria-pressed={panel === index} onClick={() => setPanel(index)}>{item.title}</button>)}
    </div>}
    <fieldset disabled={pending} className="cms-fields">
      <legend className="sr-only">{panels[panel].title}</legend>
      {panels[panel].keys.map(key => <Field key={key} name={key} value={values[key]} update={next => {
        setValues(previous => ({ ...previous, [key]: next }));
        setMessage({ text: "", error: false });
      }} services={services} />)}
    </fieldset>
    <div className="cms-publish">
      <p role={message.error ? "alert" : "status"} className={message.error ? "cms-error" : undefined}>{message.text || (dirty ? "Есть неопубликованные изменения" : saved.revision ? "Изменения опубликованы" : "Исходная версия сайта")}</p>
      <div className="cms-publish-actions">
        {dirty && <button type="button" className="cms-secondary" disabled={pending} onClick={() => { setValues(saved.values); setMessage({ text: "Восстановлена опубликованная версия.", error: false }); }}>Отменить изменения</button>}
        <button type="submit" className="cms-primary" disabled={!dirty || pending}>{pending ? "Публикуем…" : "Опубликовать"}</button>
      </div>
    </div>
  </form>;
}
