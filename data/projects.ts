export type Project = { title: string; src: string; alt: string; isPlaceholder: boolean };
export const projects: Project[] = Array.from({ length: 6 }, (_, index) => ({ title: `Project photo ${index + 1}`, src: "/images/projects/placeholder.svg", alt: "Project photo placeholder", isPlaceholder: true }));
