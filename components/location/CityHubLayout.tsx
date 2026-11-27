import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import QuoteForm from "@/components/forms/QuoteForm";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { hubBusiness } from "@/data/business";
import type { SourcedText } from "@/data/cities/types";
import { cityHubs, hubDraftReasons, isHubIndexable } from "@/data/geo";
import { locationPath } from "@/data/locations";
import { cityHubCta } from "@/lib/cms/pages";
import { readPage, readServices } from "@/lib/cms/public";

function Source({ url, label = "Source" }: { url: string; label?: string }) {
  return <a href={url} className="text-sm font-semibold text-teal underline underline-offset-4">{label}</a>;
}

function LocalNote({ title, note }: { title: string; note: SourcedText | null }) {
  if (!note) return null;
  return <div>
    <h3 className="text-xl font-semibold text-navy">{title}</h3>
    <p className="my-2 leading-relaxed text-gray-600">{note.text}</p>
    <Source url={note.sourceUrl} />
  </div>;
}

export default async function CityHubLayout({ city }: { city: (typeof cityHubs)[number] }) {
  const path = locationPath(city);
  const [services, { cta }] = await Promise.all([readServices(), readPage(path, cityHubCta(city.name))]);
  const missing = hubDraftReasons(city);
  const draft = missing.length > 0;
  const issues = city.localIssues.filter(issue => draft || !issue.needsTradeReview);
  const faqs = city.faq
    .filter(question => draft || !question.needsTradeReview)
    .map(({ q, a }) => ({ question: q, answer: a }));
  const nearby = city.nearbyCities.flatMap(slug => {
    const match = cityHubs.find(candidate => candidate.slug === slug);
    return match && isHubIndexable(match) ? [match] : [];
  });

  return <>
    <Breadcrumbs parents={[{ label: "Service Areas", href: "/service-areas" }]} current={{ label: city.name, href: path }} />
    {draft && <aside className="border-b border-amber-300 bg-amber-50 py-3 text-amber-950">
      <Container><strong>DRAFT - missing:</strong> {missing.join(", ")}.</Container>
    </aside>}
    <section className="bg-surface py-14 md:py-20">
      <Container className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h1 className="font-heading text-4xl font-semibold leading-tight text-navy md:text-5xl">
            Home Remodeling in {city.name}, MD
          </h1>
          <p className="mb-2 mt-5 max-w-xl text-lg leading-relaxed text-gray-600">{city.lead.text}</p>
          <Source url={city.lead.sourceUrl} />
          <div className="mt-6 flex flex-wrap items-center gap-2" aria-label="Service area and credentials">
            <Badge>{city.county.text}</Badge>
            <Source url={city.county.sourceUrl} label="County source" />
            {hubBusiness.mhicLicense && <Badge>MHIC #{hubBusiness.mhicLicense}</Badge>}
            {hubBusiness.insured && <Badge>Insured</Badge>}
            {hubBusiness.googleProfileUrl && hubBusiness.googleRating !== null && (
              <Source
                url={hubBusiness.googleProfileUrl}
                label={`Google: ${hubBusiness.googleRating}/5${hubBusiness.googleReviewCount === null ? "" : ` (${hubBusiness.googleReviewCount} reviews)`}`}
              />
            )}
          </div>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-5 font-heading text-2xl font-semibold text-navy">Request a quote</h2>
          <QuoteForm defaultCity={city.name} sourcePage={path} />
        </div>
      </Container>
    </section>

    <section className="py-14 md:py-20">
      <Container>
        <SectionHeading title={`Why local matters in ${city.name}`} />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-navy">Housing profile</h3>
            <p className="my-2 leading-relaxed text-gray-600">{city.housingProfile.text}</p>
            <div className="flex flex-wrap gap-3">{city.housingProfile.sourceUrls.map((url, index) => (
              <Source key={url} url={url} label={city.housingProfile.sourceUrls.length === 1 ? "Housing data source" : `Housing data source ${index + 1}`} />
            ))}</div>
          </div>
          <LocalNote title="Building permit authority" note={city.countyPermitAuthority} />
          <LocalNote title="Historic districts" note={city.historicNote} />
          <LocalNote title="Confirm your project address" note={city.addressAmbiguityNote} />
        </div>
      </Container>
    </section>

    <section className="bg-surface py-14 md:py-20">
      <Container>
        <SectionHeading title={`Where we work in ${city.name}`} />
        <ul className="grid gap-4 md:grid-cols-3">
          {city.neighborhoods.map(({ name, oneLineNote, sourceUrl }) => <li key={name} className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-navy">{name}</h3>
            <p className="my-2 leading-relaxed text-gray-600">{oneLineNote}</p>
            <Source url={sourceUrl} />
          </li>)}
        </ul>
        <dl className="mt-6 space-y-3">
          {([["Verified mailing ZIP codes", city.zips], ["Local roads", city.roads]] as const).filter(([, items]) => items.length).map(([label, items]) => (
            <div key={label} className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <dt className="font-semibold text-navy">{label}</dt>
              {items.map(({ text, sourceUrl }) => <dd key={text}><Source url={sourceUrl} label={text} /></dd>)}
            </div>
          ))}
        </dl>
      </Container>
    </section>

    {!!issues.length && <section className="py-14 md:py-20">
      <Container>
        <SectionHeading title={`What to check on ${city.name} homes`} />
        <ul className="grid gap-6 md:grid-cols-3">
          {issues.map(issue => <li key={issue.title} className="border-t-2 border-teal pt-4">
            <h3 className="text-xl font-semibold text-navy">{issue.title}</h3>
            <p className="mt-2 leading-relaxed text-gray-600">{issue.text}</p>
          </li>)}
        </ul>
      </Container>
    </section>}

    <section className="bg-surface py-14 md:py-20">
      <Container>
        <SectionHeading title={`Services in ${city.name}`} />
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => <li key={service.slug} className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-navy">
              <Link href={`/services/${service.slug}`} className="underline-offset-4 hover:text-teal hover:underline">{service.navLabel}</Link>
            </h3>
            <p className="mt-2 leading-relaxed text-gray-600">{service.heroSubhead}</p>
          </li>)}
        </ul>
      </Container>
    </section>

    {!!faqs.length && <>
      {!draft && <FaqJsonLd faqs={faqs} />}
      <FAQAccordion title={`${city.name} remodeling questions`} faqs={faqs} />
    </>}
    {nearby.length >= 3 && <section className="bg-surface py-12">
      <Container>
        <SectionHeading title="Nearby towns" />
        <ul className="flex flex-wrap gap-x-6 gap-y-3">{nearby.slice(0, 6).map(candidate => (
          <li key={candidate.slug}><Link className="font-semibold text-teal underline underline-offset-4" href={locationPath(candidate)}>{candidate.name}</Link></li>
        ))}</ul>
      </Container>
    </section>}
    <section className="dark-surface bg-[var(--brand-deep)] py-14 text-white md:py-20">
      <Container className="grid items-start gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl font-semibold">{cta.title}</h2>
          <p className="mt-4 max-w-md text-lg">{cta.description}</p>
          {hubBusiness.phone && <a className="mt-4 inline-block underline underline-offset-4" href={`tel:${hubBusiness.phone}`}>{hubBusiness.phone}</a>}
        </div>
        <div className="rounded-2xl bg-white p-6 text-navy"><QuoteForm defaultCity={city.name} sourcePage={path} /></div>
      </Container>
    </section>
  </>;
}
