"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import ServiceAreasDropdown from "./ServiceAreasDropdown";
/** Full-screen mobile navigation with focus management. */
export default function MobileNav() {
 const [open,setOpen] = useState(false); const trigger = useRef<HTMLButtonElement>(null); const panel = useRef<HTMLDivElement>(null);
 useEffect(() => { if (!open) return; const previous = document.body.style.overflow; document.body.style.overflow = "hidden"; panel.current?.querySelector<HTMLButtonElement>("button")?.focus(); return () => { document.body.style.overflow = previous; }; }, [open]);
 function close() { setOpen(false); trigger.current?.focus(); }
 return <div className="lg:hidden"><button ref={trigger} type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)} className="min-h-12 text-white">Menu</button>{open && <div ref={panel} id="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation" className="fixed inset-0 z-50 overflow-y-auto bg-navy p-6 text-white" onKeyDown={e => { if(e.key === "Escape") close(); if(e.key === "Tab") { const items=panel.current?.querySelectorAll<HTMLElement>('a[href],button:not([disabled])'); if(!items?.length) return; const first=items[0], last=items[items.length-1]; if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus();} else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();} } }}><button type="button" onClick={close} className="min-h-12">Close menu</button><nav aria-label="Mobile navigation" className="mt-6 flex flex-col gap-4">{site.navigation.map(item => item.href === "/service-areas" ? <ServiceAreasDropdown key={item.href} variant="mobile" label={item.label} onNavigate={close}/> : <Link key={item.href} href={item.href} onClick={close}>{item.label}</Link>)}<div className="border-t border-gray-600 pt-4">{services.map(service => <Link className="block py-2" key={service.slug} href={`/services/${service.slug}`} onClick={close}>{service.navLabel}</Link>)}</div><Link href="/contact" onClick={close} className="mt-4 rounded-lg bg-teal px-6 py-3 text-center font-semibold text-white underline-offset-4 hover:underline hover:decoration-teal-50">Get a Free Quote</Link></nav></div>}</div>;
}
