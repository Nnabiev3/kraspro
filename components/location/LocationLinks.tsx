import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { locationPath } from "@/data/locations";
import { getActiveLocations, getActiveServiceLocations, serviceLocationPath } from "@/data/service-locations";
import { getServiceAreaLinks } from "@/data/site";

export default function LocationLinks({ serviceSlug, excludeLocation, nearby }: { serviceSlug?: string; excludeLocation?: string; nearby?: readonly string[] }) {
  const locations = getActiveLocations();
  const serviceAreas = new Map((serviceSlug ? getActiveServiceLocations(serviceSlug) : []).map(entry => [entry.location.name, entry]));
  const areas = getServiceAreaLinks().flatMap(area => {
    const entry = serviceAreas.get(area.name);
    const hub = entry?.location.hub ?? locations.find(location => location.name === area.name);
    const slug = entry?.locationSlug ?? hub?.slug;
    if (excludeLocation && (slug === excludeLocation || (serviceSlug ? !entry : !hub))) return [];
    if (nearby && (!slug || !nearby.includes(slug))) return [];
    return [{
      name: area.name,
      region: hub ? `${hub.county}, MD` : "Maryland",
      href: entry ? serviceLocationPath(entry) : excludeLocation && hub ? locationPath(hub) : area.href,
    }];
  });

  if (!areas.length) return null;
  return <section id={serviceSlug && !excludeLocation ? "service-cities" : undefined} className="scroll-mt-24 bg-surface py-14 md:py-20">
    <Container>
      <SectionHeading title={serviceSlug === "deck-building" ? "Deck Building Service Areas" : excludeLocation ? "Explore nearby communities" : "Find this service near you"} description="Choose your community to explore the work and plan your next step." />
      <ul className="grid gap-4 sm:grid-cols-3">
        {areas.map(area => <li key={area.name}>
          <Link href={area.href} className="group flex h-full min-h-24 items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 text-navy transition-colors hover:border-teal">
            <MapPin className="size-5 shrink-0 text-teal" aria-hidden="true" />
            <span className="min-w-0 flex-1"><span className="block break-words text-xl font-semibold">{area.name}</span><span className="text-sm text-gray-600">{area.region}</span></span>
            <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 text-teal" />
          </Link>
        </li>)}
      </ul>
    </Container>
  </section>;
}
