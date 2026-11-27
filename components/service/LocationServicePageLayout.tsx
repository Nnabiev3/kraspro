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
import LocationWashingGuide from "@/components/service/LocationWashingGuide";
import LocationProjectGuide from "@/components/service/LocationProjectGuide";
import { locationPath } from "@/data/locations";
import { getActiveServiceLocations, serviceLocationPath, type ServiceLocation, type ServiceLocationArea } from "@/data/service-locations";
import type { Service } from "@/data/services";
import type { geoServiceDefaults } from "@/lib/cms/pages";
import { preservePhotoDetails, readServices } from "@/lib/cms/public";
import { servicePhotos } from "@/data/projects";
import { absoluteUrl } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";

const basementGuide = {
  service: "Basement Remodeling",
  costId: "basement-remodeling-cost",
  priceRanges: [
    { label: "Basic finishing with existing utilities", range: "$50–$70 per sq. ft." },
    { label: "Custom layout and upgraded finishes", range: "$75–$95 per sq. ft." },
    { label: "Major remodel with a bath or wet bar", range: "$65,000–$140,000+" },
  ],
  priceDisclosure: "These are Maryland market estimates for budgeting. Access, square footage, utility changes and work to address water entry can change the written quote.",
  processTitle: "How Your Basement Remodel Works",
  steps: [
    { title: "Walk through the basement", description: "We discuss how you use the space and note stairs, headroom, mechanical equipment and signs of moisture. Tell us what happened during heavy rain as well as what you see on a dry day." },
    { title: "Review the layout and written scope", description: "We map the rooms, storage and access to utilities. The scope spells out finish choices, site preparation, optional work and which permit or inspection questions need to be resolved for your address." },
    { title: "Build, finish and walk through", description: "We sequence preparation and trade work before closing walls, then complete the agreed finishes. At the walkthrough, we show you where to reach shutoffs and equipment and review the work included in the quote." },
  ],
  exampleDisclosure: "Illustrative project scenarios based on common remodeling decisions.",
  reviewDisclosure: "These fictional comments illustrate what homeowners might look for during a remodel.",
};

const kitchenGuide = {
  service: "Kitchen Remodeling",
  costId: "kitchen-remodeling-cost",
  priceRanges: [
    { label: "Refresh with existing cabinet boxes", range: "$15,000–$30,000" },
    { label: "Full replacement in the existing layout", range: "$35,000–$65,000" },
    { label: "Major remodel with a new layout", range: "$75,000–$120,000+" },
  ],
  priceDisclosure: "Maryland market planning ranges in USD. Room size, cabinet construction, appliance allowances, access and changes to the building or utilities affect the written estimate.",
  processTitle: "How Your Kitchen Remodel Works",
  steps: [
    { title: "Measure the room", description: "Walk us through a normal meal, from unloading groceries to cleaning up. We measure the existing room, check the delivery route and identify which fixtures, appliances and finishes you would like to keep." },
    { title: "Review options and scope", description: "Compare layout and cabinet choices against your budget. The written scope identifies material allowances, utility changes, protection for adjoining rooms and any approvals to confirm before ordering." },
    { title: "Prepare and install", description: "Coordinate cabinet and appliance deliveries before removal begins. Prepare the room, complete the agreed trade work and set the cabinets before measuring for the countertop." },
    { title: "Walk through the kitchen", description: "Open doors and drawers with us, review the lighting and appliances, and go over any remaining items. We show you where the shutoffs are and discuss care for the new finishes." },
  ],
  exampleDisclosure: "Illustrative design scenarios for planning a kitchen remodel.",
  reviewDisclosure: "Fictional homeowner comments illustrate details you can discuss during your project.",
};

