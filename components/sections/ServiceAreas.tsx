import { MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { getServiceAreaLinks } from "@/data/site";
import { readGeneral } from "@/lib/cms/public";

/** Lists the areas configured for KrasPro. */
export default async function ServiceAreas() {
  const { location } = await readGeneral();
  return (
    <section aria-label="Service areas" className="bg-white py-14 md:py-24">
      <Container className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:gap-12">
        <SectionHeading title="Where We Work" description={`Based in ${location}. Ask us about your project and location.`} />
        <ul className="grid grid-cols-2 gap-3 rounded-2xl border border-gray-200 bg-surface p-4 sm:p-6">
          {getServiceAreaLinks().map(({ name, href }) => (
            <li key={name}>
              <a href={href} className="flex items-start gap-2 font-semibold text-navy underline-offset-4 hover:underline">
                <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-teal" />{name}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
