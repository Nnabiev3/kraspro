import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { isConfirmed } from "@/data/site";
import { readFooter, readSite } from "@/lib/cms/public";
import Container from "@/components/ui/Container";

const footerLink = "inline-flex min-h-9 items-center rounded underline-offset-4 hover:text-white hover:underline";
const actionLink = `${footerLink} gap-1.5 font-semibold text-[var(--brand-sky)]`;

export default async function Footer() {
  const [site, footer] = await Promise.all([readSite(), readFooter()]);
  return (
    <footer className="dark-surface bg-navy pb-8 pt-12 text-white sm:pt-16">
      <Container>
        <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-10 lg:grid-cols-[1.3fr_1fr_0.9fr]">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" aria-label={`${site.name} Home`} className="inline-flex flex-col items-center gap-0.5 rounded-xl bg-white px-6 py-3 text-navy">
              <Image src={site.logo} alt="" width={58} height={49} unoptimized className="h-auto max-h-14 w-auto max-w-40" />
              <span className="font-heading text-lg font-bold leading-tight">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-white/80">
              {footer.description.replaceAll("{location}", () => site.location)}
            </p>
            {footer.showContacts && <address className="mt-3 not-italic">
              <div className="flex flex-wrap items-center gap-x-5">
                {isConfirmed(site.phone) && (
                  <a className={actionLink} href={`tel:${site.phone}`}>Call {site.phone}<ArrowRight aria-hidden="true" className="size-4" /></a>
                )}
                {footer.quote.label && <Link className={actionLink} href={footer.quote.href}>{footer.quote.label}<ArrowRight aria-hidden="true" className="size-4" /></Link>}
              </div>
              {isConfirmed(site.email) && <a className={`${footerLink} break-all text-white/80`} href={`mailto:${site.email}`}>{site.email}</a>}
              {isConfirmed(site.streetAddress) && <p className="text-sm text-white/80">{site.streetAddress}</p>}
              {isConfirmed(site.hours) && <p className="text-sm text-white/80">{site.hours}</p>}
            </address>}
            {site.sameAs.length > 0 && <ul className="mt-3 flex flex-wrap gap-x-4">
              {site.sameAs.map((href, index) => <li key={index}><a href={href} className={footerLink}>{new URL(href).hostname.replace(/^www\./, "")}</a></li>)}
            </ul>}
          </div>
          <nav aria-labelledby="footer-services" className="min-w-0">
            <h2 id="footer-services" className="font-heading text-xl font-semibold">{footer.servicesTitle}</h2>
            <ul className="mt-3 space-y-1 text-white/80">
              {footer.serviceLinks.map(({ href, label }, index) => (
                <li key={index}><Link className={footerLink} href={href}>{label}</Link></li>
              ))}
              {footer.allServices.label && <li><Link className={actionLink} href={footer.allServices.href}>{footer.allServices.label}<ArrowRight aria-hidden="true" className="size-4 shrink-0" /></Link></li>}
            </ul>
          </nav>
          <nav aria-labelledby="footer-company" className="min-w-0">
            <h2 id="footer-company" className="font-heading text-xl font-semibold">{footer.companyTitle}</h2>
            <ul className="mt-3 space-y-1 text-white/80">
              {footer.companyLinks.map(({ href, label }, index) => (
                <li key={index}><Link className={footerLink} href={href}>{label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-9 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-white/20 pt-4 text-sm text-white/70 sm:mt-12">
          <p>
            © {new Date().getFullYear()} {site.name}
            {isConfirmed(site.licenseNumber) && ` · MHIC #${site.licenseNumber}`}
            {isConfirmed(site.epaCertification) && ` · ${site.epaCertification}`}
          </p>
          {footer.privacy.label && <Link className={footerLink} href={footer.privacy.href}>{footer.privacy.label}</Link>}
        </div>
      </Container>
    </footer>
  );
}
