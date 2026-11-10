import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import QuoteForm from "@/components/forms/QuoteForm";
import Container from "@/components/ui/Container";
import { site, isConfirmed } from "@/data/site";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Contact KrasPro LLC | Request a Free Quote", "Contact KrasPro LLC about your exterior remodeling project in Maryland and request a free quote.", "/contact");
export default function ContactPage() {
  return <>
    <BreadcrumbJsonLd items={[{label:"Home",href:"/"},{label:"Contact",href:"/contact"}]} />
    <JsonLd data={{"@context":"https://schema.org","@type":"ContactPage",name:"Contact KrasPro LLC",url:absoluteUrl("/contact")}} />
    <section className="bg-cream py-16 md:py-24"><Container><h1 className="font-heading text-4xl font-semibold text-navy">Request a Free Quote</h1><div className="mt-8 grid gap-10 lg:grid-cols-2"><div className="rounded-2xl border border-gray-200 bg-white p-6"><QuoteForm /></div><div><h2 className="font-heading text-2xl font-semibold text-navy">Contact Us</h2><address className="mt-4 space-y-2 not-italic">{isConfirmed(site.phone) && <p><a className="underline" href={`tel:${site.phone}`}>{site.phone}</a></p>}{isConfirmed(site.email) && <p><a className="underline" href={`mailto:${site.email}`}>{site.email}</a></p>}<p>{isConfirmed(site.streetAddress) ? site.streetAddress : site.location}</p>{isConfirmed(site.hours) && <p>{site.hours}</p>}</address><h2 className="mt-8 font-heading text-2xl font-semibold text-navy">What Happens Next</h2><p className="mt-4">We review your project details and contact you to discuss the next step.{isConfirmed(site.responseTime) && ` Our expected response time is ${site.responseTime}.`}</p><p className="mt-4">Serving {site.serviceAreas.join(", ")}. Contact us to confirm your location.</p></div></div></Container></section>
  </>;
}
