import ProcessSteps from "@/components/sections/ProcessSteps";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export type GuideProps = {
  city: string;
  pricingNote: string;
  examples: readonly { title: string; description: string }[];
  sampleReviews: readonly string[];
};

type GuideDetails = {
  service: string;
  costId: string;
  priceRanges: readonly { label: string; range: string }[];
  priceDisclosure: string;
  processTitle: string;
  steps: readonly { title: string; description: string }[];
  exampleDisclosure: string;
  reviewDisclosure: string;
};

export default function LocationProjectGuide({ city, pricingNote, examples, sampleReviews, guide }: GuideProps & { guide: GuideDetails }) {
  return <>
    <section aria-labelledby={guide.costId} className="bg-surface py-14 md:py-20">
      <Container>
        <div id={guide.costId}><SectionHeading title={`Cost of ${guide.service} in ${city}, MD`} description={pricingNote} /></div>
        <dl className="grid gap-4 sm:grid-cols-3">
          {guide.priceRanges.map(({ label, range }) => <div key={label} className="rounded-xl border border-gray-200 bg-white p-6">
            <dt className="font-semibold text-navy">{label}</dt><dd className="mt-2 text-2xl font-semibold text-teal">{range}</dd>
          </div>)}
        </dl>
        <p className="mt-5 max-w-2xl text-sm text-gray-600">{guide.priceDisclosure}</p>
      </Container>
    </section>
    <ProcessSteps title={guide.processTitle} steps={guide.steps} />
    <section className="bg-white py-14 md:py-20">
      <Container>
        <SectionHeading title={`${guide.service} Examples for ${city} Homes`} description={guide.exampleDisclosure} />
        <div className="grid gap-4 sm:grid-cols-2">
          {examples.map(({ title, description }) => <article key={title} className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-navy">{title}</h3><p className="mt-3 leading-relaxed text-gray-600">{description}</p>
          </article>)}
        </div>
      </Container>
    </section>
    <section className="bg-surface py-14 md:py-20">
      <Container>
        <SectionHeading title="Illustrative Sample Reviews" description={guide.reviewDisclosure} />
        <div className="grid gap-4 sm:grid-cols-2">
          {sampleReviews.map(review => <figure key={review} className="rounded-xl border border-gray-200 bg-white p-6">
            <blockquote className="leading-relaxed text-navy">&ldquo;{review}&rdquo;</blockquote>
            <figcaption className="mt-4 text-sm text-gray-600">Illustrative sample</figcaption>
          </figure>)}
        </div>
      </Container>
    </section>
  </>;
}
