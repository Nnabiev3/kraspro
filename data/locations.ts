/** Geographic detail supplements site.serviceAreas, which remains the coverage source. */
export type PublicationStatus = "draft" | "review" | "published";
export type Location = {
  slug: string;
  name: string;
  county: string;
  status: PublicationStatus;
  introduction: string;
  planningTitle: string;
  planningText: string;
  source: { label: string; url: string; checked: string };
};

const source = {
  label: "Baltimore County small area plans",
  url: "https://small-area-plans-bc-gis.hub.arcgis.com/",
  checked: "2026-11-18",
};

export const locations: Location[] = [
  {
    slug: "reisterstown", name: "Reisterstown", county: "Baltimore County", status: "review",
    introduction: "Start with the part of your home you want to change. From a deck that needs attention to new windows or a bathroom renovation, KrasPro helps you define the work before comparing options.",
    planningTitle: "One project, a clear starting point",
    planningText: "For your Reisterstown project, share what you want to keep, what needs replacing and how you use the space. Photos of the existing conditions help us discuss a practical scope. Your exact address and the proposed work guide the next steps.",
    source,
  },
  {
    slug: "owings-mills", name: "Owings Mills", county: "Baltimore County", status: "review",
    introduction: "A useful renovation starts with how you live in the space. Explore deck building, window and door renewal, and bathroom remodeling for your Owings Mills home, then tell us which changes matter most.",
    planningTitle: "Plan the work around your home",
    planningText: "Access for materials, the rooms you need to keep using and any property or association requirements are worth discussing early. Include these details with your Owings Mills inquiry so the proposed work reflects the way your property is used.",
    source,
  },
  {
    slug: "pikesville", name: "Pikesville", county: "Baltimore County", status: "review",
    introduction: "Deciding what to replace is as important as choosing the new finish. Discuss your Pikesville home with KrasPro, whether the next step is a deck, a window or door project, or a bathroom renovation.",
    planningTitle: "Keep the details that work",
    planningText: "Tell us which features of your Pikesville home you want to retain. Matching trim, keeping an existing layout or changing access to the yard can shape the scope. We use the existing conditions and your priorities to discuss the options.",
    source,
  },
];

export const locationPath = (location: Pick<Location, "slug">) => `/home-remodeling-${location.slug}-md`;
