"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import { useId, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/data/projects";

type ProjectGalleryProps = {
  photos?: readonly Project[];
  title?: string;
  id?: string;
};

/** Shows published projects and opens a larger view of each photo. */
export default function ProjectGallery({ photos = projects, title = "Exterior Projects", id }: ProjectGalleryProps) {
  const publishedProjects = photos.filter(project => !project.isPlaceholder);
  const dialog = useRef<HTMLDialogElement>(null);
  const dialogTitleId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = publishedProjects[activeIndex];

  if (!activeProject) return null;
  const columns = publishedProjects.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  function movePhoto(direction: number) {
    setActiveIndex(index => (index + direction + publishedProjects.length) % publishedProjects.length);
  }

  return (
    <section id={id} aria-label={title} className="scroll-mt-24 bg-white py-14 md:py-24">
      <Container>
        <SectionHeading title={title} />
        <ul className={`grid gap-5 sm:grid-cols-2 ${publishedProjects.length === 2 ? "max-w-3xl" : columns}`}>
          {publishedProjects.map((project, index) => (
            <li key={project.title}>
              <button
                type="button"
                aria-haspopup="dialog"
                aria-label={`View photo: ${project.title}`}
                className="group block w-full rounded-2xl text-left"
                onClick={() => {
                  setActiveIndex(index);
                  dialog.current?.showModal();
                }}
              >
                <span className={`relative block overflow-hidden rounded-2xl bg-white ${project.portrait ? "aspect-[4/5]" : "aspect-[5/4]"}`}>
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    unoptimized
                    data-tone={project.tone}
                    style={{ objectPosition: project.position }}
                    className="project-photo object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 right-3 grid size-10 place-items-center rounded-full bg-white text-navy transition-colors group-hover:bg-navy group-hover:text-white group-focus-visible:bg-navy group-focus-visible:text-white">
                    <Maximize2 aria-hidden="true" className="size-4" />
                  </span>
                </span>
                <span className="mt-3 block text-xl font-semibold text-navy">{project.title}</span>
              </button>
            </li>
          ))}
        </ul>
        <dialog
          ref={dialog}
          aria-labelledby={dialogTitleId}
          className="dark-surface max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-4xl overflow-auto rounded-2xl bg-navy p-4 text-white backdrop:bg-navy/80 sm:p-6"
          onKeyDown={event => {
            if (event.key === "ArrowLeft") movePhoto(-1);
            if (event.key === "ArrowRight") movePhoto(1);
          }}
        >
          <div className="mb-3 flex items-center justify-between gap-4">
            <h3 id={dialogTitleId} aria-live="polite" className="text-lg font-semibold">{activeProject.title}</h3>
            <button
              type="button"
              aria-label="Close photo"
              className="grid size-11 shrink-0 place-items-center rounded-full border border-white/50 hover:bg-white/15"
              onClick={() => dialog.current?.close()}
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>
          <div className="relative h-[min(58dvh,38rem)] w-full">
            <Image src={activeProject.src} alt={activeProject.alt} fill unoptimized data-tone={activeProject.tone} className="project-photo object-contain" />
          </div>
          {publishedProjects.length > 1 && (
            <div className="mt-4 flex justify-center gap-3">
              <button type="button" aria-label="Previous photo" onClick={() => movePhoto(-1)} className="grid size-11 place-items-center rounded-full border border-white/50 hover:bg-white/15">
                <ArrowLeft aria-hidden="true" className="size-5" />
              </button>
              <button type="button" aria-label="Next photo" onClick={() => movePhoto(1)} className="grid size-11 place-items-center rounded-full border border-white/50 hover:bg-white/15">
                <ArrowRight aria-hidden="true" className="size-5" />
              </button>
            </div>
          )}
        </dialog>
      </Container>
    </section>
  );
}
