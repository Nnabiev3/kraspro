import FaqJsonLd from "@/components/seo/FaqJsonLd";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import CTABand from "@/components/sections/CTABand";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FinancingBand from "@/components/sections/FinancingBand";
import Hero from "@/components/sections/Hero";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ProjectGallery from "@/components/sections/ProjectGallery";
import ReviewsStrip from "@/components/sections/ReviewsStrip";
import ServiceAreas from "@/components/sections/ServiceAreas";
import ServiceGrid from "@/components/sections/ServiceGrid";
import TrustBar from "@/components/sections/TrustBar";
import { homeFaqs, homeHero, homeProcess, homeServiceSummaries, valueProps } from "@/data/home";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  `Exterior Remodeling in Maryland | ${site.name}`,
  "Explore exterior remodeling services in Maryland, from doors and windows to roofing and historic restoration. Tell us about your project for a free quote.",
  "/",
);

/** Composes the KrasPro homepage in the order specified in the brief. */
export default function HomePage() {
  return (
    <>
      <FaqJsonLd faqs={homeFaqs} />
      <Hero {...homeHero} />
      <TrustBar />
      <BenefitsGrid title="What You Can Expect" benefits={valueProps} />
      <ServiceGrid
        services={services}
        summaries={homeServiceSummaries}
        title="Exterior Remodeling Services"
        description="Find the right service for the work your home needs."
      />
      <ProcessSteps title="How Your Project Works" steps={homeProcess} />
      <FinancingBand />
      <ServiceAreas />
      <ProjectGallery />
      <ReviewsStrip />
      <FAQAccordion title="Frequently Asked Questions" faqs={homeFaqs} />
      <CTABand
        title="Tell Us About Your Project"
        description="Share what needs attention or what you want to change. We’ll help you understand the next step."
      />
    </>
  );
}
