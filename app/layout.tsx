import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SkipLink from "@/components/layout/SkipLink";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import LocalBusinessJsonLd from "@/components/seo/LocalBusinessJsonLd";
import { site } from "@/data/site";
import { siteBaseUrl } from "@/lib/seo";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], display: "swap", variable: "--font-playfair" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], display: "swap", variable: "--font-source-sans" });

export const metadata: Metadata = {
  metadataBase: siteBaseUrl(),
  title: site.name,
  description: "Exterior remodeling for Maryland homes.",
};

/** Provides the document shell and brand fonts for all pages. */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="pb-[calc(5rem+env(safe-area-inset-bottom))] lg:pb-0">
        <LocalBusinessJsonLd />
        {/* Add analytics here after the owner confirms the provider and consent setup. */}
        <SkipLink />
        <Header />
        <main id="main-content" tabIndex={-1} className="scroll-mt-24">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
