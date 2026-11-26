import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTABand from "@/components/sections/CTABand";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { aboutDefaults } from "@/lib/cms/pages";
import { editedMetadata, readPage, readSite } from "@/lib/cms/public";
import { isConfirmed } from "@/data/site";
export const generateMetadata = () => editedMetadata("/about", aboutDefaults);

export default async function AboutPage() {
  const [content, site] = await Promise.all([readPage("/about", aboutDefaults), readSite()]);
  const credentials = [
    site.trust.licensed && `Licensed in Maryland${isConfirmed(site.licenseNumber) ? ` · MHIC #${site.licenseNumber}` : ""}`,
    site.trust.insured && "Insured",
    isConfirmed(site.epaCertification) && site.epaCertification,
  ].filter((credential): credential is string => Boolean(credential));

  return (
    <>
      <Breadcrumbs current={{ label: "About", href: "/about" }} />
      <section className="bg-white py-10 md:py-16">
        <Container className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          <div>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-navy md:text-6xl">{content.title}</h1>
            <p className="mt-4 max-w-xl text-lg text-gray-600">
              {content.introduction.replaceAll("{location}", () => site.location)}
            </p>
            <p className="mt-3 max-w-xl text-lg text-gray-600">
              {content.approach}
            </p>
            {isConfirmed(content.story) && <p className="mt-3 max-w-xl text-lg text-gray-600">{content.story}</p>}
            {credentials.length > 0 && (
              <ul aria-label="Credentials" className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-sm font-semibold text-teal">
                {credentials.map(credential => <li key={credential}>{credential}</li>)}
              </ul>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact">Get a Free Quote</Button>
              <Button href="/services" variant="secondary">Explore Services</Button>
            </div>
          </div>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                priority
                unoptimized
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-sm text-gray-600">{content.caption}</figcaption>
          </figure>
        </Container>
      </section>
      <section id="our-process" className="scroll-mt-24 bg-surface py-10 md:py-14">
        <Container className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-navy">{content.processTitle}</h2>
            <ol className="mt-3 divide-y divide-gray-200">
              {content.process.map(({ title, description }) => (
                <li key={title} className="py-3">
                  <h3 className="font-semibold text-navy">{title}</h3>
                  <p className="mt-1 text-gray-600">{description}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="font-heading text-3xl font-semibold text-navy">{content.quoteTitle}</h2>
            <p className="mt-3 text-gray-600">
              {content.quoteDescription}
              {site.trust.itemizedQuotes && " We break the quote into line items so you can see what each part costs."}
            </p>
            {content.commitments.length > 0 && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-600">
                {content.commitments.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
            )}
            <p className="mt-4 text-gray-600">
              For an example of what goes into the scope, see how we review{" "}
              <Link href="/services/deck-building" className="font-semibold text-teal underline underline-offset-4">deck repair and replacement</Link>.
            </p>
          </div>
        </Container>
      </section>
      <section className="bg-white py-10">
        <Container className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-navy">{content.areasTitle}</h2>
            <p className="mt-2 max-w-xl text-gray-600">
              {content.areasDescription.replaceAll("{company}", () => site.name)}
            </p>
          </div>
          <Button href="/service-areas" variant="secondary">See Service Areas</Button>
        </Container>
      </section>
      <CTABand {...content.cta} />
    </>
  );
}
