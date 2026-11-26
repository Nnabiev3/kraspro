import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SkipLink from "@/components/layout/SkipLink";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import LocalBusinessJsonLd from "@/components/seo/LocalBusinessJsonLd";

export const dynamic = "force-dynamic";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pb-[calc(5rem+env(safe-area-inset-bottom))] lg:pb-0">
      <LocalBusinessJsonLd />
      <SkipLink />
      <Header />
      <main id="main-content" tabIndex={-1} className="scroll-mt-24">{children}</main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
