import { notFound } from "next/navigation";
import LocationPageLayout from "@/components/location/LocationPageLayout";
import LocationServicePageLayout from "@/components/service/LocationServicePageLayout";
import { getGeoRoutes } from "@/data/service-locations";
import { cityDefaults, geoServiceDefaults } from "@/lib/cms/pages";
import { editedMetadata, readPage, readService } from "@/lib/cms/public";

export const dynamicParams = false;
export function generateStaticParams() { return getGeoRoutes().map(route => ({ slug: route.path.slice(1) })); }

function resolve(slug: string) {
  return getGeoRoutes().find(item => item.path === `/${slug}`);
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const route = resolve(params.slug);
  if (!route) return {};
  return editedMetadata(route.path, route.kind === "location" ? cityDefaults(route.location) : geoServiceDefaults(route.entry, route.location, route.service));
}

export default async function GeoPage({ params }: { params: { slug: string } }) {
  const route = resolve(params.slug);
  if (!route) notFound();
  if (route.kind === "location") {
    const content = await readPage(route.path, cityDefaults(route.location));
    return <LocationPageLayout location={route.location} content={content} />;
  }

  const [content, service] = await Promise.all([
    readPage(route.path, geoServiceDefaults(route.entry, route.location, route.service)),
    readService(route.service),
  ]);
  return <LocationServicePageLayout entry={route.entry} location={route.location} service={service} content={content} />;
}
