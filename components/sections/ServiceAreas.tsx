import { MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

/** Lists the areas configured for KrasPro. */
export default function ServiceAreas() {
  return (
    <section aria-label="Service areas" className="bg-white py-14 md:py-24">
      <Container className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:gap-12">
        <SectionHeading title="Where We Work" description={`Based in ${site.location}. Ask us about your project and location.`} />
        <ul className="grid grid-cols-2 gap-3 rounded-2xl border border-gray-200 bg-teal-50 p-4 sm:p-6">
          {site.serviceAreas.map(area => (
            <li key={area} className="flex items-start gap-2 font-semibold text-navy">
              <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-teal" />{area}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
