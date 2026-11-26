import type { Metadata } from "next";
import localFont from "next/font/local";
import { site } from "@/data/site";
import { siteBaseUrl } from "@/lib/seo";
import "./globals.css";

const sourceSans = localFont({
  src: "./fonts/source-sans-3-latin.woff2",
  weight: "200 900",
  display: "swap",
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  metadataBase: siteBaseUrl(),
  title: site.name,
  description: "Home remodeling and restoration in Maryland.",
};

/** Provides the document shell and brand fonts for all pages. */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sourceSans.variable}>
      <body>{children}</body>
    </html>
  );
}
