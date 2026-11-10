import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ServiceStep } from "@/data/services";

/** Displays the supplied project steps in order. */
export default function ProcessSteps({ title, steps }: { title: string; steps: readonly ServiceStep[] }) {
  return (
    <section aria-label={title} className="bg-cream py-14 md:py-24">
      <Container>
        <SectionHeading title={title} />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <span aria-hidden="true" className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-teal text-lg font-semibold text-white">{index + 1}</span>
              <h3 className="font-heading text-xl font-semibold text-navy">{step.title}</h3>
              <p className="mt-3 text-gray-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
