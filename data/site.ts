export const site = {
  name: "KrasPro LLC", location: "Reisterstown, Baltimore County, Maryland",
  phone: "TODO_OWNER: phone", email: "TODO_OWNER: email", streetAddress: "TODO_OWNER: street address", postalCode: "TODO_OWNER: ZIP code", hours: "TODO_OWNER: business hours", licenseNumber: "TODO_OWNER: MHIC license number", epaCertification: "TODO_OWNER: EPA Lead-Safe certification if applicable", responseTime: "TODO_OWNER: response time", reviewUrl: "TODO_OWNER: review URL", story: "TODO_OWNER: company story", financing: "TODO_OWNER: confirm financing partner, terms and disclosures", siteUrl: "TODO_OWNER: site URL",
  trust: { licensed: true, insured: true, noCommissionSales: true, photoEvidence: true, itemizedQuotes: true, cleanJobSites: true },
  trustText: { licensed: "Licensed in Maryland", insured: "Insured", noCommissionSales: "No-Commission Sales", photoEvidence: "Photo Evidence First", itemizedQuotes: "Itemized, Written Quotes", cleanJobSites: "Clean Job Sites" },
  navigation: [{label:"Home",href:"/"},{label:"Services",href:"/services"},{label:"About",href:"/about"},{label:"Financing",href:"/financing"},{label:"Reviews",href:"/reviews"},{label:"Contact",href:"/contact"}],
  serviceAreas: ["Baltimore County", "Reisterstown", "Owings Mills", "Pikesville", "Towson", "Randallstown", "Cockeysville", "Catonsville", "Baltimore City", "Carroll County", "Howard County", "Harford County"], sameAs: [] as string[]
};
export const isConfirmed = (value: string): boolean => Boolean(value) && !value.includes("TODO_" + "OWNER:");
