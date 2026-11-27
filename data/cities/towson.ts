import { baltimoreCountyPermits, type CityResearch } from "./types";

const housing = "https://planning.maryland.gov/MSDC/Documents/American_Community_Survey/2020-2024/PLACE_2478425_ACS_2020-2024.PDF";
const anneslie = "https://apps.mht.maryland.gov/nr/NRDetail.aspx?NRID=1610";
const stoneleigh = "https://apps.mht.maryland.gov/NR/NRDetail.aspx?COUNTY=Baltimore+County&FROM=NRHDCountyList.aspx&NRID=1429&mapLocation=nrb1429.jpg&propertyName=Stoneleigh+Historic+District";
const postal = "https://www.uspsoig.gov/es/node/9897";
const stateMap = "https://planning.maryland.gov/Redistricting/Documents/2020Maps/Leg/2022-Legislative-District43.pdf";

export const towson: CityResearch = {
  slug: "towson",
  name: "Towson",
  county: { text: "Baltimore County", sourceUrl: anneslie },
  countyPermitAuthority: baltimoreCountyPermits,
  lead: { text: "From detached bungalows in Anneslie to brick rowhouses in Rodgers Forge, Towson has more than one kind of home to remodel. Use your home's layout and existing materials to decide what to inspect first.", sourceUrl: anneslie },
  zips: [{ text: "21204", sourceUrl: postal }, { text: "21286", sourceUrl: postal }],
  neighborhoods: [
    { name: "Anneslie", oneLineNote: "Detached homes east of York Road include bungalows and Cape Cods.", sourceUrl: anneslie },
    { name: "Rodgers Forge", oneLineNote: "This early twentieth-century neighborhood was developed with groups of brick rowhouses.", sourceUrl: anneslie },
    { name: "Stoneleigh", oneLineNote: "The original subdivision included tree-lined, curving streets near York Road.", sourceUrl: stoneleigh },
  ],
  housingProfile: {
    text: "The 2020–2024 ACS five-year estimates report 24,871 housing units for the Towson census-designated place. An estimated 8,389 units (33.7%) were detached single-unit homes and 5,399 (21.7%) were attached single-unit homes. An estimated 5,441 units (21.9%) were built from 1950 through 1959.",
    sourceUrls: [housing],
  },
  historicNote: {
    text: "Anneslie, Rodgers Forge, and Stoneleigh each have a district listed in the National Register of Historic Places.",
    sourceUrl: "https://apps.mht.maryland.gov/NR/NRHDCountyList.aspx?COUNTY=Baltimore+County&FROM=NRPickCounty.aspx",
  },
  addressAmbiguityNote: { text: "Towson's Loch Raven postal branch serves several ZIP codes. Use the street address to confirm the property's ZIP.", sourceUrl: postal },
  roads: ["York Road", "Joppa Road"].map(text => ({ text, sourceUrl: stateMap })),
  localIssues: [
    { title: "Window fit in Anneslie houses", text: "Earlier replacements may have changed the window opening. Measure the jambs, sill, and trim before choosing a repair or replacement.", needsTradeReview: true },
    { title: "Rear access in Rodgers Forge", text: "On a rowhouse, check the route for materials and the available clearance for a rear landing or steps before settling the layout.", needsTradeReview: true },
    { title: "Earlier alterations in 1950s homes", text: "Before moving fixtures, document previous renovations and look at accessible plumbing and floor framing.", needsTradeReview: true },
  ],
  faq: [
    { q: "What should I photograph before replacing windows in an Anneslie bungalow?", a: "Take a straight-on exterior photo and close-ups of the sill, jambs, trim, and sash. Flag openings that appear to have been altered so they can be measured individually.", needsTradeReview: true },
    { q: "What should I check before rebuilding the rear steps of a Rodgers Forge rowhouse?", a: "Photograph the rear door, landing, and access route together. Ask the contractor to measure the stair run and note where the work meets adjoining walls or property edges.", needsTradeReview: true },
    { q: "What should I document before moving the kitchen sink in a 1950s Towson house?", a: "Share the existing layout and any remodel records. If the floor framing and waste line are visible below, photograph them so the contractor can assess a possible route.", needsTradeReview: true },
  ],
  nearbyCities: ["lutherville-timonium", "pikesville", "owings-mills"],
  metaDescription: "Plan home remodeling in Towson, MD with local housing data, project questions for Anneslie and Rodgers Forge, and Baltimore County permit contacts.",
};
