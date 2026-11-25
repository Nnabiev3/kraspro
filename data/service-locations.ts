import { locations, locationPath, type Location, type PublicationStatus } from "./locations";
import { deckCities } from "./deck-building-locations";
import { site } from "./site";
import { services, type Faq } from "./services";

export type ServiceLocation = {
  serviceSlug: string;
  locationSlug: string;
  status: PublicationStatus;
  title: string;
  metaDescription?: string;
  introduction: string;
  focusTitle: string;
  paragraphs: string[];
  checklist: string[];
  faqs: Faq[];
};

const deckBuildingLocations: ServiceLocation[] = deckCities.map(({ slug, name, ...copy }) => ({
  ...copy,
  serviceSlug: "deck-building",
  locationSlug: slug,
  status: "published",
  title: `Deck Building in ${name}, MD`,
}));

export const serviceLocations: ServiceLocation[] = [
  {
    serviceSlug: "deck-building", locationSlug: "reisterstown", status: "published",
    title: "Deck Building in Reisterstown, MD",
    introduction: "Refresh the deck you have or plan a new place to spend time outside. We start with the frame, the connection to the house and the way you want to reach the yard.",
    focusTitle: "Repair, resurface or start again?",
    paragraphs: ["For a Reisterstown deck project, the first decision is what can stay. Worn boards do not tell the whole story: the posts, joists and connections need to be considered before choosing a new surface.", "If you are changing the layout, think about the route from the back door to the garden. A different stair position or room for a dining table can change the footprint, rails and amount of work."],
    checklist: ["Existing frame and visible connections", "Deck height, stairs and yard access", "Wood or composite decking", "Removal and repairs included in the scope"],
    faqs: [{ question: "Can you work with my existing deck in Reisterstown?", answer: "Start by sending an overall photo and close-ups of the areas that concern you. The condition of the structure determines whether repair or resurfacing is worth considering." }, { question: "What should I send for a new deck inquiry?", answer: "Include your address, a photo of the back of the house and a description of how you want to use the deck. Approximate dimensions are helpful if you have them." }],
  },
  {
    serviceSlug: "deck-building", locationSlug: "owings-mills", status: "published",
    title: "Deck Building in Owings Mills, MD",
    introduction: "Make the connection between your home and yard work better. Discuss a new deck, replacement stairs or resurfacing, with the layout and site access considered together.",
    focusTitle: "Design around the way you use the yard",
    paragraphs: ["For your Owings Mills deck, start with the door, the route down to the yard and the space needed for seating. Those choices help define the size and location of stairs before materials are selected.", "Tell us about access for deliveries and any association requirements that apply to your property. If an existing deck is being replaced, removal and the condition of the supports also belong in the discussion."],
    checklist: ["Door clearance and circulation", "Space for seating and outdoor dining", "Delivery and construction access", "Existing supports and removal work"],
    faqs: [{ question: "Can the stairs move when I replace my deck?", answer: "A new stair location may be possible, depending on the layout, site and requirements for the proposed work. Share a photo showing both the deck and the yard." }, { question: "Should I check with my association?", answer: "If your property has an association, ask whether it has an approval process for exterior changes. Share any relevant documents when discussing the project." }],
  },
  {
    serviceSlug: "deck-building", locationSlug: "pikesville", status: "published",
    title: "Deck Building in Pikesville, MD",
    introduction: "Choose a deck scope that fits your home and the upkeep you want. Compare repairs, a new surface or a replacement structure before committing to finishes.",
    focusTitle: "Choose the structure before the finish",
    paragraphs: ["A Pikesville deck renovation can involve more than new boards. Rails, steps and the connection to the house all affect what should be included. We discuss those parts together so the finished surface is supported by an appropriate scope.", "Wood and composite options bring different appearance and upkeep considerations. Compare the decking alongside the rails, trim and any framing that will remain, rather than choosing a board in isolation."],
    checklist: ["Repairs versus complete replacement", "Rails, steps and edge details", "Material appearance and upkeep", "Connections and framing that will remain"],
    faqs: [{ question: "Can new decking go over my existing frame?", answer: "Only if the frame and its connections are suitable for the proposed work. The condition of the boards alone is not enough to make that decision." }, { question: "How do I compare deck quotes?", answer: "Check whether each quote includes removal, framing repairs, stairs, rails and the same material specification. Different scopes can make the totals difficult to compare." }],
  },
  ...deckBuildingLocations,
  {
    serviceSlug: "window-door-renewal", locationSlug: "reisterstown", status: "review",
    title: "Window & Door Renewal in Reisterstown, MD",
    introduction: "Replace the window or door that no longer works for your home. Start with the opening, the condition of the surrounding material and the finish you want to keep.",
    focusTitle: "Look beyond the replacement unit",
    paragraphs: ["For a window or door project in Reisterstown, share what is happening now: sticking, visible damage, drafts or a layout that no longer suits the room. Those details help separate a product choice from the work needed around the opening.", "Interior casing and exterior trim can be part of the job too. Photos from both sides help show what you want to retain and where the scope may need to include related repairs."],
    checklist: ["Photos inside and outside", "Opening and surrounding trim", "Operation and visible damage", "Finishing work around the new unit"],
    faqs: [{ question: "Do I need exact measurements before contacting you?", answer: "No. Start with the number of openings, photos and your goals. Final product sizes need to be established before ordering." }, { question: "Can I replace just one window?", answer: "Tell us which opening needs attention. We can discuss a focused project and any matching considerations for the rest of the house." }],
  },
  {
    serviceSlug: "window-door-renewal", locationSlug: "owings-mills", status: "review",
    title: "Window & Door Renewal in Owings Mills, MD",
    introduction: "Plan window and door changes around access, operation and appearance. Tell us which openings need attention and whether the project is a single replacement or several rooms.",
    focusTitle: "A scope for every opening",
    paragraphs: ["List the windows and doors involved in your Owings Mills project. A single entry door and a series of windows require different planning for ordering, access and finishing, even when the preferred appearance is similar.", "If the outside appearance is subject to an association approval, gather those requirements before selecting products. Include photographs of the existing style and any details you want matched."],
    checklist: ["Number and location of openings", "Preferred operation and appearance", "Product and trim coordination", "Access and any association documents"],
    faqs: [{ question: "Can I discuss windows and an entry door together?", answer: "Yes. Include both in your inquiry so the product choices and finishing work can be considered together." }, { question: "What photos are useful for several windows?", answer: "Send a wide view of each wall, plus closer photos of the openings that need work. Identify which room each photo shows." }],
  },
  {
    serviceSlug: "window-door-renewal", locationSlug: "pikesville", status: "review",
    title: "Window & Door Renewal in Pikesville, MD",
    introduction: "Update windows and doors while keeping the details you value. Discuss the frame, trim and opening as well as the new unit itself.",
    focusTitle: "Keep the replacement in character",
    paragraphs: ["For your Pikesville home, tell us whether matching the existing appearance or changing it is the priority. Frame profiles, casing and exterior trim help determine how a replacement will sit alongside the rest of the building.", "Visible water damage or deterioration around an opening can change the work involved. Include those areas in your photos so the discussion covers the surrounding materials as well as the new window or door."],
    checklist: ["Existing frame profile and trim", "Details to retain or change", "Visible deterioration around openings", "Interior and exterior finishing"],
    faqs: [{ question: "Can replacement trim match the existing room?", answer: "Share clear photos of the casing and nearby details. Matching depends on the available profiles and the condition of the material you want to keep." }, { question: "Is renewal the same as historic restoration?", answer: "No. Replacement and historic restoration are different scopes. If retaining an original window is your priority, ask about the historic window restoration service before choosing a replacement." }],
  },
  {
    serviceSlug: "bathroom-remodeling", locationSlug: "reisterstown", status: "review",
    title: "Bathroom Remodeling in Reisterstown, MD",
    introduction: "Give your bathroom a clear plan before choosing tile. Discuss the shower, storage and existing layout, then define which parts of the room need to change.",
    focusTitle: "Start with what the room needs",
    paragraphs: ["A Reisterstown bathroom renovation might keep the current layout or rethink how the room is used. Tell us which fixtures can stay, where storage is missing and what you want to change about the shower or bath.", "Tile is one part of the scope. Preparation behind the finish, fixture connections and ventilation also need consideration. Photos of the full room and the areas causing concern help frame that conversation."],
    checklist: ["Layout and fixtures to retain", "Shower or bath priorities", "Storage and lighting goals", "Preparation and finishing scope"],
    faqs: [{ question: "Can I keep my current bathroom layout?", answer: "Yes, retaining the layout can be one option to discuss. Existing conditions and the changes you want determine what else needs to be included." }, { question: "Should I choose tile before asking for a quote?", answer: "You can share preferences, but it helps to establish the layout and scope before finalising the tile and fixtures." }],
  },
  {
    serviceSlug: "bathroom-remodeling", locationSlug: "owings-mills", status: "review",
    title: "Bathroom Remodeling in Owings Mills, MD",
    introduction: "Plan a bathroom renovation around daily use. Discuss shower access, storage and the work sequence, along with the finishes you have in mind.",
    focusTitle: "Make room for the everyday routine",
    paragraphs: ["For an Owings Mills bathroom project, start with the things that interrupt the daily routine: awkward storage, a shower that does not suit you or fixtures that need replacing. Prioritising these helps define a useful scope.", "Tell us whether there is another bathroom available during the work. Access, material deliveries and the order of the work are practical points to discuss before a start date is agreed."],
    checklist: ["Shower access and fixture use", "Vanity and storage needs", "Bathroom availability during work", "Materials and work sequence"],
    faqs: [{ question: "Can I change a tub to a shower?", answer: "That can be a project to discuss. The space, existing connections and proposed shower arrangement need to be reviewed before the scope is set." }, { question: "Can the bathroom stay in use during remodeling?", answer: "That depends on the work. Tell us if it is your only bathroom so the limitations and sequence can be discussed before scheduling." }],
  },
  {
    serviceSlug: "bathroom-remodeling", locationSlug: "pikesville", status: "review",
    title: "Bathroom Remodeling in Pikesville, MD",
    introduction: "Bring the layout, fixtures and finishes into one plan. From a shower renovation to a broader room update, start with the parts of your bathroom that need attention.",
    focusTitle: "A complete scope behind the new tile",
    paragraphs: ["For a Pikesville bathroom renovation, a finish change and a layout change can mean very different amounts of work. Identify whether you want to renew the existing arrangement or move fixtures before comparing proposals.", "Discuss edges, niches, storage and transitions alongside the main tile selection. These details shape both the finished appearance and the preparation needed underneath it."],
    checklist: ["Finish update or layout change", "Fixture positions and connections", "Niches, edges and transitions", "Preparation behind tiled surfaces"],
    faqs: [{ question: "Can the quote include a shower niche?", answer: "Tell us the size and position you have in mind. The wall construction and proposed shower design need to be considered before confirming it." }, { question: "What makes bathroom quotes differ?", answer: "Compare demolition, preparation, fixture changes, tile areas and finishing details. A price for new tile alone covers a different scope from a room renovation." }],
  },
];

