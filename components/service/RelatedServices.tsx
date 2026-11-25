import { readServices } from "@/lib/cms/public";
import ServiceGrid from "@/components/sections/ServiceGrid";

/** Resolves related service slugs from the same catalog as the navigation. */
export default async function RelatedServices({ slugs }: { slugs: readonly string[] }) {
  const services = await readServices();
  const related = slugs.flatMap(slug => services.filter(service => service.slug === slug));
  return related.length ? <ServiceGrid services={related} title="Related Services" /> : null;
}
