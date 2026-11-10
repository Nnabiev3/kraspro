import Image from "next/image";
import { Check, Phone } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { isConfirmed, site } from "@/data/site";
import type { Service } from "@/data/services";

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: Service["heroImage"];
};

const trustKeys = ["licensed", "insured", "itemizedQuotes", "noCommissionSales"] as const;

/** Introduces the page and its quote action, with a phone link when configured. */
export default function Hero({ eyebrow, title, description, image }: HeroProps) {
  return (
    <section aria-labelledby="hero-title" className="bg-cream py-12 md:py-20 lg:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal">{eyebrow}</p>
          <h1 id="hero-title" className="font-heading text-4xl font-semibold leading-tight text-navy sm:text-5xl xl:text-6xl">{title}</h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Get a Free Quote</Button>
            {isConfirmed(site.phone) && (
              <Button href={`tel:${site.phone}`} variant="secondary">
                <Phone aria-hidden="true" className="mr-2 size-4" /> Call Us
              </Button>
            )}
          </div>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="What you can expect">
            {trustKeys.filter(key => site.trust[key]).map(key => (
              <li key={key}>
                <Badge><Check aria-hidden="true" className="mr-1.5 size-4" />{site.trustText[key]}</Badge>
              </li>
            ))}
          </ul>
        </div>
        <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 bg-teal-50 shadow-sm">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1200px) 545px, (min-width: 1024px) 48vw, 100vw"
            className="object-cover"
          />
          {image.isPlaceholder && (
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1 text-sm text-navy">
              Illustration
            </figcaption>
          )}
        </figure>
      </Container>
    </section>
  );
}