export const serviceLocationPath = (entry: Pick<ServiceLocation, "serviceSlug" | "locationSlug">) => `/${entry.serviceSlug}-${entry.locationSlug}-md`;
export function getActiveLocations(): Location[] {
  return locations.filter(location => location.status !== "draft" && site.serviceAreas.includes(location.name));
}

export type ServiceLocationArea = { slug: string; name: string; hub?: Location };

export function getServiceLocationArea(entry: ServiceLocation): ServiceLocationArea | undefined {
  const hub = getActiveLocations().find(location => location.slug === entry.locationSlug);
  if (hub) return { slug: hub.slug, name: hub.name, hub };

  if (entry.serviceSlug === "deck-building") {
    const city = deckCities.find(location => location.slug === entry.locationSlug);
    if (city && site.serviceAreas.includes(city.name)) return { slug: city.slug, name: city.name };
  }
}

export function getActiveServiceLocations(serviceSlug?: string) {
  return serviceLocations.flatMap(entry => {
    if (entry.status === "draft" || (serviceSlug && entry.serviceSlug !== serviceSlug)) return [];
    const location = getServiceLocationArea(entry);
    const service = services.find(service => service.slug === entry.serviceSlug);
    return location && service ? [{ ...entry, location, service }] : [];
  });
}
export function getGeoRoutes() {
  return [
    ...getActiveLocations().map(location => ({ path: locationPath(location), status: location.status, kind: "location" as const, location })),
    ...getActiveServiceLocations().map(entry => ({
      path: serviceLocationPath(entry),
      status: entry.serviceSlug === "deck-building" || entry.location.hub?.status === "published" ? entry.status : "review" as const,
      kind: "service" as const,
      entry,
      location: entry.location,
      service: entry.service,
    })),
  ];
}
