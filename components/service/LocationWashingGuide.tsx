import LocationProjectGuide, { type GuideProps } from "./LocationProjectGuide";

const priceRanges = [
  { label: "House siding", range: "$250-$600" },
  { label: "Typical two-car driveway", range: "$150-$350" },
  { label: "Deck or patio", range: "$200-$500" },
];

const steps = [
  { title: "Send photos", description: "Include a wide view, a close-up and the route from the street. Name each surface you want washed and tell us about repairs or coatings you already know of." },
  { title: "Review the scope", description: "We check the surface and access, identify areas to protect, and describe the cleaning method and the work included in your written quote." },
  { title: "Wash and walk through", description: "On the agreed day we prepare the work area, wash suitable surfaces and review the result with you. We point out areas that may need separate repair or stain treatment." },
];

export default function LocationWashingGuide({ city, pricingNote, examples, sampleReviews }: GuideProps) {
  return <LocationProjectGuide city={city} pricingNote={pricingNote} examples={examples} sampleReviews={sampleReviews} guide={{
    service: "Power Washing",
    costId: "washing-cost",
    priceRanges,
    priceDisclosure: "These are Maryland market ranges for budgeting. KrasPro quotes depend on the surfaces, access and condition at your property.",
    processTitle: "How the Wash Goes",
    steps,
    exampleDisclosure: "Hypothetical scopes based on common exterior surfaces.",
    reviewDisclosure: "Fictional examples of what a homeowner might comment on after a wash.",
  }} />;
}
