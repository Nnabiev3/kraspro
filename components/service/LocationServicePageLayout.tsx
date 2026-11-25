import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hero from "@/components/sections/Hero";
import ProjectGallery from "@/components/sections/ProjectGallery";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTABand from "@/components/sections/CTABand";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import QuoteForm from "@/components/forms/QuoteForm";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import LocationLinks from "@/components/location/LocationLinks";
import { locationPath, type Location } from "@/data/locations";
import { getActiveServiceLocations, serviceLocationPath, type ServiceLocation } from "@/data/service-locations";
import type { Service } from "@/data/services";
import type { geoServiceDefaults } from "@/lib/cms/pages";
import { preservePhotoDetails, readServices } from "@/lib/cms/public";
import { servicePhotos } from "@/data/projects";
import { absoluteUrl } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";

export default async function LocationServicePageLayout({ entry, location, service, content }: { entry: ServiceLocation; location: Location; service: Service; content: ReturnType<typeof geoServiceDefaults> }) {
  const services = await readServices();
  const path = serviceLocationPath(entry);
  const photos = preservePhotoDetails(content.gallery, servicePhotos[service.slug]);
  const related = getActiveServiceLocations().filter(item => item.locationSlug === location.slug && item.serviceSlug !== service.slug);
  return <>
    <Breadcrumbs parents={[{ label: service.navLabel, href: `/services/${service.slug}` }]} current={{ label: location.name, href: path }} />
    <JsonLd data={{ ...serviceSchema(service), name: content.title, description: content.introduction, url: absoluteUrl(path), areaServed: { "@type": "Place", name: `${location.name}, Maryland` } }} />
    <FaqJsonLd faqs={content.faqs} />
    <Hero eyebrow={`${location.name}, ${location.county}`} title={content.title} description={content.introduction} image={{ ...content.heroImage, isPlaceholder: content.heroImage.src === service.heroImage.src && service.heroImage.isPlaceholder }} workHref={photos.length ? "#project-photos" : undefined} quoteHref="#request-quote" />
    <nav aria-label="Explore this service and area" className="border-b border-gray-200 bg-white py-5"><Container className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-teal"><Link href={`/services/${service.slug}`} className="underline underline-offset-4">{service.navLabel} across Maryland</Link><Link href={locationPath(location)} className="underline underline-offset-4">All services in {location.name}</Link><Link href="/service-areas" className="underline underline-offset-4">All service areas</Link></Container></nav>
    <section className="bg-white py-14 md:py-24"><Container className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
      <div><SectionHeading title={content.focusTitle} /><div className="max-w-2xl space-y-5 text-lg leading-relaxed text-gray-600">{content.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div>
      <aside className="rounded-2xl border border-gray-200 bg-surface p-6 sm:p-8"><h2 className="text-2xl font-semibold text-navy">What to discuss before the quote</h2><ul className="mt-6 space-y-5">{content.checklist.map(item => <li key={item} className="flex gap-3 text-navy"><Check className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />{item}</li>)}</ul><p className="mt-7 border-t border-gray-200 pt-5 text-sm leading-relaxed text-gray-600">In {location.county}, use your exact property address when checking which local requirements apply. The proposed scope matters as well as the location.</p><a href={location.source.url} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-semibold text-teal underline underline-offset-4">County community information</a></aside>
    </Container></section>
    {photos.length > 0 && <><ProjectGallery id="project-photos" photos={photos} title={`A closer look at our ${service.navLabel.toLowerCase()} work`} /><Container className="pb-10"><p className="max-w-3xl text-sm leading-relaxed text-gray-600">Examples of KrasPro work. Project towns have not been confirmed for these photographs; they are not presented as completed jobs in {location.name}.</p></Container></>}
    <FAQAccordion title={content.faqTitle} faqs={content.faqs} />
    <section className="bg-white py-14 md:py-20"><Container><SectionHeading title={`More for your ${location.name} home`} /><ul className="grid gap-4 sm:grid-cols-2">{related.map(item => <li key={item.serviceSlug}><Link href={serviceLocationPath(item)} className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 p-6 text-xl font-semibold text-navy hover:border-teal">{services.find(value => value.slug === item.serviceSlug)!.navLabel}<ArrowUpRight className="size-5 shrink-0 text-teal" aria-hidden="true" /></Link></li>)}</ul></Container></section>
    <LocationLinks serviceSlug={service.slug} excludeLocation={location.slug} />
    <div id="request-quote" className="scroll-mt-24"><CTABand {...content.cta}><QuoteForm defaultService={service.slug} defaultCity={location.name} sourcePage={path} /></CTABand></div>
  </>;
}
