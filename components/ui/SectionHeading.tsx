/** Renders a reusable section heading and optional introduction. */
export default function SectionHeading({title, description}: {title: string; description?: string}) { return <div className="mb-10"><h2 className="font-heading text-3xl font-semibold leading-tight text-navy md:text-4xl">{title}</h2>{description && <p className="mt-4 max-w-2xl text-lg text-gray-600">{description}</p>}</div>; }
