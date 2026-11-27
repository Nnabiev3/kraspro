import { notFound } from "next/navigation";
import CityHubLayout from "@/components/location/CityHubLayout";
import LocationPageLayout from "@/components/location/LocationPageLayout";
import LocationServicePageLayout from "@/components/service/LocationServicePageLayout";
import { cityHubs, findCityHub, isHubIndexable } from "@/data/geo";
import { locationPath } from "@/data/locations";
import { getGeoRoutes } from "@/data/service-locations";
import { cityDefaults, geoServiceDefaults } from "@/lib/cms/pages";
import { editedMetadata, readPage, readService } from "@/lib/cms/public";
import { pageMetadata, siteBaseUrl } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  const paths = new Set([...getGeoRoutes().map(route => route.path), ...cityHubs.map(locationPath)]);
  return Array.from(paths, path => ({ slug: path.slice(1) }));
}

function resolve(slug: string) {
  return getGeoRoutes().find(item => item.path === `/${slug}`);
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const city = findCityHub(`/${params.slug}`);
  if (city) {
    const index = isHubIndexable(city);
    if (!index && process.env.SITE_ENV === "production") notFound();
    return {
      ...pageMetadata(`Home Remodeling in ${city.name}, MD | KrasPro LLC`, city.metaDescription, locationPath(city)),
      robots: {
        index: index && !siteBaseUrl()?.hostname.endsWith(".workers.dev"),
        follow: index,
      },
    };
  }
  const route = resolve(params.slug);
  if (!route) return {};
  return editedMetadata(route.path, route.kind === "location" ? cityDefaults(route.location) : geoServiceDefaults(route.entry, route.location, route.service));
}

export default async function GeoPage({ params }: { params: { slug: string } }) {
  const city = findCityHub(`/${params.slug}`);
  if (city) {
    if (!isHubIndexable(city) && process.env.SITE_ENV === "production") notFound();
    return <CityHubLayout city={city} />;
  }
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
