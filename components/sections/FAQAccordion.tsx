import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Faq } from "@/data/services";

/** Uses native disclosure controls so the questions work without JavaScript. */
export default function FAQAccordion({ title, faqs }: { title: string; faqs: readonly Faq[] }) {
  if (!faqs.length) return null;
  return (
    <section aria-label={title} className="bg-white py-14 md:py-24">
      <Container>
        <SectionHeading title={title} />
        <div className="max-w-3xl divide-y divide-navy/15 border-y border-navy/15">
          {faqs.map(faq => (
            <details key={faq.question} className="group open:bg-surface">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-lg font-semibold text-navy transition-colors hover:bg-teal-50 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown aria-hidden="true" className="size-5 shrink-0 text-teal group-open:rotate-180 motion-safe:transition-transform" />
              </summary>
              <p className="px-4 pb-5 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
