import { site } from "@/data/site";
import { services } from "@/data/services";

const optional = (value: string) => value.startsWith("TODO_" + "OWNER:") ? "" : value;

export const generalDefaults = {
  name: site.name,
  logo: "/images/brand/logo-icon-transparent.svg",
  location: site.location,
  phone: optional(site.phone),
  email: optional(site.email),
  streetAddress: optional(site.streetAddress),
  postalCode: optional(site.postalCode),
  hours: optional(site.hours),
  responseTime: optional(site.responseTime),
  licenseNumber: optional(site.licenseNumber),
  epaCertification: optional(site.epaCertification),
  reviewUrl: optional(site.reviewUrl),
  sameAs: site.sameAs,
};

export const headerDefaults = {
  brand: "KrasPro",
  brandHref: "/",
  navigation: site.navigation,
  showHomeOnDesktop: false,
  showPhone: true,
  quote: { label: "Get a Free Quote", href: "/contact" },
  mobileQuote: "Free Quote",
};

export const footerDefaults = {
  description: `Home remodeling and restoration from {location}. We help homeowners with decks, windows, exterior repairs and interior remodeling.${site.trust.licensed && site.trust.insured ? " Licensed in Maryland and insured." : ""}`,
  showContacts: true,
  quote: { label: "Request a Quote", href: "/contact" },
  servicesTitle: "Services",
  serviceLinks: services.slice(0, 5).map(({ slug, navLabel }) => ({ label: navLabel, href: `/services/${slug}` })),
  allServices: { label: "All Services", href: "/services" },
  companyTitle: "Company",
  companyLinks: [
    { label: "About KrasPro", href: "/about" },
    { label: "Project Gallery", href: "/#project-photos" },
    { label: "Homeowner Reviews", href: "/reviews" },
    { label: "Our Process", href: "/about#our-process" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Financing", href: "/financing" },
    { label: "Contact", href: "/contact" },
  ],
  privacy: { label: "Privacy Policy", href: "/privacy" },
};
