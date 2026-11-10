"use client";
import Link from "next/link";
import { useState } from "react";
import { services } from "@/data/services";
/** Keyboard-operable service navigation. */
export default function ServicesDropdown() {
 const [open,setOpen] = useState(false);
 return <div className="relative" onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); event.currentTarget.querySelector("button")?.focus(); } }}><button type="button" aria-expanded={open} aria-controls="services-menu" onClick={() => setOpen(!open)} className="underline-offset-4 hover:underline hover:decoration-teal-light">Services <span aria-hidden="true">▾</span></button>{open && <div id="services-menu" className="absolute left-0 top-full z-50 w-80 rounded-lg bg-white p-2 text-navy shadow-lg"><Link className="block rounded p-3 hover:bg-teal-50" href="/services" onClick={() => setOpen(false)}>All services</Link>{services.map(service => <Link className="block rounded p-3 hover:bg-teal-50" href={`/services/${service.slug}`} key={service.slug} onClick={() => setOpen(false)}>{service.navLabel}</Link>)}</div>}</div>;
}
