import { statSync } from "node:fs";
import { join } from "node:path";
import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { getGeoRoutes } from "@/data/service-locations";
import { siteBaseUrl } from "@/lib/seo";

const pageSources = {
  "/": ["app/page.tsx", "data/home.ts", "data/services.ts", "data/projects.ts", "data/reviews.ts"],
  "/services": ["app/(public)/services/page.tsx", "components/sections/ServiceGrid.tsx", "data/services.ts"],
  "/service-areas": ["app/service-areas/page.tsx"],
  "/about": ["app/about/page.tsx", "data/home.ts"],
  "/financing": ["app/financing/page.tsx"],
  "/reviews": ["app/reviews/page.tsx", "data/reviews.ts"],
  "/contact": ["app/contact/page.tsx", "components/forms/QuoteForm.tsx", "data/services.ts"],
  "/privacy": ["app/privacy/page.tsx"],
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

  const serviceSources = ["app/(public)/services/[slug]/page.tsx", "data/services.ts", "components/service/ServicePageLayout.tsx"];
  const servicePages = services.map(({ slug }) => [`/services/${slug}`, serviceSources] as const);
  const geoSources = [
    "app/(public)/[slug]/page.tsx",
    "data/locations.ts",
    "data/service-locations.ts",
    "components/service/LocationServicePageLayout.tsx",
  ];
  const serviceLocationSources: Partial<Record<string, string>> = {
    "deck-building": "data/deck-building-locations.ts",
    "exterior-painting-carpentry": "data/exterior-painting-locations.ts",
    "window-door-renewal": "data/window-door-renewal-locations.ts",
    "historic-window-restoration": "data/historic-window-restoration-locations.ts",
    "house-restoration": "data/house-restoration-locations.ts",
    "power-washing": "data/power-washing-locations.ts",
    "basement-remodeling": "data/basement-remodeling-locations.ts",
    "kitchen-remodeling": "data/kitchen-remodeling-locations.ts",
    "bathroom-remodeling": "data/bathroom-remodeling-locations.ts",
  };
  const geoPages = getGeoRoutes().filter(route => route.status === "published").map(route => {
    const source = route.kind === "service" ? serviceLocationSources[route.service.slug] : undefined;
    return [route.path, source ? [...geoSources, source] : geoSources] as const;
  });

  return [...Object.entries(pageSources), ...servicePages, ...geoPages].map(([pathname, sources]) => ({
    url: new URL(pathname, base).href,
    lastModified: lastEdited(sources),
  }));
}
