import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function PublicNotFound() {
  return <>
    <Breadcrumbs current={{ label: "Page Not Found" }} />
    <section className="bg-white py-24"><Container>
      <h1 className="font-heading text-4xl font-semibold text-navy">Page Not Found</h1>
      <p className="mb-6 mt-4">We could not find that page. Return home to explore our services.</p>
      <Button href="/">Back to Home</Button>
    </Container></section>
  </>;
}
