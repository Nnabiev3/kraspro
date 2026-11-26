import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import Container from "@/components/ui/Container";
import type { Breadcrumb } from "@/lib/schema";

type BreadcrumbsProps = {
  current: { label: string; href?: string };
  parents?: readonly Breadcrumb[];
};

/** Renders the same trail for visitors and structured data. */
export default function Breadcrumbs({ current, parents = [] }: BreadcrumbsProps) {
  const ancestors = [{ label: "Home", href: "/" }, ...parents];

  return (
    <>
      {current.href && (
        <BreadcrumbJsonLd items={[...ancestors, { label: current.label, href: current.href }]} />
      )}
      <nav aria-label="Breadcrumb" className="border-b border-gray-200 bg-white py-3">
        <Container>
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            {ancestors.map(({ label, href }, index) => (
              <li key={href} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                <Link href={href} className="font-semibold text-teal underline underline-offset-4">{label}</Link>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-navy">{current.label}</span>
            </li>
          </ol>
        </Container>
      </nav>
    </>
  );
}
