import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import QuoteForm from "@/components/forms/QuoteForm";
import Container from "@/components/ui/Container";
import { isConfirmed } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";
import { contactDefaults } from "@/lib/cms/pages";
import { editedMetadata, readPage, readSite } from "@/lib/cms/public";

export const generateMetadata = () => editedMetadata("/contact", contactDefaults);

export default async function ContactPage() {
  const [content, site] = await Promise.all([readPage("/contact", contactDefaults), readSite()]);
  return <>
    <Breadcrumbs current={{ label: "Contact", href: "/contact" }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", name: content.metaTitle, url: absoluteUrl("/contact") }} />
    <section className="bg-surface py-16 md:py-24">
      <Container>
        <h1 className="font-heading text-4xl font-semibold text-navy">{content.title}</h1>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6"><QuoteForm /></div>
          <div>
            <h2 className="font-heading text-2xl font-semibold text-navy">{content.contactsTitle}</h2>
            <address className="mt-4 space-y-2 not-italic">
              {isConfirmed(site.phone) && <p><a className="underline" href={`tel:${site.phone}`}>{site.phone}</a></p>}
              {isConfirmed(site.email) && <p><a className="underline" href={`mailto:${site.email}`}>{site.email}</a></p>}
              <p>{site.streetAddress || site.location}</p>
              {site.hours && <p>{site.hours}</p>}
            </address>
            <h2 className="mt-8 font-heading text-2xl font-semibold text-navy">{content.nextTitle}</h2>
            <p className="mt-4">{content.nextDescription}{site.responseTime && ` Our expected response time is ${site.responseTime}.`}</p>
            <p className="mt-4"><Link href={content.coverageLink.href} className="font-semibold text-teal underline underline-offset-4">{content.coverageLink.label}</Link>.</p>
          </div>
        </div>
      </Container>
    </section>
  </>;
}
