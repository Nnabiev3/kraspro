import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hero from "@/components/sections/Hero";
import CTABand from "@/components/sections/CTABand";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import QuoteForm from "@/components/forms/QuoteForm";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { locationPath, type Location } from "@/data/locations";
import { getActiveServiceLocations, serviceLocationPath } from "@/data/service-locations";
import type { cityDefaults } from "@/lib/cms/pages";
import { readServices } from "@/lib/cms/public";
import LocationLinks from "./LocationLinks";

export default async function LocationPageLayout({ location, content }: { location: Location; content: ReturnType<typeof cityDefaults> }) {
  const entries = getActiveServiceLocations().filter(entry => entry.locationSlug === location.slug);
  const services = await readServices();
  return <>
    <Breadcrumbs parents={[{ label: "Service Areas", href: "/service-areas" }]} current={{ label: location.name, href: locationPath(location) }} />
    <FaqJsonLd faqs={content.faqs} />
    <Hero eyebrow={`${location.county}, Maryland`} title={content.title} description={content.introduction} image={content.heroImage} workHref="#local-services" quoteHref="#request-quote" />
    <section id="local-services" className="scroll-mt-24 bg-white py-14 md:py-24">
      <Container>
        <SectionHeading title={content.listTitle} description={content.listDescription} />
        <ul className="grid gap-6 md:grid-cols-3">
          {entries.map(entry => {
            const service = services.find(item => item.slug === entry.serviceSlug)!;
            return <li key={entry.serviceSlug}>
              <Link href={serviceLocationPath(entry)} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-surface transition-colors hover:border-teal">
                <div className="relative aspect-[4/3] overflow-hidden"><Image src={service.heroImage.src} alt={service.heroImage.alt} fill unoptimized className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105" /></div>
                <div className="flex flex-1 flex-col p-6"><h3 className="text-2xl font-semibold leading-tight text-navy">{service.navLabel}</h3><p className="mt-3 flex-1 leading-relaxed text-gray-600">{entry.introduction}</p><span className="mt-6 inline-flex items-center gap-2 font-semibold text-teal">Explore in {location.name}<ArrowUpRight className="size-4 shrink-0" aria-hidden="true" /></span></div>
              </Link>
            </li>;
          })}
        </ul>
        <Link href="/services" className="mt-7 inline-block font-semibold text-teal underline underline-offset-4">Explore all KrasPro services</Link>
      </Container>
    </section>
    <section className="bg-surface py-14 md:py-20"><Container className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
      <div><SectionHeading title={content.planningTitle} /><p className="max-w-2xl text-lg leading-relaxed text-gray-600">{content.planningText}</p></div>
      <aside className="rounded-2xl border border-gray-200 bg-white p-7"><MapPin aria-hidden="true" className="mb-4 size-6 text-teal" /><h2 className="text-2xl font-semibold text-navy">Your project address matters</h2><p className="mt-3 leading-relaxed text-gray-600">{location.name} is in {location.county}. Share the property address so availability and the requirements relevant to your proposed work can be checked.</p><a href={location.source.url} target="_blank" rel="noreferrer" className="mt-5 inline-block font-semibold text-teal underline underline-offset-4">County community planning information</a></aside>
    </Container></section>
    <FAQAccordion title={content.faqTitle} faqs={content.faqs} />
    <LocationLinks excludeLocation={location.slug} />
    <div id="request-quote" className="scroll-mt-24"><CTABand {...content.cta}><QuoteForm defaultCity={location.name} sourcePage={locationPath(location)} /></CTABand></div>
  </>;
}
