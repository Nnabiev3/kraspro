import { baltimoreCountyPermits, type CityResearch } from "./types";

const housing = "https://planning.maryland.gov/MSDC/SiteAssets/ACS_Tables/5-Year/2020-2024/Reports/PLACE_2461400_ACS_2020-2024.aspx";
const sudbrook = "https://apps.mht.maryland.gov/nr/NRDetail.aspx?NRID=183";

export const pikesville: CityResearch = {
  slug: "pikesville",
  name: "Pikesville",
  county: { text: "Baltimore County", sourceUrl: sudbrook },
  countyPermitAuthority: baltimoreCountyPermits,
  lead: { text: "A Pikesville remodel might start with an older facade in Sudbrook Park or with an interior layout in a building with several homes. The local housing profile gives you a starting point for the questions to ask about your own property.", sourceUrl: housing },
  zips: [{ text: "21208", sourceUrl: "https://bcpl.info/locations/pikesville" }],
  neighborhoods: [
    { name: "Sudbrook Park", oneLineNote: "Maryland Historical Trust documents Shingle Style houses and recurring gambrel roofs in the historic district.", sourceUrl: sudbrook },
    { name: "Ralston", oneLineNote: "This subdivision was laid out in the late nineteenth century and includes the county-listed Hefter-Hamburger Bungalow.", sourceUrl: "https://www.baltimorecountymd.gov/files/Documents/Planning/historic/landmarkbooklet.pdf" },
    { name: "Colonial Village", oneLineNote: "The Pikesville-Greenspring Community Coalition traces the neighborhood to the 1930s and 1940s.", sourceUrl: "https://www.pikesvillegreenspring.org/member-organizations" },
  ],
  housingProfile: {
    text: "The 2020–2024 ACS five-year estimates report 14,391 housing units for the Pikesville census-designated place. An estimated 5,413 (37.6%) were detached single-unit homes and 2,465 (17.1%) were in buildings with five to nine units. An estimated 2,839 units (19.7%) were built in the 1960s and 2,716 (18.9%) in the 1970s.",
    sourceUrls: [housing],
  },
  historicNote: { text: "The Sudbrook Park Historic District was listed in the National Register of Historic Places on June 19, 1973.", sourceUrl: sudbrook },
  addressAmbiguityNote: { text: "The mapped 21208 ZIP area also reaches into Lochearn and Milford Mill. Use the full street address to confirm the location.", sourceUrl: "https://www.zipdatamaps.com/en/us/zip-code-faq/21208" },
  roads: [
    { text: "Reisterstown Road", sourceUrl: "https://bcpl.info/locations/pikesville" },
    { text: "Milford Mill Road", sourceUrl: sudbrook },
  ],
  localIssues: [
    { title: "Matching shingle siding in Sudbrook Park", text: "Where patterned shingles remain, document the profile and exposed height of each course before choosing material for a repair.", needsTradeReview: true },
    { title: "Finishing a mid-century basement", text: "For a home from the 1960s or 1970s, inspect accessible drainage, signs of moisture, and clearances below ducts or beams before laying out the rooms.", needsTradeReview: true },
    { title: "Identifying shared components in a multi-unit building", text: "Confirm with management which portions of the plumbing and exterior windows are shared or managed by the building before pricing the project.", needsTradeReview: true },
  ],
  faq: [
    { q: "Can I ask for a small shingle siding repair on a Sudbrook Park house?", a: "Start with a wall photo and close-ups of the shingles and trim. Ask the contractor how the surrounding material's condition affects the choice between a localized repair and replacing more of the wall.", needsTradeReview: true },
    { q: "What should I check before finishing the basement of a 1960s or 1970s Pikesville home?", a: "Show the contractor any staining, the drainage or sump if present, and low points under beams or ducts. These observations help define the scope before you select finishes.", needsTradeReview: true },
    { q: "What should I gather before renovating a bathroom in a small Pikesville multi-unit building?", a: "Get the renovation documents from management and confirm what is known about the unit's plumbing connections before discussing fixture moves.", needsTradeReview: true },
  ],
  nearbyCities: ["towson", "owings-mills", "lutherville-timonium", "reisterstown"],
  metaDescription: "Explore home remodeling in Pikesville, MD with local housing data, Sudbrook Park siding questions, and contacts for Baltimore County permits.",
};
