import Link from "next/link";
import { site, isConfirmed } from "@/data/site";
/** Keeps contact actions visible on small screens. */
export default function StickyMobileCTA() { return <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 bg-navy p-3 lg:hidden">{isConfirmed(site.phone) && <a className="flex-1 rounded-lg border border-white p-3 text-center text-white" href={`tel:${site.phone}`}>Call</a>}<Link className="flex-1 rounded-lg bg-teal p-3 text-center font-semibold text-white underline-offset-4 hover:underline hover:decoration-teal-50" href="/contact">Free Quote</Link></div>; }
