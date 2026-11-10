import type { Metadata } from "next";
import { isConfirmed, site } from "@/data/site";

export function siteBaseUrl(): URL | undefined {
  for (const candidate of [process.env.NEXT_PUBLIC_SITE_URL, site.siteUrl]) {
    if (!candidate || !isConfirmed(candidate)) continue;
    try {
      const url = new URL(candidate);
      if (["https:", "http:"].includes(url.protocol) && !url.username && !url.password) {
        return new URL(url.origin);
      }
    } catch {
      // Ignore invalid owner configuration without publishing a guessed URL.
    }
  }
}

export function absoluteUrl(path: string): string | undefined {
  const base = siteBaseUrl();
  return base && new URL(path, base).href;
}

export function pageMetadata(title: string, description: string, pathname: string): Metadata {
  const canonical = absoluteUrl(pathname);
  const image = absoluteUrl("/images/og/kraspro.png");
  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url: canonical,
      images: image ? [{ url: image, width: 1200, height: 630, alt: site.name }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}
