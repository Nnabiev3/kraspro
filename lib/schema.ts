import { site, isConfirmed } from "@/data/site";
import type { Faq, Service } from "@/data/services";
import { absoluteUrl } from "./seo";

const context = "https://schema.org";
export type Breadcrumb = { label: string; href: string };

export function faqSchema(faqs: readonly Faq[]) {
  return {
    "@context": context,
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export function localBusinessSchema() {
  const [locality, , region] = site.location.split(",").map(part => part.trim());
  const url = absoluteUrl("/");
  const logoPath = "/images/brand/logo-full-transparent.svg";
  const sameAs = site.sameAs.filter(isConfirmed);

  return {
    "@context": context,
    "@type": "GeneralContractor",
    "@id": url ? `${url}#business` : undefined,
    name: site.name,
    url,
    logo: absoluteUrl(logoPath) ?? logoPath,
    telephone: isConfirmed(site.phone) ? site.phone : undefined,
    email: isConfirmed(site.email) ? site.email : undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: locality,
      addressRegion: region,
      streetAddress: isConfirmed(site.streetAddress) ? site.streetAddress : undefined,
      postalCode: isConfirmed(site.postalCode) ? site.postalCode : undefined,
    },
    areaServed: site.serviceAreas,
    openingHours: isConfirmed(site.hours) ? site.hours : undefined,
    sameAs: sameAs.length ? sameAs : undefined,
  };
}

export function serviceSchema(service: Service) {
  const home = absoluteUrl("/");
  return {
    "@context": context,
    "@type": "Service",
    name: service.h1,
    serviceType: service.navLabel,
    description: service.metaDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: home
      ? { "@id": `${home}#business` }
      : { "@type": "GeneralContractor", name: site.name },
    areaServed: site.serviceAreas,
  };
}

export function breadcrumbSchema(items: readonly Breadcrumb[]) {
  return {
    "@context": context,
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ label, href }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: label,
      item: absoluteUrl(href) ?? href,
    })),
  };
}
