import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import { isConfirmed } from "@/data/site";
import type { Review } from "@/data/reviews";
import { readSite } from "@/lib/cms/public";

/** Shows credentials, real review statistics and enabled process commitments. */
export default async function TrustBar({ reviews }: { reviews: Review[] }) {
  const { trust, trustText, licenseNumber } = await readSite();
  const rating = reviews.length
    ? (reviews.reduce((total, review) => total + review.rating, 0) / reviews.length).toFixed(1)
    : null;
  const labels = [
    trust.licensed && (isConfirmed(licenseNumber) ? `Maryland Home Improvement · MHIC #${licenseNumber}` : trustText.licensed),
    trust.insured && trustText.insured,
    rating ? `${rating} out of 5 · ${reviews.length} ${reviews.length === 1 ? "review" : "reviews"}` : trust.photoEvidence && trustText.photoEvidence,
    !rating && trust.itemizedQuotes && trustText.itemizedQuotes,
  ].filter((label): label is string => Boolean(label));

  if (!labels.length) return null;
  return (
    <section aria-label="KrasPro credentials and commitments" className="border-b border-gray-200 bg-surface py-5 sm:py-6">
      <Container>
        <ul className="grid grid-cols-2 gap-x-5 gap-y-3 lg:flex lg:flex-wrap lg:justify-between lg:gap-x-8">
          {labels.map(label => (
            <li key={label} className="flex items-center gap-2 text-sm font-semibold text-navy sm:text-base">
              <CheckCircle2 aria-hidden="true" className="size-5 shrink-0 text-teal" />
              {label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
