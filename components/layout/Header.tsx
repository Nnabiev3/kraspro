"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site, isConfirmed } from "@/data/site";
import Container from "@/components/ui/Container";
import MobileNav from "./MobileNav";
import ServicesDropdown from "./ServicesDropdown";
/** Sticky brand header and primary navigation. */
export default function Header() {
 const [scrolled,setScrolled] = useState(false);
 useEffect(() => { const update=()=>setScrolled(window.scrollY > 20); update(); window.addEventListener("scroll",update,{passive:true}); return ()=>window.removeEventListener("scroll",update); },[]);
 return <header className={`sticky top-0 z-40 bg-navy text-white transition-all ${scrolled ? "py-2 shadow-md" : "py-4"}`}><Container className="flex items-center justify-between gap-6"><Link href="/" aria-label="KrasPro LLC Home" className="flex items-center gap-2"><Image src="/images/brand/logo-icon-transparent.svg" alt="" unoptimized width={40} height={40}/><span className="font-heading text-2xl tracking-tight text-white">KrasPro</span></Link><nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex">{site.navigation.map(item => item.href === "/services" ? <ServicesDropdown key={item.href}/> : <Link className="underline-offset-4 hover:underline hover:decoration-teal-light" href={item.href} key={item.href}>{item.label}</Link>)}</nav><div className="hidden items-center gap-4 lg:flex">{isConfirmed(site.phone) && <a href={`tel:${site.phone}`}>{site.phone}</a>}<Link className="rounded-lg bg-teal px-5 py-3 font-semibold text-white underline-offset-4 hover:underline hover:decoration-teal-50" href="/contact">Get a Free Quote</Link></div><MobileNav/></Container></header>;
}
