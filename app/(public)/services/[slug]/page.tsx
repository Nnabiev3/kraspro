import { notFound } from "next/navigation";
import ServicePageLayout from "@/components/service/ServicePageLayout";
import QuoteForm from "@/components/forms/QuoteForm";
import { services } from "@/data/services";
import { serviceDefaults } from "@/lib/cms/pages";
import { editedMetadata, readService } from "@/lib/cms/public";

export const dynamicParams = false;
export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find(item => item.slug === params.slug);
  return service ? editedMetadata(`/services/${service.slug}`, serviceDefaults(service)) : {};
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find(item => item.slug === params.slug);
  if (!service) notFound();
  const content = await readService(service);
  return <ServicePageLayout service={content} quoteForm={<QuoteForm defaultService={service.slug} />} />;
}
