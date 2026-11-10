import type { ReactNode } from "react";
/** Displays a short label. */
export default function Badge({children}: {children: ReactNode}) { return <span className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-navy">{children}</span>; }
