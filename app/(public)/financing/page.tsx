import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTABand from "@/components/sections/CTABand";
import Container from "@/components/ui/Container";
import { financingDefaults } from "@/lib/cms/pages";
import { editedMetadata, readPage } from "@/lib/cms/public";

export const generateMetadata = () => editedMetadata("/financing", financingDefaults);

export default async function FinancingPage() {
  const content = await readPage("/financing", financingDefaults);
  return <>
    <Breadcrumbs current={{ label: "Financing", href: "/financing" }} />
    <FaqJsonLd faqs={content.faqs} />
    <section className="bg-white py-16 md:py-24">
      <Container>
        <h1 className="font-heading text-4xl font-semibold text-navy">{content.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-gray-600">{content.introduction}</p>
        <p className="mt-4 text-sm">{content.disclosure}</p>
      </Container>
    </section>
    <ProcessSteps title={content.processTitle} steps={content.process} />
    <FAQAccordion title={content.faqTitle} faqs={content.faqs} />
    <CTABand {...content.cta} />
  </>;
}
