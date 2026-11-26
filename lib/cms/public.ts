import "server-only";
import { cache } from "react";
import { site } from "@/data/site";
import { services, type Service } from "@/data/services";
import { servicePhotos, projects, type Project } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";
import { serviceDefaults } from "./pages";
import { footerDefaults, generalDefaults, headerDefaults } from "./settings";
import { documentContent, loadContent, readDocuments } from "./storage";

export const readGeneral = cache(() => loadContent("general", generalDefaults));
export const readHeader = cache(() => loadContent("header", headerDefaults));
export const readFooter = cache(() => loadContent("footer", footerDefaults));

export async function readSite() {
  return { ...site, ...await readGeneral() };
}

export function readPage<T extends object>(path: string, defaults: T) {
  return loadContent("page:" + path, defaults);
}

export async function editedMetadata(path: string, defaults: { metaTitle: string; metaDescription: string }) {
  const [content, general] = await Promise.all([readPage(path, defaults), readGeneral()]);
  return pageMetadata(content.metaTitle, content.metaDescription, path, general.name);
}

export function preservePhotoDetails(photos: Project[], originals: readonly Project[] = projects) {
  return photos.map(photo => ({ ...originals.find(original => original.src === photo.src), ...photo }));
}

export type EditedService = ReturnType<typeof serviceDefaults> & {
  slug: string;
  heroImage: Service["heroImage"];
  gallery: Project[];
};

function mergeService(service: Service, content: ReturnType<typeof serviceDefaults>): EditedService {
  return {
    ...content,
    slug: service.slug,
    heroImage: {
      ...(service.heroImage.src === content.heroImage.src ? service.heroImage : {}),
      ...content.heroImage,
    },
    gallery: preservePhotoDetails(content.gallery, servicePhotos[service.slug]),
  };
}

export const readServices = cache(async () => {
  const ids = services.map(service => `page:/services/${service.slug}`);
  const rows = await readDocuments(ids).catch(error => {
    console.error("CMS catalog read failed", error);
    return null;
  });
  return services.map((service, index) => mergeService(service, documentContent(rows?.get(ids[index]), serviceDefaults(service))));
});

export async function readService(service: Service) {
  const catalog = await readServices();
  return catalog.find(item => item.slug === service.slug) ?? mergeService(service, serviceDefaults(service));
}