const bathroomGuide = {
  service: "Bathroom Remodeling",
  costId: "bathroom-remodeling-cost",
  priceRanges: [
    { label: "Cosmetic refresh in the existing layout", range: "$3,000–$6,000" },
    { label: "Full hall or primary bath remodel", range: "$8,000–$18,000" },
    { label: "Custom primary bath or major layout change", range: "$20,000–$45,000+" },
  ],
  priceDisclosure: "Maryland market planning ranges in USD. The written quote depends on room size, finish allowances, plumbing changes, access and conditions found behind existing surfaces.",
  processTitle: "How Your Bathroom Remodel Works",
  steps: [
    { title: "Measure the room", description: "Show us how you use the bath and which fixtures give you trouble. We look at clearances, visible moisture damage, stairs and the path for new materials. Tell us whether this is the only working bath in the home." },
    { title: "Review the scope and selections", description: "Compare fixture locations, tile coverage and storage with itemized allowances. We discuss protection for adjacent rooms, the expected interruptions and any building or permit requirements to confirm for the property." },
    { title: "Prepare, then install", description: "After removing the agreed materials, review what the work uncovered. Complete the required preparation and wet-area work before finishes go in. Measure custom glass once the finished opening is ready." },
    { title: "Test the room at the walkthrough", description: "Check the shower door, fixtures, drawers and lighting together. Review shutoff locations and care instructions for the selected finishes, and record any outstanding items." },
  ],
  exampleDisclosure: "Illustrative project scenarios for planning a bathroom remodel.",
  reviewDisclosure: "These fictional examples show what homeowners might value during a remodel.",
};

const christmasLightGuide = {
  service: "Christmas Light Installation",
  costId: "christmas-light-installation-cost",
  priceRanges: [
    { label: "Standard lighting by measured run", range: "$2.70–$7.40 per linear foot" },
    { label: "Roof lighting", range: "$160–$1,270" },
    { label: "Tree lighting", range: "$80–$1,590 per tree" },
  ],
  priceDisclosure: "Baltimore-area market ranges in USD from Angi. These are planning figures. Confirm which lights, mounting, seasonal service calls, removal and storage are included before comparing written quotes.",
  processTitle: "How Seasonal Light Installation Works",
  steps: [
    { title: "Share the view and the dates", description: "Send a wide photo of the frontage and a closer view of the features you want lit. Include the occasions when you want the display ready, the outdoor power you know about and anything that limits access to the work area." },
    { title: "Review the layout and written estimate", description: "We discuss the primary sightline, color, mounting surfaces and what must stay accessible. The quote defines which elevations and accents are included. Ask for options for lights, timers, removal and storage so you can see which items affect the total." },
    { title: "Schedule installation and check the display", description: "Agree on a work window and a contact for access. A wet or icy surface can mean choosing another date. Review the installed layout and timer settings, and confirm who to contact if a section goes out or the removal schedule needs to change." },
  ],
  exampleDisclosure: "Illustrative project scenarios for planning a seasonal display.",
  reviewDisclosure: "Fictional examples of what a homeowner might say about the planning process.",
};

const projectGuides: Partial<Record<string, typeof bathroomGuide>> = {
  "basement-remodeling": basementGuide,
  "kitchen-remodeling": kitchenGuide,
  "bathroom-remodeling": bathroomGuide,
  "christmas-light-installation": christmasLightGuide,
};

