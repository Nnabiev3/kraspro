import type { Faq } from "@/data/services";
import { faqSchema } from "@/lib/schema";
import JsonLd from "./JsonLd";

/** Publishes the same FAQ entries that are visible on the page. */
export default function FaqJsonLd({ faqs }: { faqs: readonly Faq[] }) {
  return faqs.length ? <JsonLd data={faqSchema(faqs)} /> : null;
}
