import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Service } from "@/data/services";

/** Lists the benefits or enabled commitments supplied by the page. */
export default function BenefitsGrid({ title, benefits }: { title: string; benefits: readonly Service["benefits"][number][] }) {
  if (!benefits.length) return null;
  return (
    <section aria-label={title} className="bg-white py-14 md:py-24">
      <Container>
        <SectionHeading title={title} />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {benefits.map(benefit => (
            <li key={benefit.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:shadow-md motion-safe:hover:-translate-y-1">
              <span className="mb-4 grid size-10 place-items-center rounded-full bg-teal-50 text-teal">
                <Check aria-hidden="true" className="size-5" />
              </span>
              <h3 className="font-heading text-xl font-semibold text-navy">{benefit.title}</h3>
              <p className="mt-3 text-gray-600">{benefit.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
