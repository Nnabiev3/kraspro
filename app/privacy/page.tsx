import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import Container from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Privacy Policy | KrasPro LLC", "Read the KrasPro LLC privacy policy.", "/privacy");
export default function PrivacyPage() {
  return <><BreadcrumbJsonLd items={[{label:"Home",href:"/"},{label:"Privacy",href:"/privacy"}]} /><section className="py-16"><Container><h1 className="font-heading text-4xl font-semibold text-navy">Privacy Policy</h1><p className="mt-5">This policy is being prepared and requires owner review before launch.</p><p className="mt-4">When you contact us, you provide information about yourself and your project. Contact us with questions about how your information is handled.</p></Container></section></>;
}
