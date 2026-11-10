import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

/** Links to general financing information without promising terms or availability. */
export default function FinancingBand() {
  return (
    <section aria-labelledby="financing-title" className="bg-navy py-14 text-white md:py-24">
      <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="financing-title" className="font-heading text-3xl font-semibold leading-tight md:text-4xl">Planning a larger project?</h2>
          <p className="mt-4 max-w-xl text-lg">Find out what to ask about financing before you decide how to pay for the work.</p>
        </div>
        <Button href="/financing">Explore Financing</Button>
      </Container>
    </section>
  );
}
