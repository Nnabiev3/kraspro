import { site } from "./site";
export const homeFaqs = [
 {question:"Are you licensed and insured in Maryland?",answer:[site.trust.licensed && "We are licensed in Maryland.",site.trust.insured && "We are insured."].filter(Boolean).join(" ") || "Contact us to discuss our credentials."},
 {question:"Do your salespeople work on commission?",answer:site.trust.noCommissionSales ? "Our salespeople do not work on commission." : "Contact us to ask about our sales process."},
 {question:"How does your quote process work?",answer:["Tell us about your project.",site.trust.photoEvidence && "We document the condition with photos.",site.trust.itemizedQuotes && "You receive an itemized written quote."].filter(Boolean).join(" ")},
 {question:"Which areas do you serve?",answer:`We serve ${site.serviceAreas.join(", ")}. Contact us to confirm your location.`},
 {question:"Do you offer financing?",answer:"Contact us to discuss financing availability. Financing is subject to credit approval."},
 {question:"How soon can you start my project?",answer:"Timing depends on the project, scheduling and any required approvals. Contact us to discuss availability."}
];
export const homeHero = {
  eyebrow: "Exterior remodeling in Maryland",
  title: "Honest Exterior Work for Maryland Homes.",
  description: [
    site.trust.photoEvidence && "We show you what's wrong, in photos, before we ever talk price.",
    site.trust.itemizedQuotes && "Itemized quotes.",
    site.trust.noCommissionSales && "No commission sales.",
  ].filter(Boolean).join(" ") || "Tell us what needs attention on the outside of your home.",
  image: {
    src: "/images/services/placeholder.svg",
    alt: "Outline illustration of a house",
    isPlaceholder: true,
  },
};

export const homeProcess = [
  { title: "Tell us about your project", description: "Share what needs attention and what you want to change." },
  {
    title: "We inspect the area",
    description: site.trust.photoEvidence
      ? "We document what we find with photos and walk you through it before talking price."
      : "We walk you through what we find so you can decide what to do next.",
  },
  {
    title: site.trust.itemizedQuotes ? "You get an itemized written quote" : "You get a written quote",
    description: "Review the scope and ask questions before you decide.",
  },
  {
    title: site.trust.cleanJobSites ? "We do the work and clean up" : "We do the work",
    description: "We walk through the completed work with you.",
  },
];

export const valueProps = ([
  { key: "photoEvidence", title: "Photo Evidence First", description: "See what needs work and why before you talk price." },
  { key: "itemizedQuotes", title: "Itemized, Written Quotes", description: "See the proposed scope and what each part of the job costs." },
  { key: "noCommissionSales", title: "No Commission, No Pressure", description: "Take time to ask questions and decide what makes sense for your home." },
  { key: "cleanJobSites", title: "Clean Job Sites", description: "We plan how to protect your property and tidy the work area when we finish." },
] as const).filter(({ key }) => site.trust[key]);

export const homeServiceSummaries: Readonly<Record<string, string>> = {
  "door-and-window-installation": "Replacement windows, exterior doors and basement windows.",
  "exterior-painting": "Surface preparation and painting for siding, trim, barns and metal roofs.",
  "decks-siding-fence": "Build or repair your deck, replace siding, or install a fence.",
  "roofing-gutters-shutters": "Roof repairs, gutters, shutters, chimney caps and aluminum trim wrap.",
  "historic-building-restoration": "Repair original wood windows, siding, trim and masonry.",
  "garage-additions": "Plan an attached or detached garage that fits your property.",
};
