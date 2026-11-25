import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
const base = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors focus-visible:outline focus-visible:outline-2";
/** Renders a button or navigation link in a consistent style. */
export default function Button({children, href, variant = "primary", ...props}: {children: ReactNode; href?: string; variant?: "primary" | "secondary"} & ButtonHTMLAttributes<HTMLButtonElement>) {
 const style = variant === "primary" ? "button-primary" : "button-secondary border border-navy text-navy hover:bg-teal-50";
 return href ? <Link href={href} className={`${base} ${style}`}>{children}</Link> : <button {...props} className={`${base} ${style} ${props.className || ""}`}>{children}</button>;
}
