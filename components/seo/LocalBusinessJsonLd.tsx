import { localBusinessSchema } from "@/lib/schema";
import { readSite } from "@/lib/cms/public";
import JsonLd from "./JsonLd";

/** Publishes the business details configured for KrasPro. */
export default async function LocalBusinessJsonLd() {
  const site = await readSite();
  return <JsonLd data={localBusinessSchema(site, site.logo)} />;
}
