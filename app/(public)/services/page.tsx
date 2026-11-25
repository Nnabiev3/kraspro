import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceGrid from "@/components/sections/ServiceGrid";
import CTABand from "@/components/sections/CTABand";
import Container from "@/components/ui/Container";
import { servicesDefaults } from "@/lib/cms/pages";
import { editedMetadata, readPage, readServices } from "@/lib/cms/public";

export const generateMetadata = () => editedMetadata("/services", servicesDefaults);

export default async function ServicesPage() {
  const [content, services] = await Promise.all([readPage("/services", servicesDefaults), readServices()]);
  return <>
    <Breadcrumbs current={{ label: "Services", href: "/services" }} />
    <section className="bg-white py-16"><Container>
      <h1 className="font-heading text-4xl font-semibold text-navy">{content.title}</h1>
      <p className="mt-5 max-w-2xl text-lg text-gray-600">{content.introduction}</p>
    </Container></section>
    <ServiceGrid services={services} title={content.listTitle} />
    <CTABand {...content.cta} />
  </>;
}
