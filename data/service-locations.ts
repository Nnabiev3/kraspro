import { locations, locationPath, type Location, type PublicationStatus } from "./locations";
import { deckCities } from "./deck-building-locations";
import { paintingCities } from "./exterior-painting-locations";
import { renewalCities } from "./window-door-renewal-locations";
import { restorationCities } from "./historic-window-restoration-locations";
import { serviceAreaId, site } from "./site";
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

const paintingService = "exterior-painting-carpentry";
const renewalService = "window-door-renewal";
const restorationService = "historic-window-restoration";
const standaloneCityServices = new Set(["deck-building", paintingService, renewalService, restorationService]);

const deckBuildingLocations: ServiceLocation[] = deckCities.map(({ slug, name, ...copy }) => ({
  ...copy,
  serviceSlug: "deck-building",
  locationSlug: slug,
  status: "published",
  title: `Deck Building in ${name}, MD`,
}));

const paintingLocations: ServiceLocation[] = paintingCities.map(({ name, ...copy }) => ({
  ...copy,
  serviceSlug: paintingService,
  locationSlug: serviceAreaId(name),
  status: "published",
  title: `Exterior Painting & Carpentry in ${name}, MD`,
}));

const renewalLocations: ServiceLocation[] = renewalCities.map(({ name, ...copy }) => ({
  ...copy,
  serviceSlug: renewalService,
  locationSlug: serviceAreaId(name),
  status: "published",
  title: `Window & Door Renewal in ${name}, MD`,
}));

const restorationLocations: ServiceLocation[] = restorationCities.map(({ name, ...copy }) => ({
  ...copy,
  serviceSlug: restorationService,
  locationSlug: serviceAreaId(name),
  status: "published",
  title: `Historic Window Restoration in ${name}, MD`,
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
  ...paintingLocations,
  ...renewalLocations,
  ...restorationLocations,
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

  if (standaloneCityServices.has(entry.serviceSlug)) {
    const name = site.serviceAreas.find(area => serviceAreaId(area) === entry.locationSlug);
    if (name) return { slug: entry.locationSlug, name };
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
      status: standaloneCityServices.has(entry.serviceSlug) || entry.location.hub?.status === "published" ? entry.status : "review" as const,
      kind: "service" as const,
      entry,
      location: entry.location,
      service: entry.service,
    })),
  ];
}
