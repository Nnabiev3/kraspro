import type { ReactNode } from "react";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import CTABand from "@/components/sections/CTABand";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Hero from "@/components/sections/Hero";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { homeServiceSummaries } from "@/data/home";
import type { Service } from "@/data/services";
import RelatedServices from "./RelatedServices";
import SubServiceList from "./SubServiceList";

/** Composes a service page from its catalog entry and an optional quote form. */
export default function ServicePageLayout({ service, quoteForm }: { service: Service; quoteForm?: ReactNode }) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.navLabel, href: `/services/${service.slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ServiceJsonLd service={service} />
      <FaqJsonLd faqs={service.faqs} />
      <nav aria-label="Breadcrumb" className="border-b border-gray-200 bg-white py-3">
        <Container>
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            {breadcrumbs.map(({ label, href }, index) => (
              <li key={href} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span aria-current="page" className="text-navy">{label}</span>
                ) : (
                  <Link href={href} className="font-semibold text-teal underline underline-offset-4">{label}</Link>
                )}
              </li>
            ))}
          </ol>
        </Container>
      </nav>
      <Hero eyebrow="Exterior remodeling in Maryland" title={service.h1} description={service.heroSubhead} image={service.heroImage} />
      <section aria-label="About this service" className="bg-white py-14 md:py-24">
        <Container>
          <aside aria-label="Quick answer" className="mb-10 max-w-3xl rounded-xl border border-gray-200 bg-teal-50 p-5 text-navy">
            <p className="font-semibold">Quick answer</p>
            <p className="mt-2">{homeServiceSummaries[service.slug] ?? service.heroSubhead} Available in our Maryland service area. <Link href="/contact" className="font-semibold underline underline-offset-4">Request a free quote.</Link></p>
          </aside>
          <SectionHeading title={`About Our ${service.navLabel} Service`} />
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-gray-600">
            {service.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <SubServiceList items={service.subServices} />
        </Container>
      </section>
      <BenefitsGrid title="Benefits" benefits={service.benefits} />
      <ProcessSteps title="How the Work Goes" steps={service.process} />
      <FAQAccordion title="Frequently Asked Questions" faqs={service.faqs} />
      <RelatedServices slugs={service.related} />
      <CTABand title="Get a Free Quote" description="Tell us about your home and what you want to change.">
        {quoteForm}
      </CTABand>
    </>
  );
}
