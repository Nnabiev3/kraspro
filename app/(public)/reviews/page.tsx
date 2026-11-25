import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Container from "@/components/ui/Container";
import ReviewsList from "@/components/sections/ReviewsList";
import { reviewsDefaults } from "@/lib/cms/pages";
import { editedMetadata, readGeneral, readPage, readServices } from "@/lib/cms/public";

export const generateMetadata = () => editedMetadata("/reviews", reviewsDefaults);

export default async function ReviewsPage() {
  const [content, general, services] = await Promise.all([readPage("/reviews", reviewsDefaults), readGeneral(), readServices()]);
  return <>
    <Breadcrumbs current={{ label: "Reviews", href: "/reviews" }} />
    <section className="bg-white py-16 md:py-24">
      <Container>
        <h1 className="font-heading text-4xl font-semibold text-navy">{content.title}</h1>
        <ReviewsList reviews={content.reviews} emptyText={content.emptyText} reviewUrl={general.reviewUrl} services={services.map(({ slug, navLabel }) => ({ slug, navLabel }))} />
      </Container>
    </section>
  </>;
}
