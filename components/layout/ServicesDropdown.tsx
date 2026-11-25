"use client";

import Link from "next/link";
import { useId } from "react";
import type { Service } from "@/data/services";
import DropdownChevron from "./DropdownChevron";
import { useHeaderDropdown } from "./useHeaderDropdown";

/** Desktop services link and keyboard-operable disclosure. */
export default function ServicesDropdown({ label, services }: { label: string; services: Pick<Service, "slug" | "navLabel">[] }) {
  const menu = useHeaderDropdown("services", true);
  const panelId = useId();
  return (
    <div ref={menu.root} className="relative" onBlur={menu.onBlur} onKeyDown={menu.onKeyDown} onPointerEnter={menu.onPointerEnter} onPointerLeave={menu.onPointerLeave}>
      <div className="flex items-center gap-1">
        <Link href="/services" onClick={menu.close} className="underline-offset-4 hover:underline hover:decoration-teal-light">{label}</Link>
        <button ref={menu.trigger} type="button" aria-label="Toggle services menu" aria-expanded={menu.open} aria-haspopup="true" aria-controls={panelId} onClick={menu.toggle} className="inline-flex min-h-11 min-w-6 items-center justify-center">
          <DropdownChevron open={menu.open} />
        </button>
      </div>
      {menu.open && (
        <div id={panelId} className="absolute left-0 top-full z-50 w-80 pt-4">
          <div className="rounded-b-lg border border-gray-200 bg-white p-6 text-navy shadow-lg motion-safe:animate-area-menu-in">
            <ul>
              {services.map((service, index) => (
                <li key={service.slug}><Link ref={index === 0 ? menu.firstLink : undefined} className="flex min-h-11 items-center rounded underline-offset-4 hover:text-teal hover:underline focus-visible:text-teal focus-visible:underline" href={`/services/${service.slug}`} onClick={menu.close}>{service.navLabel}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
