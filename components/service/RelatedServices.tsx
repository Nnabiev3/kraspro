import { services } from "@/data/services";
import ServiceGrid from "@/components/sections/ServiceGrid";

/** Resolves related service slugs from the same catalog as the navigation. */
export default function RelatedServices({ slugs }: { slugs: readonly string[] }) {
  const related = slugs.flatMap(slug => services.filter(service => service.slug === slug));
  return related.length ? <ServiceGrid services={related} title="Related Services" /> : null;
}
