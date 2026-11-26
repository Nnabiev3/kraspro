// ==========================================
// TYPES & INTERFACES
// ==========================================

import { locations, locationPath } from "./locations";

export type NavItem = {
  label: string;
  href: string;
};

export type TrustFlags = {
  licensed: boolean;
  insured: boolean;
  noCommissionSales: boolean;
  photoEvidence: boolean;
  itemizedQuotes: boolean;
  cleanJobSites: boolean;
};

export type TrustText = {
  licensed: string;
  insured: string;
  noCommissionSales: string;
  photoEvidence: string;
  itemizedQuotes: string;
  cleanJobSites: string;
};

export type SiteConfig = {
  name: string;
  location: string;
  phone: string;
  email: string;
  streetAddress: string;
  postalCode: string;
  hours: string;
  licenseNumber: string;
  epaCertification: string;
  responseTime: string;
  reviewUrl: string;
  story: string;
  financing: string;
  siteUrl: string;
  trust: TrustFlags;
  trustText: TrustText;
  navigation: NavItem[];
  serviceAreas: string[];
  sameAs: string[];
};

// ==========================================
// SITE CONFIGURATION (Single Source of Truth)
// ==========================================

export const site: SiteConfig = {
  // --- Basic Info ---
  name: "KrasPro LLC",
  location: "Reisterstown, Baltimore County, Maryland",

  // --- Contact Info ---
  phone: "+1-410-967-6363",
  email: "TODO_OWNER: email",
  streetAddress: "TODO_OWNER: street address",
  postalCode: "TODO_OWNER: ZIP code",
  hours: "TODO_OWNER: business hours",
  responseTime: "TODO_OWNER: response time",

  // --- Credentials ---
  licenseNumber: "TODO_OWNER: MHIC license number",
  epaCertification: "TODO_OWNER: EPA Lead-Safe certification if applicable",

  // --- Content ---
  reviewUrl: "TODO_OWNER: review URL",
  story: "TODO_OWNER: company story",
  financing: "TODO_OWNER: confirm financing partner, terms and disclosures",
  siteUrl: "https://kraspro.opora-money.workers.dev",

  // --- Trust Flags (Config-driven claims) ---
  trust: {
    licensed: true,
    insured: true,
    noCommissionSales: true,
    photoEvidence: true,
    itemizedQuotes: true,
    cleanJobSites: true,
  },
  trustText: {
    licensed: "Licensed in Maryland",
    insured: "Insured",
    noCommissionSales: "No-Commission Sales",
    photoEvidence: "Photo Evidence First",
    itemizedQuotes: "Itemized, Written Quotes",
    cleanJobSites: "Clean Job Sites",
  },

  // --- Navigation ---
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Financing", href: "/financing" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ],

  // --- Service Areas ---
  serviceAreas: [
    "Baltimore",
    "Bel Air",
    "Bethesda",
    "Catonsville",
    "College Park",
    "Columbia",
    "Dundalk",
    "Ellicott City",
    "Essex",
    "Finksburg",
    "Frederick",
    "Glen Burnie",
    "Hanover",
    "Laurel",
    "Lutherville-Timonium",
    "Mt. Airy",
    "Owings Mills",
    "Parkton",
    "Phoenix",
    "Pikesville",
    "Reisterstown",
    "Rockville",
    "Severn",
    "Silver Spring",
    "Sparks",
    "Towson",
    "Westminster",
  ],

  sameAs: [], // Add social media links here later (e.g., ["https://facebook.com/..."])
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

export const isConfirmed = (value: string): boolean => {
  const placeholderPrefix = "TODO_" + "OWNER:";
  return Boolean(value) && !value.includes(placeholderPrefix);
};

export type ServiceAreaLink = {
  name: string;
  href: string;
};

export function serviceAreaId(name: string): string {
  return name
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Links detailed communities to their hubs and other coverage areas to the directory. */
export function getServiceAreaLinks(): ServiceAreaLink[] {
  return [...new Set(site.serviceAreas)]
    .sort((first, second) => first.localeCompare(second))
    .map((name) => ({
      name,
      href: (() => {
        const location = locations.find(item => item.name === name && item.status !== "draft");
        return location ? locationPath(location) : `/service-areas#${serviceAreaId(name)}`;
      })(),
    }));
}
