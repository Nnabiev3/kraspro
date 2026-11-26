import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Review } from "@/data/reviews";

/** Displays homeowner reviews supplied for publication. */
export default function ReviewsStrip({ reviews }: { reviews: Review[] }) {
  if (!reviews.length) return null;
  return (
    <section aria-label="Homeowner reviews" className="bg-surface py-14 md:py-24">
      <Container>
        <SectionHeading title="Homeowner Reviews" />
        <ul className="mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 3).map((review, index) => (
            <li key={`${review.date}-${review.name}-${index}`} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="font-semibold text-teal">{review.rating} out of 5</p>
              <blockquote className="my-3 text-gray-600">{review.text}</blockquote>
              <p className="font-semibold text-navy">{review.name}</p>
            </li>
          ))}
        </ul>
        <Button href="/reviews" variant="secondary">Read All Reviews</Button>
      </Container>
    </section>
  );
}
