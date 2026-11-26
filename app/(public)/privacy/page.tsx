import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Container from "@/components/ui/Container";
import { privacyDefaults } from "@/lib/cms/pages";
import { editedMetadata, readPage } from "@/lib/cms/public";

export const generateMetadata = () => editedMetadata("/privacy", privacyDefaults);

export default async function PrivacyPage() {
  const content = await readPage("/privacy", privacyDefaults);
  return <>
    <Breadcrumbs current={{ label: "Privacy", href: "/privacy" }} />
    <section className="py-16"><Container>
      <h1 className="font-heading text-4xl font-semibold text-navy">{content.title}</h1>
      <div className="mt-5 space-y-4">{content.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
    </Container></section>
  </>;
}
