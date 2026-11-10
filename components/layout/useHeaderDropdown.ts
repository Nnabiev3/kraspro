"use client";

import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent, type PointerEvent } from "react";
import { usePathname } from "next/navigation";

/** Shares hover, focus and dismissal behavior between the header disclosures. */
export function useHeaderDropdown(name: string, desktop: boolean) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const focusFirst = useRef(false);
  const pathname = usePathname();

  function cancelClose() {
    if (timer.current) clearTimeout(timer.current);
    timer.current = undefined;
  }
  function close() {
    cancelClose();
    focusFirst.current = false;
    setOpen(false);
  }
  function show() {
    cancelClose();
    if (desktop) window.dispatchEvent(new CustomEvent("kraspro:dropdown-open", { detail: name }));
    setOpen(true);
  }
  function toggle() { if (open) close(); else show(); }

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  useEffect(() => {
    if (open && focusFirst.current) {
      firstLink.current?.focus();
      focusFirst.current = false;
    }
  }, [open]);
  useEffect(() => {
    if (!open) return;
    function outside(event: globalThis.PointerEvent) {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    }
    function otherDropdown(event: Event) {
      if ((event as CustomEvent<string>).detail !== name) setOpen(false);
    }
    document.addEventListener("pointerdown", outside);
    window.addEventListener("kraspro:dropdown-open", otherDropdown);
    return () => {
      document.removeEventListener("pointerdown", outside);
      window.removeEventListener("kraspro:dropdown-open", otherDropdown);
    };
  }, [open, name]);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape" && open) {
      event.preventDefault();
      event.stopPropagation();
      close();
      trigger.current?.focus();
    } else if (event.key === "ArrowDown" && event.target === trigger.current) {
      event.preventDefault();
      if (open) firstLink.current?.focus();
      else { focusFirst.current = true; show(); }
    }
  }
  function onBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) close();
  }
  function onPointerEnter(event: PointerEvent<HTMLDivElement>) {
    if (desktop && event.pointerType === "mouse") show();
  }
  function onPointerLeave(event: PointerEvent<HTMLDivElement>) {
    if (desktop && event.pointerType === "mouse") {
      cancelClose();
      timer.current = setTimeout(close, 150);
    }
  }
  return { open, root, trigger, firstLink, close, toggle, onKeyDown, onBlur, onPointerEnter, onPointerLeave };
}