export default async function LocationServicePageLayout({ entry, location, service, content }: { entry: ServiceLocation; location: ServiceLocationArea; service: Service; content: ReturnType<typeof geoServiceDefaults> }) {
  const services = await readServices();
  const path = serviceLocationPath(entry);
  const photos = preservePhotoDetails(content.gallery, servicePhotos[service.slug]);
  const related = getActiveServiceLocations().filter(item => item.locationSlug === location.slug && item.serviceSlug !== service.slug);
  const hub = location.hub;
  const isBathroom = service.slug === "bathroom-remodeling";
  const isChristmasLighting = service.slug === "christmas-light-installation";
  const projectGuide = projectGuides[service.slug];
  const imageCaption = {
    "/images/services/basement-remodeling.jpg": "Illustrative basement design",
    "/images/services/kitchen-remodeling.jpg": "Illustrative kitchen design",
    "/images/projects/kraspro/shower-tiling.jpg": "KrasPro shower installation detail",
    "/images/services/christmas-light-installation.jpg": "Illustrative seasonal lighting design",
  }[content.heroImage.src];
  const guideProps = entry.guide && {
    city: location.name,
    pricingNote: content.pricingNote ?? entry.guide.pricingNote,
    examples: content.examples ?? entry.guide.examples,
    sampleReviews: content.sampleReviews ?? entry.guide.sampleReviews,
  };
  return <>
    <Breadcrumbs parents={[{ label: service.navLabel, href: `/services/${service.slug}` }]} current={{ label: location.name, href: path }} />
    <JsonLd data={{ ...serviceSchema(service), name: content.title, description: content.introduction, url: absoluteUrl(path), areaServed: { "@type": isBathroom || isChristmasLighting ? "City" : "Place", name: `${location.name}, Maryland` } }} />
    <FaqJsonLd faqs={content.faqs} />
    <Hero eyebrow={`${location.name}, ${hub?.county ?? "Maryland"}`} title={content.title} description={content.introduction} image={{ ...content.heroImage, isPlaceholder: content.heroImage.src === service.heroImage.src && service.heroImage.isPlaceholder }} imageCaption={imageCaption} workHref={photos.length ? "#project-photos" : undefined} quoteHref="#request-quote" />
    <nav aria-label="Explore this service and area" className="border-b border-gray-200 bg-white py-5"><Container className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-teal"><Link href={`/services/${service.slug}`} className="underline underline-offset-4">{service.navLabel} across Maryland</Link>{hub && <Link href={locationPath(hub)} className="underline underline-offset-4">All services in {location.name}</Link>}<Link href="/service-areas" className="underline underline-offset-4">All service areas</Link></Container></nav>
    <section className="bg-white py-14 md:py-24"><Container className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        {(isBathroom || isChristmasLighting) && <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal">Why Work With KrasPro</p>}
        <SectionHeading title={content.focusTitle} />
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-gray-600">{content.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
      </div>
      <aside className="rounded-2xl border border-gray-200 bg-surface p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-navy">What to discuss before the quote</h2>
        <ul className="mt-6 space-y-5">{content.checklist.map(item => <li key={item} className="flex gap-3 text-navy"><Check className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />{item}</li>)}</ul>
        {hub && <><p className="mt-7 border-t border-gray-200 pt-5 text-sm leading-relaxed text-gray-600">In {hub.county}, use your exact property address when checking which local requirements apply. The proposed scope matters as well as the location.</p><a href={hub.source.url} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-semibold text-teal underline underline-offset-4">County community information</a></>}
      </aside>
    </Container></section>
    {photos.length > 0 && <><ProjectGallery id="project-photos" photos={photos} title={`A closer look at our ${service.navLabel.toLowerCase()} work`} /><Container className="pb-10"><p className="max-w-3xl text-sm leading-relaxed text-gray-600">Examples of KrasPro work. Project towns have not been confirmed for these photographs; they are not presented as completed jobs in {location.name}.</p></Container></>}
    {guideProps && (projectGuide ? <LocationProjectGuide {...guideProps} guide={projectGuide} /> : <LocationWashingGuide {...guideProps} />)}
    <FAQAccordion title={content.faqTitle} faqs={content.faqs} />
    {related.length > 0 && <section className="bg-white py-14 md:py-20"><Container><SectionHeading title={`More for your ${location.name} home`} /><ul className="grid gap-4 sm:grid-cols-2">{related.map(item => <li key={item.serviceSlug}><Link href={serviceLocationPath(item)} className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 p-6 text-xl font-semibold text-navy hover:border-teal">{services.find(value => value.slug === item.serviceSlug)!.navLabel}<ArrowUpRight className="size-5 shrink-0 text-teal" aria-hidden="true" /></Link></li>)}</ul></Container></section>}
    <LocationLinks serviceSlug={service.slug} excludeLocation={location.slug} nearby={entry.guide?.nearby} />
    <div id="request-quote" className="scroll-mt-24"><CTABand {...content.cta}><QuoteForm defaultService={service.slug} defaultCity={location.name} sourcePage={path} /></CTABand></div>
  </>;
}
