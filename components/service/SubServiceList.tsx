import type { Service } from "@/data/services";

/** Describes the individual options offered within the current service. */
export default function SubServiceList({ items }: { items?: Service["subServices"] }) {
  if (!items?.length) return null;
  return (
    <div className="mt-10">
      <h3 className="mb-4 font-heading text-2xl font-semibold text-navy">What We Can Help With</h3>
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map(({ title, description }) => (
          <li key={title} className="rounded-xl border border-gray-200 bg-teal-50 p-5">
            <h4 className="font-semibold text-navy">{title}</h4>
            {description.replace(/\.$/, "") !== title && <p className="mt-2 text-gray-600">{description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
