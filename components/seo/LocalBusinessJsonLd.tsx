import { localBusinessSchema } from "@/lib/schema";
import JsonLd from "./JsonLd";

/** Publishes the business details configured for KrasPro. */
export default function LocalBusinessJsonLd() {
  return <JsonLd data={localBusinessSchema()} />;
}
