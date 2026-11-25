import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Service } from "@/data/services";

type ServiceGridProps = {
  services: readonly Service[];
  title: string;
};

/** Shows the service directory. */
export default function ServiceGrid({ services, title }: ServiceGridProps) {
  const featuredImage = services.find(service => !service.heroImage.isPlaceholder)?.heroImage;
  return (
    <section id="services" aria-label={title} className="scroll-mt-24 bg-surface py-14 md:py-24">
      <Container className="grid items-start gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading title={title} />
          {featuredImage && <div className="relative hidden aspect-[5/4] overflow-hidden rounded-2xl bg-surface lg:block">
            <Image
              src={featuredImage.src}
              alt={featuredImage.alt}
              fill
              unoptimized
              data-tone={featuredImage.tone}
              className="project-photo object-cover"
            />
          </div>}
        </div>
        <ul className="-mt-7 divide-y divide-navy/15 border-y border-navy/15 lg:mt-0">
          {services.map(service => (
            <li key={service.slug}>
              <Link href={`/services/${service.slug}`} className="group flex items-center justify-between gap-4 px-2 py-4 transition-colors hover:bg-teal-50 focus-visible:outline-offset-[-3px] sm:px-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold leading-snug text-navy sm:text-2xl">{service.navLabel}</h3>
                  <p className="mt-1 text-gray-600">{service.heroSubhead}</p>
                </div>
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-teal/30 text-teal transition-colors group-hover:bg-teal group-hover:text-white group-focus-visible:bg-teal group-focus-visible:text-white">
                  <ArrowUpRight aria-hidden="true" className="size-5 motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
