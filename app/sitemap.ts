import { statSync } from "node:fs";
import { join } from "node:path";
import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { getGeoRoutes } from "@/data/service-locations";
import { siteBaseUrl } from "@/lib/seo";

const pageSources = {
  "/": ["app/(public)/page.tsx", "data/home.ts", "data/services.ts", "data/projects.ts", "data/reviews.ts"],
  "/services": ["app/(public)/services/page.tsx", "data/services.ts", "data/home.ts"],
  "/service-areas": ["app/(public)/service-areas/page.tsx", "data/locations.ts", "data/service-locations.ts", "data/deck-building-locations.ts"],
  "/about": ["app/(public)/about/page.tsx", "data/home.ts"],
  "/financing": ["app/(public)/financing/page.tsx"],
  "/reviews": ["app/(public)/reviews/page.tsx", "data/reviews.ts"],
  "/contact": ["app/(public)/contact/page.tsx", "components/forms/QuoteForm.tsx", "data/services.ts"],
  "/privacy": ["app/(public)/privacy/page.tsx"],
} satisfies Record<string, string[]>;

function lastEdited(sources: readonly string[]): Date | undefined {
  // Use source timestamps so an unchanged build does not claim every page was edited today.
  const latest = Math.max(
    0,
    ...["data/site.ts", "lib/cms/pages.ts", ...sources].map(source => (
      statSync(join(process.cwd(), source), { throwIfNoEntry: false })?.mtimeMs ?? 0
    )),
  );
  return latest > 0 ? new Date(latest) : undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteBaseUrl();
  if (!base) return [];

  const serviceSources = ["app/(public)/services/[slug]/page.tsx", "data/services.ts", "data/projects.ts", "components/service/ServicePageLayout.tsx", "components/location/LocationLinks.tsx"];
  const servicePages = services.map(({ slug }) => [`/services/${slug}`, serviceSources] as const);
  const geoSources = ["app/(public)/[slug]/page.tsx", "data/locations.ts", "data/service-locations.ts", "data/services.ts", "data/projects.ts", "components/location/LocationPageLayout.tsx", "components/service/LocationServicePageLayout.tsx"];
  const geoPages = getGeoRoutes().filter(route => route.status === "published").map(route => [
    route.path,
    route.kind === "service" && route.entry.serviceSlug === "deck-building"
      ? [...geoSources, "data/deck-building-locations.ts"]
      : geoSources,
  ] as const);

  return [...Object.entries(pageSources), ...servicePages, ...geoPages].map(([pathname, sources]) => ({
    url: new URL(pathname, base).href,
    lastModified: lastEdited(sources),
  }));
}
