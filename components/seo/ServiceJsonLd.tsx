import type { Service } from "@/data/services";
import { serviceSchema } from "@/lib/schema";
import JsonLd from "./JsonLd";

/** Publishes the service described by the current page. */
export default function ServiceJsonLd({ service }: { service: Service }) {
  return <JsonLd data={serviceSchema(service)} />;
}
