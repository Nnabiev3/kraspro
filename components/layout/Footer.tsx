import Image from "next/image";
import Link from "next/link";
import { site, isConfirmed } from "@/data/site";
import { services } from "@/data/services";
import Container from "@/components/ui/Container";

const footerLink = "inline-flex min-h-6 items-center rounded underline-offset-4 hover:underline";

/** Displays company navigation and confirmed contact information. */
export default function Footer() {
  const companyLinks = [
    ...site.navigation.filter(item => !["/", "/services"].includes(item.href)),
    { label: "Privacy", href: "/privacy" },
  ];

  return (
    <footer className="bg-navy py-16 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/images/brand/logo-full-transparent.svg" alt="KrasPro LLC" width={180} height={60} unoptimized />
            <p className="mt-4">Exterior remodeling for Maryland homes.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl">Services</h2>
            <ul className="mt-4 space-y-2">
              {services.map(service => (
                <li key={service.slug}><Link className={footerLink} href={`/services/${service.slug}`}>{service.navLabel}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-xl">Company</h2>
            <ul className="mt-4 space-y-2">
              {companyLinks.map(({ href, label }) => (
                <li key={href}><Link className={footerLink} href={href}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-xl">Contact</h2>
            <address className="mt-4 space-y-2 not-italic">
              {isConfirmed(site.phone) && <p><a className={footerLink} href={`tel:${site.phone}`}>{site.phone}</a></p>}
              {isConfirmed(site.email) && <p><a className={footerLink} href={`mailto:${site.email}`}>{site.email}</a></p>}
              <p>{isConfirmed(site.streetAddress) ? site.streetAddress : site.location}</p>
              {isConfirmed(site.hours) && <p>{site.hours}</p>}
            </address>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-600 pt-6 text-sm">
          {isConfirmed(site.licenseNumber) && <p>MHIC #{site.licenseNumber}</p>}
          {isConfirmed(site.epaCertification) && <p>{site.epaCertification}</p>}
          <p className="mt-3">Service areas: {site.serviceAreas.join(", ")}</p>
          <p className="mt-3">© {new Date().getFullYear()} {site.name}</p>
        </div>
      </Container>
    </footer>
  );
}
