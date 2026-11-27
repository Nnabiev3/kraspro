import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { readGeneral, readHeader, readServices } from "@/lib/cms/public";
import Container from "@/components/ui/Container";
import MobileNav from "./MobileNav";
import ServicesDropdown from "./ServicesDropdown";
import ServiceAreasDropdown from "./ServiceAreasDropdown";
import { publicCityHubHref } from "@/data/geo";

export default async function Header() {
  const [general, header, catalog] = await Promise.all([readGeneral(), readHeader(), readServices()]);
  const services = catalog.map(({ slug, navLabel }) => ({ slug, navLabel }));
  const navigation = header.navigation.map(item => ({ ...item, href: publicCityHubHref(item.href) }));
  const quote = { ...header.quote, href: publicCityHubHref(header.quote.href) };
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white text-navy">
      <Container className="relative flex min-h-[var(--site-header-content-height)] items-center justify-between gap-5">
        <Link href={publicCityHubHref(header.brandHref)} aria-label={`${general.name} Home`} className="flex items-center gap-1.5">
          <Image src={general.logo} alt="" unoptimized width={44} height={37} className="h-auto max-h-12 w-auto max-w-32" />
          {header.brand && <span className="font-heading text-[1.75rem] font-bold leading-none tracking-tight">{header.brand}</span>}
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-4 font-semibold lg:flex xl:gap-6">
          {navigation.filter(item => header.showHomeOnDesktop || item.href !== "/").map((item, index) => {
            if (item.href === "/services") return <ServicesDropdown key={index} label={item.label} services={services} />;
            if (item.href === "/service-areas") return <ServiceAreasDropdown key={index} variant="desktop" label={item.label} />;
            return <Link className="underline-offset-4 hover:text-teal hover:underline" href={item.href} key={index}>{item.label}</Link>;
          })}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          {header.showPhone && general.phone && <a href={`tel:${general.phone}`} className="whitespace-nowrap font-semibold hover:underline">{general.phone}</a>}
          {quote.label && <Link href={quote.href} className="button-primary inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full px-5 font-semibold transition-colors">
            {quote.label} <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>}
        </div>
        <MobileNav navigation={navigation} quote={quote} services={services} />
      </Container>
    </header>
  );
}
