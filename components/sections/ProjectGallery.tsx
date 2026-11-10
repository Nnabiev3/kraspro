import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

/** Shows project images and identifies each entry awaiting a real photograph. */
export default function ProjectGallery() {
  if (!projects.length) return null;
  return (
    <section aria-label="Project gallery" className="bg-cream py-14 md:py-24">
      <Container>
        <SectionHeading
          title="Recent Projects"
          description={projects.every(project => project.isPlaceholder) ? "Project photos are coming soon." : undefined}
        />
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {projects.map(project => (
            <li key={project.title}>
              <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="relative aspect-[4/3] bg-teal-50">
                  <Image
                    src={project.src}
                    alt={project.isPlaceholder ? "" : project.alt}
                    fill
                    sizes="(min-width: 1200px) 370px, (min-width: 768px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-3 text-sm font-semibold text-navy sm:p-4">
                  {project.isPlaceholder ? "Photo coming soon" : project.title}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
