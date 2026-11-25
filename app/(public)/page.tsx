import FaqJsonLd from "@/components/seo/FaqJsonLd";
import CTABand from "@/components/sections/CTABand";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FeaturedServices from "@/components/sections/FeaturedServices";
import Hero from "@/components/sections/Hero";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ProjectGallery from "@/components/sections/ProjectGallery";
import ReviewsStrip from "@/components/sections/ReviewsStrip";
import ServiceAreas from "@/components/sections/ServiceAreas";
import TrustBar from "@/components/sections/TrustBar";
import { homeDefaults, reviewsDefaults } from "@/lib/cms/pages";
import { editedMetadata, preservePhotoDetails, readPage, readServices } from "@/lib/cms/public";
import { deckCover } from "@/data/projects";

export const generateMetadata = () => editedMetadata("/", homeDefaults);

export default async function HomePage() {
  const [content, reviews, catalog] = await Promise.all([
    readPage("/", homeDefaults), readPage("/reviews", reviewsDefaults), readServices(),
  ]);
  const featured = content.featured.flatMap(item => {
    const service = catalog.find(entry => entry.slug === item.slug);
    return service ? [{ ...service, description: item.description }] : [];
  });
  return <>
    <FaqJsonLd faqs={content.faqs} />
    <Hero {...content.hero} image={{ ...deckCover, ...content.hero.image }} home workHref={content.gallery.length ? "#project-photos" : undefined} />
    <FeaturedServices services={featured} />
    <ProjectGallery id="project-photos" title={content.galleryTitle} photos={preservePhotoDetails(content.gallery)} />
    <ProcessSteps title={content.processTitle} steps={content.process} />
    <TrustBar reviews={reviews.reviews} />
    <ServiceAreas />
    <ReviewsStrip reviews={reviews.reviews} />
    <FAQAccordion title={content.faqTitle} faqs={content.faqs} />
    <CTABand {...content.cta} />
  </>;
}
