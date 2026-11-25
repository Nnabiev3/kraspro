import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { locationPath } from "@/data/locations";
import { getActiveLocations, getActiveServiceLocations, serviceLocationPath } from "@/data/service-locations";

export default function LocationLinks({ serviceSlug, excludeLocation }: { serviceSlug?: string; excludeLocation?: string }) {
  const entries = getActiveServiceLocations();
  const areas = getActiveLocations().filter(location => location.slug !== excludeLocation && (!serviceSlug || entries.some(entry => entry.serviceSlug === serviceSlug && entry.locationSlug === location.slug)));
  if (!areas.length) return null;
  return <section className="bg-surface py-14 md:py-20">
    <Container>
      <SectionHeading title={excludeLocation ? "Explore nearby communities" : "Find this service near you"} description="Choose your community to explore the work and plan your next step." />
      <ul className="grid gap-4 sm:grid-cols-3">
        {areas.map(location => <li key={location.slug}>
          <Link href={serviceSlug ? serviceLocationPath({ serviceSlug, locationSlug: location.slug }) : locationPath(location)} className="group flex min-h-24 items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 text-navy transition-colors hover:border-teal">
            <MapPin className="size-5 shrink-0 text-teal" aria-hidden="true" />
            <span className="flex-1"><span className="block text-xl font-semibold">{location.name}</span><span className="text-sm text-gray-600">{location.county}, MD</span></span>
            <ArrowUpRight aria-hidden="true" className="size-5 text-teal" />
          </Link>
        </li>)}
      </ul>
    </Container>
  </section>;
}
