import { site } from "./site";
import { deckCover } from "./projects";
import { services } from "./services";

export const homeFeaturedServices = [
  { slug: "deck-building", description: "Compare repair, resurfacing, replacement and new deck construction." },
  { slug: "window-door-renewal", description: "Find a repair or replacement option for windows and exterior doors that fits the opening." },
  { slug: "exterior-painting-carpentry", description: "Plan exterior painting and repairs to damaged trim or woodwork in the same scope." },
].flatMap(({ slug, description }) => {
  const service = services.find(item => item.slug === slug);
  return service ? [{ ...service, description }] : [];
});

export const homeFaqs = [
 {question:"Are you licensed and insured in Maryland?",answer:[site.trust.licensed && "We are licensed in Maryland.",site.trust.insured && "We are insured."].filter(Boolean).join(" ") || "Contact us to discuss our credentials."},
 {question:"Do your salespeople work on commission?",answer:site.trust.noCommissionSales ? "Our salespeople do not work on commission." : "Contact us to ask about our sales process."},
 {question:"How does your quote process work?",answer:["Tell us about your project.",site.trust.photoEvidence && "We document the condition with photos.",site.trust.itemizedQuotes && "You receive an itemized written quote."].filter(Boolean).join(" ")},
 {question:"Which areas do you serve?",answer:`We serve ${site.serviceAreas.length} communities in Maryland. See the Service Areas page for the full list, or contact us to confirm your address.`},
 {question:"Do you offer financing?",answer:"Contact us to discuss financing availability. Financing is subject to credit approval."},
 {question:"How soon can you start my project?",answer:"Timing depends on the project, scheduling and any required approvals. Contact us to discuss availability."}
];
export const homeHero = {
  eyebrow: "Based in Reisterstown, Baltimore County",
  title: "Home Remodeling in Reisterstown, MD",
  description: [
    "KrasPro handles decks, windows and doors, exterior painting and carpentry, and interior remodeling for Maryland homeowners.",
    site.trust.photoEvidence && site.trust.itemizedQuotes
      ? "See what needs work and what it costs before you decide."
      : site.trust.photoEvidence && "See what needs work before you decide.",
  ].filter(Boolean).join(" "),
  image: deckCover,
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
