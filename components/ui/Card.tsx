import type { ReactNode } from "react";
/** Wraps content in a subtle elevated card. */
export default function Card({children}: {children: ReactNode}) { return <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transform-none">{children}</div>; }
