import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import ServiceAreas from "@/components/sections/ServiceAreas";
import CTABand from "@/components/sections/CTABand";
import Container from "@/components/ui/Container";
import { valueProps } from "@/data/home";
import { site, isConfirmed } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("About KrasPro LLC | Maryland Exterior Remodeling", "Learn about KrasPro LLC, its approach to exterior work and the Maryland areas it serves.", "/about");
export default function AboutPage() {
  return <>
    <BreadcrumbJsonLd items={[{label:"Home",href:"/"},{label:"About",href:"/about"}]} />
    <section className="bg-cream py-16 md:py-24"><Container><h1 className="font-heading text-4xl font-semibold text-navy">About KrasPro LLC</h1><p className="mt-5 max-w-2xl text-lg text-gray-600">KrasPro LLC is an exterior remodeling contractor based in {site.location}.</p><p className="mt-4 max-w-2xl text-gray-600">{isConfirmed(site.story) ? site.story : "Our company story is coming soon."}</p></Container></section>
    <BenefitsGrid title="What We Stand For" benefits={valueProps} />
    <section className="bg-teal-50 py-16"><Container><h2 className="font-heading text-3xl font-semibold text-navy">Credentials</h2><ul className="mt-4 space-y-2">{site.trust.licensed && <li>Licensed in Maryland{isConfirmed(site.licenseNumber) && ` · MHIC #${site.licenseNumber}`}</li>}{site.trust.insured && <li>Insured</li>}{isConfirmed(site.epaCertification) && <li>{site.epaCertification}</li>}</ul></Container></section>
    <ServiceAreas /><CTABand title="Tell Us About Your Home" description="Contact us to discuss your project and request a free quote." />
  </>;
}
