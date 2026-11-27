import { deckCover, type Photo } from "./projects";

export type Faq = { question: string; answer: string };
export type ServiceStep = { title: string; description: string };
export type Service = {
  slug: string;
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSubhead: string;
  introTitle?: string;
  intro: string[];
  subServices?: { title: string; description: string }[];
  benefitsTitle?: string;
  benefits: { title: string; description: string }[];
  process: ServiceStep[];
  faqs: Faq[];
  related: string[];
  heroImage: Photo;
};

const pendingPhoto: Service["heroImage"] = {
  src: "/images/services/placeholder.svg",
  alt: "",
  isPlaceholder: true,
};

export const services: Service[] = [
  {
    slug: "deck-building",
    navLabel: "Deck Building",
    h1: "Deck Building in Maryland",
    metaTitle: "Deck Building in Maryland | KrasPro LLC",
    metaDescription: "Compare deck repair, resurfacing, replacement and new builds in Maryland. See what KrasPro checks on site and what affects your written quote.",
    heroSubhead: "A sound frame may only need new decking or rails. Problems with the supports or the connection to the house can call for a rebuild. We review the structure before recommending a scope.",
    introTitle: "Should You Repair, Resurface or Rebuild Your Deck?",
    intro: [
      "The deciding factor is the condition of the structure underneath the boards. Worn decking can often be replaced if the framing and connections are sound. If damage extends into the posts, joists, beams or the connection to the house, the work may involve structural repairs or rebuilding.",
      "Think about how you will use the deck, too. The current layout may work for a simple refresh. A different stair location, easier access to the yard or more room for dining may make a new layout worth considering.",
    ],
    subServices: [
      { title: "Repair or Resurface", description: "Repair targets specific damage, such as a worn stair or loose board. Resurfacing replaces the decking over a frame that can still be used. We confirm which parts can stay after looking at the structure." },
      { title: "Replace an Existing Deck", description: "If the frame needs rebuilding, we discuss what needs removal, whether the existing footprint works and how new stairs and railings would fit." },
      { title: "Build a New Deck", description: "We start with the door and yard access, the intended use and the deck height. Those choices shape the layout, decking material, stairs and railings." },
    ],
    benefitsTitle: "What We Check Before Quoting a Deck",
    benefits: [
      { title: "Frame and Supports", description: "We review the condition of visible posts, beams, joists and connections to see which parts can be kept." },
      { title: "Stairs and Railings", description: "We look at the condition of the steps and rails and discuss where the stair should meet the yard." },
      { title: "Decking Material", description: "We discuss wood and composite options, including what you want to spend up front and how much maintenance you are willing to do." },
      { title: "Size, Height and Access", description: "We review the footprint, height and access for the work. Those details affect the amount of material and labor in the quote." },
    ],
    process: [
      { title: "Share Your Goals", description: "Tell us where the deck is, what needs attention and how you want to use the space. Photos are useful if you have them." },
      { title: "Review the Site", description: "We look at existing conditions, dimensions and access before discussing which work makes sense." },
      { title: "Compare Options", description: "We talk through what could stay, what needs work and how choices about layout, decking and rails would change the scope." },
      { title: "Get a Written Quote", description: "Review the proposed work and materials. Ask about removals, repairs, stairs or railings so you know what the quote covers." },
    ],
    faqs: [
      { question: "Can I keep my deck frame and replace the boards?", answer: "If the visible framing and connections are in suitable condition, resurfacing may be an option. We review the structure first because the condition of the boards alone does not tell us whether the frame can stay." },
      { question: "How do I choose between wood and composite decking?", answer: "Compare the initial cost, appearance and upkeep of the options you are considering. We can discuss how each material fits the rest of your deck, including the stairs, rails and any framing that will remain." },
      { question: "What affects the cost of a deck?", answer: "Size, height, site access, materials and the condition of the existing frame all affect the scope. Removing an old deck, adding stairs and changing the railings can each add work. Ask which of those items are included in your written quote." },
      { question: "Will my deck need a permit?", answer: "Permit requirements depend on where the home is and what work is proposed. Check with your local permitting office before work starts, especially when the project changes the footprint or supporting structure." },
      { question: "Do I need measurements or photos to request a quote?", answer: "You can start with your ZIP code and a short description. A photo of the entire deck and close-ups of the parts that concern you are helpful if you have them." },
    ],
    related: ["exterior-painting-carpentry", "house-restoration"],
    heroImage: deckCover,
  },
  {
    slug: "exterior-painting-carpentry",
    navLabel: "Exterior Painting & Carpentry",
    h1: "Exterior Painting & Carpentry in Maryland",
    metaTitle: "Exterior Painting & Carpentry in Maryland | KrasPro LLC",
    metaDescription: "Refresh siding, trim and exterior woodwork with preparation tailored to the surface. Request a free quote from KrasPro LLC in Maryland.",
    heroSubhead: "Refresh siding, trim and exterior woodwork with preparation tailored to the surface.",
    intro: ["We look at peeling paint, exposed wood and damaged trim so the scope accounts for surface preparation and any carpentry the project needs."],
    benefits: [
      { title: "Surface preparation suited to the existing finish", description: "We inspect the surfaces and identify areas that need prep or repair." },
      { title: "A single scope for painting and related wood repairs", description: "We discuss finishes and document which areas the quote covers." },
    ],
    process: [
      { title: "Tell us about your project", description: "Share your address, priorities and any photos that help explain the work." },
      { title: "Review the site and scope", description: "We inspect the surfaces and identify areas that need prep or repair." },
      { title: "Get a written quote", description: "We discuss finishes and document which areas the quote covers." },
    ],
    faqs: [
      { question: "Can you repair exterior trim before painting?", answer: "We can review damaged trim and include appropriate carpentry in the scope." },
      { question: "Can I choose the paint colors?", answer: "Yes. Share your preferred colors and finishes when we discuss your project." },
      { question: "What if the surface has peeling paint?", answer: "We inspect the underlying condition before deciding how to prepare it." },
      { question: "Does weather affect exterior painting?", answer: "Yes. The schedule depends on weather and the conditions required by the products used." },
    ],
    related: ["house-restoration", "deck-building"],
    heroImage: { src: "/images/services/exterior-painting.jpg", alt: "Exterior work in progress on a house with dark siding and trim" },
  },
  {
    slug: "window-door-renewal",
    navLabel: "Window & Door Renewal",
    h1: "Window & Door Renewal in Maryland",
    metaTitle: "Window & Door Renewal in Maryland | KrasPro LLC",
    metaDescription: "Improve the fit, function and finish of windows and exterior doors. Request a free quote from KrasPro LLC in Maryland.",
    heroSubhead: "Improve the fit, function and finish of windows and exterior doors.",
    intro: ["We assess the opening, frame and surrounding trim to help you decide whether repair or replacement fits your situation."],
    benefits: [
      { title: "Options based on the condition of the existing opening", description: "We inspect how the window or door operates and look at surrounding trim." },
      { title: "A plan for fit, sealing and finish", description: "We discuss options and the planned installation or repairs." },
    ],
    process: [
      { title: "Tell us about your project", description: "Share your address, priorities and any photos that help explain the work." },
      { title: "Review the site and scope", description: "We inspect how the window or door operates and look at surrounding trim." },
      { title: "Get a written quote", description: "We discuss options and the planned installation or repairs." },
    ],
    faqs: [
      { question: "Do I need to replace a drafty window?", answer: "A draft can come from the sash, weatherstripping or the surrounding opening. An inspection helps identify the source." },
      { question: "Can you work on an exterior entry door?", answer: "Yes. Tell us what needs attention and whether you want to repair or replace the door." },
      { question: "Can we keep the existing trim?", answer: "That depends on its condition and the work needed around the opening." },
      { question: "What about original wood windows?", answer: "For older windows you want to preserve, ask about historic window restoration." },
    ],
    related: ["historic-window-restoration", "exterior-painting-carpentry"],
    heroImage: { src: "/images/projects/window.jpg", alt: "Pair of white-framed windows in a blue room" },
  },
  {
    slug: "historic-window-restoration",
    navLabel: "Historic Window Restoration",
    h1: "Historic Window Restoration in Maryland",
    metaTitle: "Historic Window Restoration in Maryland | KrasPro LLC",
    metaDescription: "Restore the function and character of original windows where their condition allows. Request a free quote from KrasPro LLC in Maryland.",
    heroSubhead: "Restore the function and character of original windows where their condition allows.",
    intro: ["Historic windows can have repairable sashes, glazing and hardware. We look at the assembly as a whole and discuss which elements can be retained."],
    benefits: [
      { title: "Keep original details where practical", description: "We examine the sash, frame, glazing and hardware." },
      { title: "Address operation and visible deterioration", description: "We identify repairable parts and discuss any components that need replacement." },
    ],
    process: [
      { title: "Tell us about your project", description: "Share your address, priorities and any photos that help explain the work." },
      { title: "Review the site and scope", description: "We examine the sash, frame, glazing and hardware." },
      { title: "Get a written quote", description: "We identify repairable parts and discuss any components that need replacement." },
    ],
    faqs: [
      { question: "Can original wood windows be saved?", answer: "Often the decision comes down to the condition of the wood, joints and frame. We can assess them in person." },
      { question: "What if a sash is stuck?", answer: "We inspect the sash and its operating parts to understand what is preventing movement." },
      { question: "Can you match existing details?", answer: "Bring photos of the details you want to keep. Feasibility depends on the condition and scope." },
      { question: "Does historic designation affect the work?", answer: "Local review may apply. Confirm requirements with the relevant historic preservation office before work begins." },
    ],
    related: ["window-door-renewal", "house-restoration"],
    heroImage: { src: "/images/services/historic-restoration.jpg", alt: "Scaffolding beside the bay windows and trim of a historic house" },
  },
  {
    slug: "house-restoration",
    navLabel: "House Restoration",
    h1: "House Restoration in Maryland",
    metaTitle: "House Restoration in Maryland | KrasPro LLC",
    metaDescription: "Repair deteriorated areas and preserve the details that give an older home its character. Request a free quote from KrasPro LLC in Maryland.",
    heroSubhead: "Repair deteriorated areas and preserve the details that give an older home its character.",
    intro: ["An older house may need several repairs that affect one another. We start with the visible condition and discuss what can be repaired, retained or replaced."],
    benefits: [
      { title: "A scope based on the condition of the house", description: "We walk through the areas that concern you and identify visible damage." },
      { title: "A plan for preserving details where practical", description: "We review the sequence of repairs and the proposed materials." },
    ],
    process: [
      { title: "Tell us about your project", description: "Share your address, priorities and any photos that help explain the work." },
      { title: "Review the site and scope", description: "We walk through the areas that concern you and identify visible damage." },
      { title: "Get a written quote", description: "We review the sequence of repairs and the proposed materials." },
    ],
    faqs: [
      { question: "Where should I start with an older house?", answer: "Share the areas you are most concerned about. We can review which items should be addressed first." },
      { question: "Can the work be done in phases?", answer: "We can discuss a phased scope when the repairs and their sequence allow it." },
      { question: "Can I keep existing trim and woodwork?", answer: "We assess the condition and discuss which pieces can be repaired in place or retained." },
      { question: "Do you restore original windows?", answer: "Yes. See our historic window restoration service for work focused on original windows." },
    ],
    related: ["historic-window-restoration", "exterior-painting-carpentry"],
    heroImage: { src: "/images/services/exterior-carpentry.jpg", alt: "Exterior carpentry in progress on a house with a gabled roof" },
  },
  {
    slug: "power-washing",
    navLabel: "Power Washing",
    h1: "Power Washing in Maryland",
    metaTitle: "Power Washing in Maryland | KrasPro LLC",
    metaDescription: "Clean outdoor surfaces with a method suited to the material and its condition. Request a free quote from KrasPro LLC in Maryland.",
    heroSubhead: "Clean outdoor surfaces with a method suited to the material and its condition.",
    intro: ["Tell us which surfaces need cleaning and what you want to remove. We check the material and finish before deciding how to approach the work."],
    benefits: [
      { title: "A cleaning method matched to the surface", description: "We review the surfaces, finish and visible buildup." },
      { title: "A clear scope for the areas you want cleaned", description: "We agree on what to clean and discuss access to the area." },
    ],
    process: [
      { title: "Tell us about your project", description: "Share your address, priorities and any photos that help explain the work." },
      { title: "Review the site and scope", description: "We review the surfaces, finish and visible buildup." },
      { title: "Get a written quote", description: "We agree on what to clean and discuss access to the area." },
    ],
    faqs: [
      { question: "What surfaces can you clean?", answer: "Tell us whether the area includes siding, a deck or hard surfaces so we can assess it." },
      { question: "Can you wash painted surfaces?", answer: "That depends on the condition of the paint and the underlying material." },
      { question: "Will power washing remove every stain?", answer: "Results depend on what caused the stain and how long it has been present." },
      { question: "Can I schedule washing before painting?", answer: "Yes. Let us know if you are planning to paint so cleaning and surface preparation can be discussed together." },
    ],
    related: ["exterior-painting-carpentry", "deck-building"],
    heroImage: pendingPhoto,
  },
  {
    slug: "basement-remodeling",
    navLabel: "Basement Remodeling",
    h1: "Basement Remodeling in Maryland",
    metaTitle: "Basement Remodeling in Maryland | KrasPro LLC",
    metaDescription: "Plan a basement that works for storage, everyday living or a more flexible layout. Request a free quote from KrasPro LLC in Maryland.",
    heroSubhead: "Plan a basement that works for storage, everyday living or a more flexible layout.",
    intro: ["We discuss how you want to use the space and review existing access, headroom and visible moisture concerns before defining the remodel."],
    benefits: [
      { title: "A layout shaped around how you use the space", description: "We review the existing basement and your priorities." },
      { title: "A written scope based on existing conditions", description: "We discuss layout, finishes and any conditions that could affect the work." },
    ],
    process: [
      { title: "Tell us about your project", description: "Share your address, priorities and any photos that help explain the work." },
      { title: "Review the site and scope", description: "We review the existing basement and your priorities." },
      { title: "Get a written quote", description: "We discuss layout, finishes and any conditions that could affect the work." },
    ],
    faqs: [
      { question: "Can you remodel an unfinished basement?", answer: "Yes. We can review the existing space and discuss your intended use." },
      { question: "What if the basement has moisture problems?", answer: "Tell us about past leaks or damp areas so we can account for them in the assessment." },
      { question: "Can I use the basement as a bedroom?", answer: "That depends on the space and local requirements, including emergency escape. We can discuss your plans during the assessment." },
      { question: "Can I remodel only part of the basement?", answer: "Yes. Explain which areas you want to update and what you plan to retain." },
    ],
    related: ["bathroom-remodeling", "kitchen-remodeling"],
    heroImage: pendingPhoto,
  },
  {
    slug: "kitchen-remodeling",
    navLabel: "Kitchen Remodeling",
    h1: "Kitchen Remodeling in Maryland",
    metaTitle: "Kitchen Remodeling in Maryland | KrasPro LLC",
    metaDescription: "Update your kitchen around the way you cook, move and store things. Request a free quote from KrasPro LLC in Maryland.",
    heroSubhead: "Update your kitchen around the way you cook, move and store things.",
    intro: ["Start with what you would change about your current kitchen. We discuss the layout, finishes and the parts you want to keep before pricing the work."],
    benefits: [
      { title: "A scope centered on your priorities", description: "We review your kitchen, priorities and existing layout." },
      { title: "A layout and finishes discussed before work begins", description: "We discuss finish choices and how changes may affect the scope." },
    ],
    process: [
      { title: "Tell us about your project", description: "Share your address, priorities and any photos that help explain the work." },
      { title: "Review the site and scope", description: "We review your kitchen, priorities and existing layout." },
      { title: "Get a written quote", description: "We discuss finish choices and how changes may affect the scope." },
    ],
    faqs: [
      { question: "Can I keep my current kitchen layout?", answer: "Yes. We can discuss updates that work within the existing layout." },
      { question: "Can I keep some existing cabinets or appliances?", answer: "Tell us which items you want to keep so we can factor them into the plan." },
      { question: "Can I choose my own materials?", answer: "Share your selections or ideas up front so their dimensions and installation requirements can be considered." },
      { question: "Can I use the kitchen during the remodel?", answer: "Access depends on the work underway. We can discuss what to expect when planning the schedule." },
    ],
    related: ["bathroom-remodeling", "basement-remodeling"],
    heroImage: pendingPhoto,
  },
  {
    slug: "bathroom-remodeling",
    navLabel: "Bathroom Remodeling",
    h1: "Bathroom Remodeling in Maryland",
    metaTitle: "Bathroom Remodeling in Maryland | KrasPro LLC",
    metaDescription: "Update a bathroom with a layout and finishes that suit your daily routine. Request a free quote from KrasPro LLC in Maryland.",
    heroSubhead: "Update a bathroom with a layout and finishes that suit your daily routine.",
    intro: ["We discuss what needs to change, from the shower or vanity to tile and other finishes, and review how the existing space affects the work."],
    benefits: [
      { title: "A plan based on daily use and available space", description: "We review the existing bathroom and discuss your priorities." },
      { title: "A written scope for the changes you choose", description: "We review the proposed fixtures, finishes and changes to the space." },
    ],
    process: [
      { title: "Tell us about your project", description: "Share your address, priorities and any photos that help explain the work." },
      { title: "Review the site and scope", description: "We review the existing bathroom and discuss your priorities." },
      { title: "Get a written quote", description: "We review the proposed fixtures, finishes and changes to the space." },
    ],
    faqs: [
      { question: "Can I update only the shower or vanity?", answer: "Yes. Tell us which parts you want to change and what should stay." },
      { question: "Can we keep fixtures in their current locations?", answer: "Yes. We can discuss updates that work with the existing layout." },
      { question: "Can I choose the tile and fixtures?", answer: "Yes. Share your selections so we can discuss whether they fit the space and scope." },
      { question: "Will the bathroom be usable during work?", answer: "That depends on the work in progress. We can discuss access while planning the job." },
    ],
    related: ["kitchen-remodeling", "basement-remodeling"],
    heroImage: pendingPhoto,
  },
  {
    slug: "christmas-light-installation",
    navLabel: "Christmas Light Installation",
    h1: "Christmas Light Installation in Maryland",
    metaTitle: "Christmas Light Installation in Maryland | KrasPro LLC",
    metaDescription: "Plan seasonal lighting for the outside of your home. Request a free quote from KrasPro LLC in Maryland.",
    heroSubhead: "Plan seasonal lighting for the outside of your home.",
    intro: ["Tell us which areas you want lit and the look you have in mind. We review access, mounting surfaces and power before agreeing on the installation scope."],
    benefits: [
      { title: "A display planned around the exterior of your home", description: "We review the exterior, access and available power." },
      { title: "A clear scope for the areas you want lit", description: "We discuss the layout and agree on which areas to include." },
    ],
    process: [
      { title: "Tell us about your project", description: "Share your address, priorities and any photos that help explain the work." },
      { title: "Review the site and scope", description: "We review the exterior, access and available power." },
      { title: "Get a written quote", description: "We discuss the layout and agree on which areas to include." },
    ],
    faqs: [
      { question: "Can I request lights along the roofline?", answer: "Yes. We review access and the mounting surfaces before confirming which areas we can cover." },
      { question: "Can I use lights I already own?", answer: "Tell us what you have so we can discuss whether it suits the planned installation." },
      { question: "When should I ask about installation?", answer: "Contact us with your preferred timing and address so we can discuss seasonal availability." },
      { question: "Can we discuss taking the lights down?", answer: "Yes. Ask about removal when we discuss the scope and schedule." },
    ],
    related: [],
    heroImage: {
      src: "/images/services/christmas-light-installation.jpg",
      alt: "Illustrative Christmas Light Installation design for a Maryland home with warm white roofline and porch lights",
    },
  },
];
