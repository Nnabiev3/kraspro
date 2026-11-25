import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { locationPath } from "@/data/locations";
import { getActiveLocations, getActiveServiceLocations, serviceLocationPath } from "@/data/service-locations";
import { getServiceAreaLinks } from "@/data/site";

export default function LocationLinks({ serviceSlug, excludeLocation }: { serviceSlug?: string; excludeLocation?: string }) {
  const locations = getActiveLocations();
  const serviceLocations = new Set(
    getActiveServiceLocations().filter(entry => entry.serviceSlug === serviceSlug).map(entry => entry.locationSlug),
  );
  const hrefFor = (slug: string, fallback: string) => serviceSlug && serviceLocations.has(slug)
    ? serviceLocationPath({ serviceSlug, locationSlug: slug })
    : fallback;

  const areas = excludeLocation
    ? locations
        .filter(location => location.slug !== excludeLocation && (!serviceSlug || serviceLocations.has(location.slug)))
        .map(location => ({ name: location.name, region: `${location.county}, MD`, href: hrefFor(location.slug, locationPath(location)) }))
    : getServiceAreaLinks().map(area => {
        const location = locations.find(item => item.name === area.name);
        return location
          ? { name: area.name, region: `${location.county}, MD`, href: hrefFor(location.slug, area.href) }
          : { ...area, region: "Maryland" };
      });

  if (!areas.length) return null;
  return <section className="bg-surface py-14 md:py-20">
    <Container>
      <SectionHeading title={excludeLocation ? "Explore nearby communities" : "Find this service near you"} description="Choose your community to explore the work and plan your next step." />
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
