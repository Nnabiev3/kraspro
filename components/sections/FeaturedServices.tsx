import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Service } from "@/data/services";

type FeaturedService = Pick<Service, "slug" | "navLabel" | "heroImage"> & { description: string };

/** Gives homeowners a direct route to the services highlighted on the homepage. */
export default function FeaturedServices({ services }: { services: readonly FeaturedService[] }) {
  return (
    <section id="services" aria-label="Featured remodeling services" className="scroll-mt-24 bg-surface py-12 md:py-16">
      <Container>
        <SectionHeading title="Explore Our Remodeling Services" />
        <ul className="grid gap-5 md:grid-cols-3">
          {services.map(({ slug, navLabel, description, heroImage }) => (
            <li key={slug} className="min-w-0">
              <Link href={`/services/${slug}`} className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-md">
                {!heroImage.isPlaceholder && (
                  <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl bg-surface">
                    <Image
                      src={heroImage.src}
                      alt={heroImage.alt}
                      fill
                      unoptimized
                      data-tone={heroImage.tone}
                      className="project-photo object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 items-start justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-heading text-xl font-semibold leading-tight text-navy group-hover:text-teal sm:text-2xl">{navLabel}</h3>
                    <p className="mt-2 text-gray-600">{description}</p>
                  </div>
                  <ArrowUpRight aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-teal" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-7 flex justify-center sm:mt-8">
          <Button href="/services">All Services <ArrowUpRight aria-hidden="true" className="size-4" /></Button>
        </div>
      </Container>
    </section>
  );
}
