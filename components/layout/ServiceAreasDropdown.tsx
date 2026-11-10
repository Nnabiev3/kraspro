"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useId } from "react";
import { getServiceAreaLinks } from "@/data/site";
import DropdownChevron from "./DropdownChevron";
import { useHeaderDropdown } from "./useHeaderDropdown";

type Props = {
  variant: "desktop" | "mobile";
  label?: string;
  onNavigate?: () => void;
  className?: string;
};

/** Shows service areas as a desktop mega-menu or mobile accordion. */
export default function ServiceAreasDropdown({ variant, label = "Service areas", onNavigate, className = "" }: Props) {
  const desktop = variant === "desktop";
  const menu = useHeaderDropdown("service-areas", desktop);
  const panelId = useId();
  const areas = getServiceAreaLinks();

  function navigate() {
    menu.close();
    onNavigate?.();
  }

  if (!areas.length) {
    return <Link className={className} href="/service-areas" onClick={onNavigate}>{label}</Link>;
  }

  const linkClass = desktop
    ? "inline-flex min-h-11 items-center rounded text-navy underline-offset-4 hover:text-teal hover:underline focus-visible:text-teal focus-visible:underline"
    : "flex min-h-11 items-center rounded text-white underline-offset-4 hover:underline focus-visible:underline";

  return (
    <div ref={menu.root} className={className} onKeyDown={menu.onKeyDown} onBlur={menu.onBlur} onPointerEnter={menu.onPointerEnter} onPointerLeave={menu.onPointerLeave}>
      {desktop ? (
        <div className="flex items-center gap-1">
          <Link href="/service-areas" onClick={navigate} className="underline-offset-4 hover:underline hover:decoration-teal-light">{label}</Link>
          <button ref={menu.trigger} type="button" aria-label="Toggle service areas menu" aria-expanded={menu.open} aria-haspopup="true" aria-controls={panelId} onClick={menu.toggle} className="inline-flex min-h-11 min-w-6 items-center justify-center">
            <DropdownChevron open={menu.open} />
          </button>
        </div>
      ) : (
        <button ref={menu.trigger} type="button" aria-expanded={menu.open} aria-haspopup="true" aria-controls={panelId} onClick={menu.toggle} className="flex min-h-11 w-full items-center justify-between text-left text-white">
          {label}
          <DropdownChevron open={menu.open} />
        </button>
      )}
      {menu.open && (
        <div id={panelId} className={desktop ? "absolute inset-x-0 top-full z-50 pt-4" : "mt-1"}>
          <div className={desktop ? "rounded-b-lg border border-gray-200 bg-white p-6 shadow-lg motion-safe:animate-area-menu-in" : "border-l border-gray-600 pl-4"}>
            {/* These are navigation links rather than an ARIA menu of application commands. */}
            <ul className={desktop ? "grid grid-cols-2 gap-x-8 gap-y-3 lg:grid-cols-4" : "grid grid-cols-1"}>
              {areas.map((area, index) => (
                <li key={area.name}>
                  <Link ref={index === 0 ? menu.firstLink : undefined} href={area.href} className={linkClass} onClick={navigate}>{area.name}</Link>
                </li>
              ))}
            </ul>
            <div className={desktop ? "mt-5 border-t border-gray-200 pt-4" : "mt-2 border-t border-gray-600 pt-2"}>
              <Link href="/service-areas" onClick={navigate} className={`group inline-flex min-h-11 items-center gap-2 rounded font-semibold underline-offset-4 hover:underline ${desktop ? "text-teal" : "text-white"}`}>
                See every area we cover
                <ArrowRight aria-hidden="true" className="size-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
