import type { Metadata } from "next";
import PublicLayout from "./(public)/layout";
import PublicNotFound from "./(public)/not-found";

export const metadata: Metadata = {
  title: "Page Not Found | KrasPro LLC",
  description: "This page is unavailable. Return to the KrasPro LLC homepage to explore home remodeling services in Maryland.",
};

export default function NotFound() {
  return <PublicLayout><PublicNotFound /></PublicLayout>;
}
