import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import { isConfirmed, site } from "@/data/site";
import { reviews } from "@/data/reviews";

/** Shows credentials, real review statistics and enabled process commitments. */
export default function TrustBar() {
  const { trust, trustText, licenseNumber } = site;
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
    <section aria-label="KrasPro credentials and commitments" className="border-y border-gray-200 bg-white py-6">
      <Container>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {labels.map(label => (
            <li key={label} className="flex items-center gap-2 font-semibold text-navy">
              <CheckCircle2 aria-hidden="true" className="size-5 shrink-0 text-teal" />
              {label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
