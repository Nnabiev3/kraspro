"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { NavItem } from "@/data/site";
import type { Service } from "@/data/services";
import ServiceAreasDropdown from "./ServiceAreasDropdown";
/** Full-screen mobile navigation with focus management. */
export default function MobileNav({ navigation, quote, services }: { navigation: NavItem[]; quote: NavItem; services: Pick<Service, "slug" | "navLabel">[] }) {
 const [open,setOpen] = useState(false); const trigger = useRef<HTMLButtonElement>(null); const panel = useRef<HTMLDivElement>(null);
 useEffect(() => { if (!open) return; const previous = document.body.style.overflow; document.body.style.overflow = "hidden"; panel.current?.querySelector<HTMLButtonElement>("button")?.focus(); return () => { document.body.style.overflow = previous; }; }, [open]);
 function close() { setOpen(false); trigger.current?.focus(); }
 return (
   <div className="lg:hidden">
     <button ref={trigger} type="button" aria-expanded={open} aria-controls={open ? "mobile-menu" : undefined} onClick={() => setOpen(true)} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-navy/20 px-4 font-semibold text-navy">
       Menu <Menu aria-hidden="true" className="size-4" />
     </button>
     {open && (
       <div ref={panel} id="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation" className="dark-surface fixed inset-0 z-50 overflow-y-auto bg-[var(--brand-deep)] p-6 text-white" onKeyDown={event => {
         if (event.key === "Escape" && !event.defaultPrevented) close();
         if (event.key !== "Tab") return;
         const items = panel.current?.querySelectorAll<HTMLElement>("a[href],button:not([disabled])");
         if (!items?.length) return;
         const first = items[0];
         const last = items[items.length - 1];
         if (event.shiftKey && document.activeElement === first) {
           event.preventDefault();
           last.focus();
         } else if (!event.shiftKey && document.activeElement === last) {
           event.preventDefault();
           first.focus();
         }
       }}>
         <button type="button" onClick={close} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/30 px-4 font-semibold">
           Close menu <X aria-hidden="true" className="size-4" />
         </button>
         <nav aria-label="Mobile navigation" className="mt-6 flex flex-col">
           {navigation.map((item, index) => item.href === "/service-areas" ? (
             <ServiceAreasDropdown key={index} variant="mobile" label={item.label} onNavigate={close} className="text-xl font-semibold" />
           ) : (
             <Link key={index} href={item.href} onClick={close} className="flex min-h-11 items-center text-xl font-semibold">{item.label}</Link>
           ))}
           {navigation.some(item => item.href === "/services") && <div className="mt-4 border-t border-white/20 pt-3">
             {services.map(service => (
               <Link className="flex min-h-11 items-center" key={service.slug} href={`/services/${service.slug}`} onClick={close}>{service.navLabel}</Link>
             ))}
           </div>}
           {quote.label && <Link href={quote.href} onClick={close} className="button-primary mt-4 rounded-full px-6 py-3 text-center font-semibold transition-colors"> {quote.label}</Link>}
         </nav>
       </div>
     )}
   </div>
 );
}
