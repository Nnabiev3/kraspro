import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ServiceStep } from "@/data/services";

/** Displays the supplied project steps in order. */
export default function ProcessSteps({ title, steps }: { title: string; steps: readonly ServiceStep[] }) {
  return (
    <section aria-label={title} className="bg-white py-14 md:py-24">
      <Container>
        <SectionHeading title={title} />
        <ol className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t border-navy/20 pt-5">
              <span aria-hidden="true" className="mb-4 inline-flex size-9 items-center justify-center rounded-full border border-teal/40 font-semibold text-teal">{index + 1}</span>
              <h3 className="font-heading text-2xl font-semibold leading-tight text-navy">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
