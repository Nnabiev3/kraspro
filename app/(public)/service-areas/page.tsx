import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { locationPath } from "@/data/locations";
import { cityHubs, isHubIndexable } from "@/data/geo";
import { getActiveLocations, getActiveServiceLocations, serviceLocationPath } from "@/data/service-locations";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import CTABand from "@/components/sections/CTABand";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { isConfirmed, serviceAreaId } from "@/data/site";
import { areasDefaults } from "@/lib/cms/pages";
import { editedMetadata, readPage, readServices, readSite } from "@/lib/cms/public";

export const generateMetadata = () => editedMetadata("/service-areas", areasDefaults);

export default async function ServiceAreasPage() {
  const [content, site, services] = await Promise.all([readPage("/service-areas", areasDefaults), readSite(), readServices()]);
  const license = site.trust.licensed ? ` Licensed in Maryland${isConfirmed(site.licenseNumber) ? ` (MHIC #${site.licenseNumber})` : ""}.` : "";
  const coveredHubs = cityHubs.filter(city => site.serviceAreas.includes(city.name));
  const locations = getActiveLocations().filter(location => !coveredHubs.some(city => city.slug === location.slug));
  const entries = getActiveServiceLocations();
  const counties = [...new Set([...locations.map(location => location.county), ...coveredHubs.map(city => city.county.text)])];
  return (
    <>
      <Breadcrumbs current={{ label: "Service Areas", href: "/service-areas" }} />
      <FaqJsonLd faqs={content.faqs} />
      <section className="bg-surface py-16 md:py-24">
        <Container>
          <h1 className="font-heading text-4xl font-semibold leading-tight text-navy md:text-5xl">
            {content.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-gray-600">
            {content.introduction.replaceAll("{count}", String(site.serviceAreas.length)).replaceAll("{location}", () => site.location)}{license}
          </p>
          <ul aria-label="Our credentials and commitments" className="mt-6 flex flex-wrap gap-2">
            {(["licensed", "insured", "itemizedQuotes"] as const).filter(key => site.trust[key]).map(key => (
              <li key={key}><Badge>{site.trustText[key]}</Badge></li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="bg-white py-14 md:py-20"><Container>
        <SectionHeading title={content.listTitle} description={content.listDescription} />
        {counties.map(county => <div key={county} className="mb-8 last:mb-0">
          <h3 className="mb-5 text-xl font-semibold text-teal">{county}</h3>
          <ul className="grid gap-5 md:grid-cols-3">{locations.filter(location => location.county === county).map(location => <li id={serviceAreaId(location.name)} key={location.slug} className="scroll-mt-24 rounded-2xl border border-gray-200 bg-surface p-6">
            <Link href={locationPath(location)} className="flex items-center justify-between gap-3 text-2xl font-semibold text-navy hover:text-teal">{location.name}<ArrowUpRight className="size-5 shrink-0" aria-hidden="true" /></Link>
            <p className="mb-5 mt-2 text-sm text-gray-600">Home remodeling in {location.name}, MD</p>
            <ul className="space-y-3 border-t border-gray-200 pt-5">{entries.filter(entry => entry.locationSlug === location.slug).map(entry => <li key={entry.serviceSlug}><Link href={serviceLocationPath(entry)} className="font-semibold text-teal underline underline-offset-4">{services.find(service => service.slug === entry.serviceSlug)!.navLabel}</Link></li>)}</ul>
          </li>)}{coveredHubs.filter(city => city.county.text === county).map(city => (
            <li id={city.slug} key={city.slug} className="scroll-mt-24 rounded-2xl border border-gray-200 bg-surface p-6">
              {isHubIndexable(city)
                ? <Link href={locationPath(city)} className="text-2xl font-semibold text-navy underline-offset-4 hover:text-teal hover:underline">{city.name}</Link>
                : <span className="text-2xl font-semibold text-navy">{city.name}</span>}
              <p className="mt-2 text-sm text-gray-600">{isHubIndexable(city) ? "Home remodeling in Maryland" : "Ask about your address"}</p>
            </li>
          ))}</ul>
        </div>)}
      </Container></section>
      <section className="bg-white py-14 md:py-24">
        <Container>
          <SectionHeading title={content.communitiesTitle} />
          <ul aria-label="Maryland communities" className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {site.serviceAreas.filter(area => !locations.some(location => location.name === area) && !coveredHubs.some(city => city.name === area)).map(area => {
              const localServices = entries.filter(entry => entry.location.name === area);
              return (
                <li key={area} id={serviceAreaId(area)} className="scroll-mt-24 rounded-xl border border-gray-200 bg-surface px-4 py-3 font-semibold text-navy target:border-teal target:bg-teal target:text-white">
                  {area}
                  {localServices.map(entry => (
                    <Link key={entry.serviceSlug} href={serviceLocationPath(entry)} className="mt-1 block text-sm underline underline-offset-4">
                      {services.find(service => service.slug === entry.serviceSlug)!.navLabel}
                      <span className="sr-only"> in {area}</span>
                    </Link>
                  ))}
                </li>
              );
            })}
          </ul>
          <p className="mt-6 text-gray-600">{content.coverageNote}</p>
        </Container>
      </section>
      <section className="bg-surface py-14 md:py-24">
        <Container>
          <SectionHeading title={content.limitsTitle} />
          <p className="max-w-3xl text-lg text-gray-600">
            {site.trust.licensed && "We are licensed in Maryland only. "}{content.limits}
          </p>
        </Container>
      </section>
      <FAQAccordion title={content.faqTitle} faqs={content.faqs} />
      <CTABand {...content.cta} />
    </>
  );
}
