import { notFound } from "next/navigation";
import ServicePageLayout from "@/components/service/ServicePageLayout";
import QuoteForm from "@/components/forms/QuoteForm";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find(item => item.slug === params.slug);
  if (!service) return {};
  return pageMetadata(service.metaTitle, service.metaDescription, `/services/${service.slug}`);
}
export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find(item => item.slug === params.slug);
  if (!service) notFound();
  return <ServicePageLayout service={service} quoteForm={<QuoteForm defaultService={service.slug} />} />;
}
