import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import ServiceGrid from "@/components/sections/ServiceGrid";
import CTABand from "@/components/sections/CTABand";
import Container from "@/components/ui/Container";
import { services } from "@/data/services";
import { homeServiceSummaries } from "@/data/home";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Exterior Remodeling Services | KrasPro LLC", "Explore exterior remodeling services for Maryland homes, from doors and windows to roofing, restoration and garage additions.", "/services");

export default function ServicesPage() {
  return <>
    <BreadcrumbJsonLd items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]} />
    <section className="bg-cream py-16"><Container><h1 className="font-heading text-4xl font-semibold text-navy">Exterior Remodeling Services in Maryland</h1><p className="mt-5 max-w-2xl text-lg text-gray-600">Explore options for repairing, improving and maintaining the outside of your home.</p></Container></section>
    <ServiceGrid services={services} summaries={homeServiceSummaries} title="Our Services" />
    <CTABand title="Not Sure What You Need?" description="Tell us what you have noticed and we can discuss the next step." />
  </>;
}
