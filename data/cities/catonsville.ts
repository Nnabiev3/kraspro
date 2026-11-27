import { baltimoreCountyPermits, type CityResearch } from "./types";

const housing = "https://planning.maryland.gov/MSDC/SiteAssets/ACS_Tables/5-Year/2020-2024/Reports/PLACE_2414125_ACS_2020-2024.aspx";
const oldCatonsville = "https://apps.mht.maryland.gov/NR/NRDetail.aspx?COUNTY=Baltimore+County&FROM=NRHDCountyList.aspx&NRID=1384&mapLocation=nrb1384.jpg&propertyName=Old+Catonsville+Historic+District";
const summitPark = "https://apps.mht.maryland.gov/NR/NRDetail.aspx?COUNTY=Baltimore+County&FROM=NRHDCountyList.aspx&NRID=1510&mapLocation=nrb1510.jpg&propertyName=Central+Catonsville+and+Summit+Park+Historic+District";

export const catonsville: CityResearch = {
  slug: "catonsville",
  name: "Catonsville",
  county: { text: "Baltimore County", sourceUrl: summitPark },
  countyPermitAuthority: baltimoreCountyPermits,
  lead: { text: "Frederick Road separates two Catonsville historic districts. South of the road, Summit Park includes bungalows and American Foursquares. If you're planning work on one of these homes, start by recording the details you want to keep.", sourceUrl: summitPark },
  zips: [{ text: "21228", sourceUrl: "https://www.bcpl.info/locations/catonsville" }],
  neighborhoods: [
    { name: "Old Catonsville", oneLineNote: "This mostly residential area lies north of Frederick Road. Some of its earliest houses stand on larger lots.", sourceUrl: oldCatonsville },
    { name: "Summit Park", oneLineNote: "The subdivision is predominantly detached housing, including bungalows and American Foursquares.", sourceUrl: summitPark },
    { name: "Academy Heights", oneLineNote: "The civic association describes brick Neo-Colonial rowhouses with slate roofs.", sourceUrl: "https://www.academyheightsmd.org/" },
  ],
  housingProfile: {
    text: "The 2020–2024 ACS five-year estimates report 16,926 housing units for the Catonsville census-designated place. An estimated 8,428 (49.8%) were detached single-unit homes. An estimated 3,132 units (18.5%) were built in 1939 or earlier, and 3,515 (20.8%) were built from 1950 through 1959.",
    sourceUrls: [housing],
  },
  historicNote: { text: "Old Catonsville and Central Catonsville and Summit Park are separately listed National Register districts on opposite sides of Frederick Road.", sourceUrl: summitPark },
  addressAmbiguityNote: { text: "The mapped 21228 ZIP area also reaches into part of Woodlawn. Use the full street address to confirm the location.", sourceUrl: "https://www.zipdatamaps.com/en/us/zip-code-faq/21228" },
  roads: ["Frederick Road", "Rolling Road"].map(text => ({ text, sourceUrl: summitPark })),
  localIssues: [
    { title: "Porch repairs in Summit Park", text: "On a bungalow or Foursquare with a porch, inspect the posts, stair connections, and framing before deciding which boards and supports can stay.", needsTradeReview: true },
    { title: "Water entry at an Academy Heights rowhouse", text: "If there is staining near an upper window, ask for a review of the brickwork, opening, and roof edge together before selecting a repair.", needsTradeReview: true },
    { title: "Existing work in older Catonsville houses", text: "For a house built before 1940, check the proposed layout against accessible framing and plumbing. Previous alterations may affect what you can keep or move.", needsTradeReview: true },
  ],
  faq: [
    { q: "What should a porch estimate cover for a Summit Park bungalow?", a: "Ask for separate notes on the floorboards, stairs, posts, and connection to the house. This helps compare a surface repair with a larger rebuild.", needsTradeReview: true },
    { q: "What should I check if an Academy Heights rowhouse has dampness above a window?", a: "Photograph the indoor stain and the brick and roof edge above the opening. Ask the contractor to trace the moisture before deciding how much of the opening needs work.", needsTradeReview: true },
    { q: "How can I prepare for a bathroom remodel in an older Old Catonsville house?", a: "Locate accessible plumbing below the room and share what you know about past renovations. Ask how the estimate handles conditions that can only be assessed after finishes are removed.", needsTradeReview: true },
  ],
  nearbyCities: ["ellicott-city", "pikesville", "owings-mills"],
  metaDescription: "Plan home remodeling in Catonsville, MD with local guidance for Summit Park porches, Academy Heights rowhouses, and older homes near Frederick Road.",
};
