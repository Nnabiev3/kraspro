import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { readGeneral, readHeader } from "@/lib/cms/public";

export default async function StickyMobileCTA() {
  const [general, header] = await Promise.all([readGeneral(), readHeader()]);
  const phone = header.showPhone && general.phone;
  if (!phone && !header.mobileQuote) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-gray-200 bg-white px-4 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] lg:hidden">
      {phone && <a className="flex min-h-11 flex-1 items-center justify-center rounded-full border border-navy text-navy" href={`tel:${phone}`}>Call</a>}
      {header.mobileQuote && <Link className="button-primary flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full font-semibold transition-colors" href={header.quote.href}>
        {header.mobileQuote} <ArrowUpRight aria-hidden="true" className="size-4" />
      </Link>}
    </div>
  );
}
