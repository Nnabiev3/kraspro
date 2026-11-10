import { breadcrumbSchema, type Breadcrumb } from "@/lib/schema";
import JsonLd from "./JsonLd";

/** Publishes the ordered links leading to the current page. */
export default function BreadcrumbJsonLd({ items }: { items: readonly Breadcrumb[] }) {
  return items.length > 1 ? <JsonLd data={breadcrumbSchema(items)} /> : null;
}
