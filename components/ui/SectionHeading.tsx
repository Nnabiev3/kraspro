/** Renders a reusable section heading and optional introduction. */
export default function SectionHeading({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-8 md:mb-10">
      <h2 className="text-pretty font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-navy md:text-5xl">{title}</h2>
      {description && <p className="mt-4 max-w-2xl text-lg text-gray-600">{description}</p>}
    </div>
  );
}
