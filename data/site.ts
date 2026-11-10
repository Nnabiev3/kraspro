// ==========================================
// TYPES & INTERFACES
// ==========================================

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
  phone: "TODO_OWNER: phone",
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
  siteUrl: "TODO_OWNER: site URL",

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
    "Baltimore County",
    "Reisterstown",
    "Owings Mills",
    "Pikesville",
    "Towson",
    "Randallstown",
    "Cockeysville",
    "Catonsville",
    "Baltimore City",
    "Carroll County",
    "Howard County",
    "Harford County",
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

/** Returns the existing flat service-area list as sorted links. */
export function getServiceAreaLinks(): ServiceAreaLink[] {
  return [...new Set(site.serviceAreas)]
    .sort((first, second) => first.localeCompare(second))
    .map((name) => ({
      name,
      href: `/service-areas#${serviceAreaId(name)}`,
    }));
}