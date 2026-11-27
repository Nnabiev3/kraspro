export type SourcedText = { text: string; sourceUrl: string };

export type CityIssue = { title: string; text: string; needsTradeReview: boolean };
export type CityFaq = { q: string; a: string; needsTradeReview: boolean };

export type CityResearch = {
  slug: string;
  name: string;
  county: SourcedText;
  countyPermitAuthority: SourcedText;
  lead: SourcedText;
  zips: SourcedText[];
  neighborhoods: { name: string; oneLineNote: string; sourceUrl: string }[];
  housingProfile: { text: string; sourceUrls: string[] };
  historicNote: SourcedText | null;
  addressAmbiguityNote: SourcedText | null;
  roads: SourcedText[];
  localIssues: CityIssue[];
  faq: CityFaq[];
  nearbyCities: string[];
  metaDescription: string;
};

export const baltimoreCountyPermits: SourcedText = {
  text: "Baltimore County Department of Permits, Approvals and Inspections, Building Permit Processing.",
  sourceUrl: "https://www.baltimorecountymd.gov/files/departments/permits-approvals-and-inspections/documents/currentbuildingandfirecodes.pdf",
};
