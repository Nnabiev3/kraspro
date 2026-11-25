import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import CTABand from "@/components/sections/CTABand";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Hero from "@/components/sections/Hero";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ProjectGallery from "@/components/sections/ProjectGallery";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { EditedService } from "@/lib/cms/public";
import RelatedServices from "./RelatedServices";
import SubServiceList from "./SubServiceList";
import LocationLinks from "@/components/location/LocationLinks";

/** Composes a service page from its catalog entry and an optional quote form. */
export default function ServicePageLayout({ service, quoteForm }: { service: EditedService; quoteForm?: ReactNode }) {
  const photos = service.gallery;
  const hasPhotos = Boolean(photos?.length);
  return (
    <>
      <Breadcrumbs
        parents={[{ label: "Services", href: "/services" }]}
        current={{ label: service.navLabel, href: `/services/${service.slug}` }}
      />
      <ServiceJsonLd service={service} />
      <FaqJsonLd faqs={service.faqs} />
      <Hero
        eyebrow="KrasPro LLC"
        title={service.h1}
        description={service.heroSubhead}
        image={service.heroImage}
        workHref={hasPhotos ? "#project-photos" : undefined}
      />
      {hasPhotos && <ProjectGallery id="project-photos" key={service.slug} photos={photos} title={`${service.navLabel} Photos`} />}
      <section aria-label="About this service" className="bg-white py-10 md:py-14">
        <Container>
          <SectionHeading title={service.introTitle || `About Our ${service.navLabel} Service`} />
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-gray-600">
            {service.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <SubServiceList items={service.subServices} />
          <Link href="/service-areas" className="mt-5 inline-block font-semibold text-teal underline underline-offset-4">
            See where we work in Maryland
          </Link>
        </Container>
      </section>
      <BenefitsGrid title={service.benefitsTitle ?? "Benefits"} benefits={service.benefits} />
      <ProcessSteps title={service.processTitle} steps={service.process} />
      <FAQAccordion title={service.faqTitle} faqs={service.faqs} />
      <RelatedServices slugs={service.related} />
      <LocationLinks serviceSlug={service.slug} />
      <CTABand {...service.cta}>
        {quoteForm}
      </CTABand>
    </>
  );
}
