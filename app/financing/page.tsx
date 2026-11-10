import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTABand from "@/components/sections/CTABand";
import Container from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Financing Information | KrasPro LLC", "Learn what to ask about financing for an exterior remodeling project in Maryland.", "/financing");
const faqs = [
  {question:"Is financing available for my project?",answer:"Contact us to discuss availability for your project. Financing availability is subject to credit approval."},
  {question:"What should I review before applying?",answer:"Review the full written terms, payment obligations and disclosures before making a decision."},
  {question:"Do I have to use financing?",answer:"You can discuss payment options and choose the approach that suits your circumstances."}
];
const steps = [
  {title:"Discuss your project",description:"Tell us what work you are considering."},
  {title:"Ask about options",description:"Review availability and any application requirements."},
  {title:"Review the details",description:"Read the terms and disclosures before deciding."}
];
export default function FinancingPage() {
  return <>
    <BreadcrumbJsonLd items={[{label:"Home",href:"/"},{label:"Financing",href:"/financing"}]} /><FaqJsonLd faqs={faqs} />
    <section className="bg-cream py-16 md:py-24"><Container><h1 className="font-heading text-4xl font-semibold text-navy">Financing Your Exterior Project</h1><p className="mt-5 max-w-2xl text-lg text-gray-600">Financing may help spread the cost of a larger project over time. Ask about availability and review all terms before deciding.</p><p className="mt-4 text-sm">Financing availability is subject to credit approval.</p></Container></section>
    <ProcessSteps title="What to Expect" steps={steps} /><FAQAccordion title="Financing Questions" faqs={faqs} /><CTABand title="Talk About Your Project" description="Contact us to discuss your project and financing availability." />
  </>;
}
