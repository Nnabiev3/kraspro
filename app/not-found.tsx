import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page Not Found | KrasPro LLC",
  description: "This page is unavailable. Return to the KrasPro LLC homepage to explore exterior remodeling services in Maryland.",
};

export default function NotFound() {
  return <section className="bg-cream py-24"><Container><h1 className="font-heading text-4xl font-semibold text-navy">Page Not Found</h1><p className="mb-6 mt-4">We could not find that page. Return home to explore our services.</p><Button href="/">Back to Home</Button></Container></section>;
}
