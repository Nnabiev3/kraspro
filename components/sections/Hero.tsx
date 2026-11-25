import Image from "next/image";
import { ArrowDown, ArrowUpRight, Check, MapPin, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { readSite } from "@/lib/cms/public";
import { isConfirmed } from "@/data/site";
import type { Service } from "@/data/services";

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: Service["heroImage"];
  home?: boolean;
  workHref?: string;
  quoteHref?: string;
};

const trustKeys = ["licensed", "insured", "itemizedQuotes", "noCommissionSales"] as const;

/** Introduces the page and its quote action, with a phone link when configured. */
export default async function Hero({ eyebrow, title, description, image, home = false, workHref, quoteHref = "/contact" }: HeroProps) {
  if (home) {
    return (
      <section aria-labelledby="hero-title" className="home-hero hero-surface dark-surface flex items-center pb-[calc(5rem+env(safe-area-inset-bottom))] pt-8 sm:pt-12 lg:py-14">
        <Container className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          <div className="max-w-xl py-2 sm:py-5">
            <p className="mb-5 flex items-center gap-2 font-medium text-[var(--brand-sky)]">
              <MapPin aria-hidden="true" className="size-4 shrink-0" />
              {eyebrow}
            </p>
            <h1 id="hero-title" className="home-hero-title font-heading font-semibold">{title}</h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/85 sm:mt-6 sm:text-xl">{description}</p>
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
              <Button href={quoteHref}>Get a Free Quote <ArrowUpRight aria-hidden="true" className="size-4" /></Button>
              <Button href={workHref ?? "#services"} variant="secondary">
                {workHref ? "See Our Work" : "Explore Services"} <ArrowDown aria-hidden="true" className="size-4" />
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-navy ring-1 ring-white/15 sm:aspect-[16/10] lg:aspect-[6/5]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              unoptimized
              className="home-hero-image object-cover"
            />
          </div>
        </Container>
      </section>
    );
  }

  const site = await readSite();
  return (
    <section aria-labelledby="hero-title" className="hero-surface dark-surface py-12 md:py-16 lg:py-20">
      <Container className={`grid items-center gap-10 lg:gap-16 ${image.isPlaceholder ? "" : "lg:grid-cols-2"}`}>
        <div className={image.isPlaceholder ? "max-w-3xl" : undefined}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--brand-sky)]">{eyebrow}</p>
          <h1 id="hero-title" className="text-balance font-heading text-4xl font-semibold leading-tight sm:text-5xl xl:text-6xl">{title}</h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/85">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={quoteHref}>Get a Free Quote</Button>
            {workHref && <Button href={workHref} variant="secondary">See Our Work</Button>}
            {isConfirmed(site.phone) && (
              <Button href={`tel:${site.phone}`} variant="secondary">
                <Phone aria-hidden="true" className="size-4" /> Call Us
              </Button>
            )}
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-white/85" aria-label="What you can expect">
            {trustKeys.filter(key => site.trust[key]).map(key => (
              <li key={key} className="flex items-center gap-1.5">
                <Check aria-hidden="true" className="size-4 shrink-0 text-[var(--brand-sky)]" />
                {site.trustText[key]}
              </li>
            ))}
          </ul>
        </div>
        {!image.isPlaceholder && <figure className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-navy ring-1 ring-white/15">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            unoptimized
            data-tone={image.tone}
            className="project-photo object-cover"
          />
        </figure>}
      </Container>
    </section>
  );
}
