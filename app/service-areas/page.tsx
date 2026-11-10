import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import CTABand from "@/components/sections/CTABand";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { isConfirmed, serviceAreaId, site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Maryland Service Areas | KrasPro LLC",
  "Explore the Maryland counties and towns served by KrasPro LLC for exterior remodeling and ask about your address.",
  "/service-areas",
);

type AreaGroup = { name: string; towns: string[]; county: boolean };

// The flat list places each town immediately after its county.
const groups: AreaGroup[] = [];
for (const area of site.serviceAreas) {
  if (area.endsWith(" County")) {
    groups.push({ name: area, towns: [], county: true });
  } else if (area === "Baltimore City") {
    groups.push({ name: area, towns: [], county: false });
  } else {
    const last = groups[groups.length - 1];
    if (last?.county) {
      last.towns.push(area);
    } else {
      groups.push({ name: area, towns: [], county: false });
    }
  }
}

const countyCount = groups.filter(group => group.county).length;
const townCount = groups.reduce((count, group) => count + group.towns.length, 0);
const hasBaltimoreCity = groups.some(group => group.name === "Baltimore City");
const license = site.trust.licensed
  ? ` Licensed in Maryland${isConfirmed(site.licenseNumber) ? ` (MHIC #${site.licenseNumber})` : ""}.`
  : "";

const faqs = [
  {
    question: "Do you cover my town if it is not on the list?",
    answer: "Contact us with your address and we will confirm whether we can serve your location in Maryland.",
  },
  {
    question: "Do you work in Washington DC?",
    answer: "No. We work in Maryland only, not Washington DC or Virginia.",
  },
  {
    question: "Why does the county matter for my project?",
    answer: "Permit rules and other requirements vary by jurisdiction. Your county or city determines which local offices and approvals may apply.",
  },
  {
    question: "How soon can you start in my area?",
    answer: "Timing depends on the project, scheduling and any required approvals. Contact us with your address and project details to discuss availability.",
  },
];

/** Lists configured service areas and answers common location questions. */
export default function ServiceAreasPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ label: "Home", href: "/" }, { label: "Service Areas", href: "/service-areas" }]} />
      <FaqJsonLd faqs={faqs} />
      <section className="bg-cream py-16 md:py-24">
        <Container>
          <h1 className="font-heading text-4xl font-semibold leading-tight text-navy md:text-5xl">
            Exterior Remodeling Service Areas in Maryland
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-gray-600">
            Serving {townCount} listed towns across {countyCount} counties{hasBaltimoreCity ? " and Baltimore City" : ""} from our base in {site.location}.{license}
          </p>
          <ul aria-label="Our credentials and commitments" className="mt-6 flex flex-wrap gap-2">
            {(["licensed", "insured", "itemizedQuotes"] as const).filter(key => site.trust[key]).map(key => (
              <li key={key}><Badge>{site.trustText[key]}</Badge></li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="bg-white py-14 md:py-24">
        <Container>
          <SectionHeading title="Why We Group by County" />
          <p className="max-w-3xl text-lg text-gray-600">
            Permit rules and project requirements vary by jurisdiction. Grouping areas by county makes it easier to identify which local offices may need to review your project.
          </p>
        </Container>
      </section>
      <section className="bg-teal-50 py-14 md:py-24">
        <Container>
          <SectionHeading title="Counties and Communities We Serve" />
          <div className="grid gap-6 md:grid-cols-2">
            {groups.map(group => (
              <section key={group.name} id={serviceAreaId(group.name)} className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-2xl font-semibold text-navy">{group.name}</h3>
                {group.towns.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.towns.map(town => (
                      <li key={town} id={serviceAreaId(town)} className="scroll-mt-24 rounded-full bg-teal-50 px-4 py-2 text-navy">{town}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
          <p className="mt-6 text-gray-600">If your address is near the county line, contact us to confirm whether we serve your location.</p>
        </Container>
      </section>
      <section className="bg-cream py-14 md:py-24">
        <Container>
          <SectionHeading title="Service Area Limitations" />
          <p className="max-w-3xl text-lg text-gray-600">
            {site.trust.licensed && "We are licensed in Maryland only. "}We work in Maryland only. We do not work in Washington DC or Virginia, regardless of drive time.
          </p>
        </Container>
      </section>
      <FAQAccordion title="Service Area Questions" faqs={faqs} />
      <CTABand
        title="Not Sure If We Reach You?"
        description={`Give us the address and we will tell you straight. No obligation.${site.trust.noCommissionSales ? " No commission." : ""}`}
      />
    </>
  );
}
