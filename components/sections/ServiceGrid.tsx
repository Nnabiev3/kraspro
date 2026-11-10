import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Service } from "@/data/services";

type ServiceGridProps = {
  services: readonly Service[];
  title: string;
  description?: string;
  summaries?: Readonly<Record<string, string>>;
};

/** Shows linked service cards with optional short summaries. */
export default function ServiceGrid({ services, title, description, summaries }: ServiceGridProps) {
  return (
    <section id="services" aria-label={title} className="scroll-mt-24 bg-teal-50 py-14 md:py-24">
      <Container>
        <SectionHeading title={title} description={description} />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <li key={service.slug} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:shadow-md motion-safe:hover:-translate-y-1">
              <Link href={`/services/${service.slug}`} className="group block h-full rounded-2xl focus-visible:outline-offset-[-3px]">
                <div className="relative aspect-[16/9] bg-teal-50">
                  <Image
                    src={service.heroImage.src}
                    alt={service.heroImage.isPlaceholder ? "" : service.heroImage.alt}
                    fill
                    sizes="(min-width: 1200px) 370px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold leading-snug text-navy">{service.navLabel}</h3>
                  <p className="mt-3 text-gray-600">{summaries?.[service.slug] ?? service.heroSubhead}</p>
                  <span className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-teal underline-offset-4 group-hover:underline group-focus-visible:underline">
                    Learn more <ArrowRight aria-hidden="true" className="size-4" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
