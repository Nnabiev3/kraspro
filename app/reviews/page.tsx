import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import Container from "@/components/ui/Container";
import ReviewsList from "@/components/sections/ReviewsList";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Homeowner Reviews | KrasPro LLC", "Read homeowner feedback about KrasPro LLC exterior remodeling services.", "/reviews");
export default function ReviewsPage() {
  return <><BreadcrumbJsonLd items={[{label:"Home",href:"/"},{label:"Reviews",href:"/reviews"}]} /><section className="bg-cream py-16 md:py-24"><Container><h1 className="font-heading text-4xl font-semibold text-navy">Homeowner Reviews</h1><ReviewsList /></Container></section></>;
}
