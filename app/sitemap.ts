import { statSync } from "node:fs";
import { join } from "node:path";
import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteBaseUrl } from "@/lib/seo";

const pageSources = {
  "/": ["app/page.tsx", "data/home.ts", "data/services.ts", "data/projects.ts", "data/reviews.ts"],
  "/services": ["app/services/page.tsx", "data/services.ts", "data/home.ts"],
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
    ...["data/site.ts", ...sources].map(source => (
      statSync(join(process.cwd(), source), { throwIfNoEntry: false })?.mtimeMs ?? 0
    )),
  );
  return latest > 0 ? new Date(latest) : undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteBaseUrl();
  if (!base) return [];

  const serviceSources = ["app/services/[slug]/page.tsx", "data/services.ts", "components/service/ServicePageLayout.tsx"];
  const servicePages = services.map(({ slug }) => [`/services/${slug}`, serviceSources] as const);

  return [...Object.entries(pageSources), ...servicePages].map(([pathname, sources]) => ({
    url: new URL(pathname, base).href,
    lastModified: lastEdited(sources),
  }));
}
