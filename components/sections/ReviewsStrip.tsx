import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { reviews } from "@/data/reviews";
import { isConfirmed, site } from "@/data/site";

/** Displays real reviews when provided, or invites homeowners to share feedback. */
export default function ReviewsStrip() {
  const reviewUrl = isConfirmed(site.reviewUrl) ? site.reviewUrl : "/reviews";
  return (
    <section aria-label="Homeowner reviews" className="bg-teal-50 py-14 md:py-24">
      <Container>
        <SectionHeading title="Homeowner Reviews" />
        {reviews.length ? (
          <>
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
          </>
        ) : (
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:p-8">
            <div>
              <h3 className="font-heading text-xl font-semibold text-navy">Reviews coming soon</h3>
              <p className="mt-2 text-gray-600">Have we worked on your home? We’d like to hear how it went.</p>
            </div>
            <Button href={reviewUrl} variant="secondary">Be Our Next Review</Button>
          </div>
        )}
      </Container>
    </section>
  );
}
