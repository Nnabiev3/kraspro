import { ChevronDown } from "lucide-react";

/** Shows the shared open and closed state of a header disclosure. */
export default function DropdownChevron({ open }: { open: boolean }) {
  return <ChevronDown aria-hidden="true" className={`size-4 motion-safe:transition-transform ${open ? "rotate-180 text-teal" : ""}`} />;
}
