"use client";
import { useId, useState, type FormEvent } from "react";
import { quoteSchema } from "@/lib/validators";
import { services } from "@/data/services";

type Props = { defaultService?: string; defaultCity?: string; sourcePage?: string };
const fieldClass = "mt-1 w-full rounded-lg border border-gray-600 bg-white px-3 py-2 text-navy";

/** Collects and validates a homeowner's quote request. */
export default function QuoteForm({ defaultService = "", defaultCity = "", sourcePage = "" }: Props) {
  const formId = useId();
  const fieldId = (field: string) => `${formId}-${field}`;
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);
  const [preferredContact, setPreferredContact] = useState<"phone" | "email">("phone");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());
    const parsed = quoteSchema.safeParse({ ...values, consent: data.get("consent") === "on", website: "" });
    const issues: Record<string, string> = {};
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        issues[key] ||= key === "consent" ? "Please confirm your consent." :
          issue.code === "custom" ? issue.message : "Please enter a valid value.";
      }
    }
    const photo = data.get("photo");
    if (photo instanceof File && photo.size > 1024 * 1024) issues.photo = "Choose an image no larger than 1 MB.";
    if (photo instanceof File && photo.size && !["image/jpeg", "image/png", "image/webp"].includes(photo.type)) issues.photo = "Choose a JPEG, PNG or WebP image.";
    setErrors(issues);
    if (Object.keys(issues).length) return;
    setPending(true);
    setStatus("");
    try {
      const response = await fetch("/api/quote", { method: "POST", body: data });
      const result: { message?: string } = await response.json();
      if (!response.ok) throw new Error(result.message || "We could not submit your request.");
      form.reset();
      setPreferredContact("phone");
      setStatus(result.message || "Your request was submitted.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "We could not submit your request. Please try again.");
    } finally {
      setPending(false);
    }
  }

  function error(name: string) { return errors[name] ? <p id={fieldId(`${name}-error`)} className="mt-1 text-sm font-semibold text-navy">{errors[name]}</p> : null; }
  function attributes(name: string) { return { "aria-invalid": Boolean(errors[name]), "aria-describedby": errors[name] ? fieldId(`${name}-error`) : undefined }; }
  return <form onSubmit={submit} noValidate className="space-y-4">
    <input type="hidden" name="sourcePage" value={sourcePage} />
    {defaultCity && <div><label htmlFor={fieldId("quote-city")}>Project town</label><input className={fieldClass} id={fieldId("quote-city")} name="city" defaultValue={defaultCity} autoComplete="address-level2" maxLength={100} {...attributes("city")} />{error("city")}</div>}
    <div><label htmlFor={fieldId("quote-name")}>Name</label><input className={fieldClass} id={fieldId("quote-name")} name="name" autoComplete="name" required maxLength={100} {...attributes("name")} />{error("name")}</div>
    <div>
      <label htmlFor={fieldId("quote-preference")}>How should we contact you?</label>
      <select
        className={fieldClass}
        id={fieldId("quote-preference")}
        name="preferredContact"
        value={preferredContact}
        onChange={event => {
          setPreferredContact(event.target.value === "email" ? "email" : "phone");
          setErrors(previous => ({ ...previous, phone: "", email: "" }));
        }}
        {...attributes("preferredContact")}
      >
        <option value="phone">Phone</option>
        <option value="email">Email</option>
      </select>
      {error("preferredContact")}
    </div>
    {preferredContact === "phone" ? (
      <div key="phone"><label htmlFor={fieldId("quote-phone")}>Phone</label><input className={fieldClass} id={fieldId("quote-phone")} name="phone" type="tel" autoComplete="tel" required maxLength={30} {...attributes("phone")} />{error("phone")}</div>
    ) : (
      <div key="email"><label htmlFor={fieldId("quote-email")}>Email</label><input className={fieldClass} id={fieldId("quote-email")} name="email" type="email" autoComplete="email" required maxLength={254} {...attributes("email")} />{error("email")}</div>
    )}
    <div><label htmlFor={fieldId("quote-zip")}>ZIP code</label><input className={fieldClass} id={fieldId("quote-zip")} name="zip" autoComplete="postal-code" required {...attributes("zip")} />{error("zip")}</div>
    <div><label htmlFor={fieldId("quote-service")}>Service</label><select className={fieldClass} id={fieldId("quote-service")} name="service" defaultValue={defaultService} required {...attributes("service")}><option value="">Select a service</option>{services.map(service => <option key={service.slug} value={service.slug}>{service.navLabel}</option>)}</select>{error("service")}</div>
    <div><label htmlFor={fieldId("quote-description")}>Project description (optional)</label><textarea className={fieldClass} id={fieldId("quote-description")} name="description" rows={4} maxLength={5000} {...attributes("description")} />{error("description")}</div>
    <div><label htmlFor={fieldId("quote-photo")}>Photo (optional, JPEG, PNG or WebP, up to 1 MB)</label><input className={fieldClass} id={fieldId("quote-photo")} name="photo" type="file" accept="image/jpeg,image/png,image/webp" {...attributes("photo")} />{error("photo")}</div>
    <div className="absolute -left-[10000px]" aria-hidden="true"><label htmlFor={fieldId("company_website")}>Company website</label><input id={fieldId("company_website")} name="company_website" tabIndex={-1} autoComplete="off" /></div>
    <div><label className="flex items-start gap-2"><input className="mt-1" type="checkbox" name="consent" required {...attributes("consent")} />I agree to be contacted about my project.</label>{error("consent")}</div>
    <button disabled={pending} className="button-primary min-h-12 rounded-full px-6 py-3 font-semibold transition-colors disabled:opacity-60">{pending ? "Sending…" : "Request a Free Quote"}</button>
    {status && <p role="status" aria-live="polite">{status}</p>}
  </form>;
}
