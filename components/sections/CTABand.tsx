import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { readGeneral } from "@/lib/cms/public";
import { isConfirmed } from "@/data/site";

/** Prompts the visitor to get a quote and can also host an inline form. */
export default async function CTABand({ title, description, children }: { title: string; description: string; children?: ReactNode }) {
  const { phone, email } = await readGeneral();
  return (
    <section aria-labelledby="quote-title" className="dark-surface bg-[var(--brand-deep)] py-14 text-white md:py-24">
      <Container className="grid items-start gap-8 md:grid-cols-2">
        <div>
          <h2 id="quote-title" className="font-heading text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-lg text-lg">{description}</p>
          {(isConfirmed(phone) || isConfirmed(email)) && (
            <address className="mt-5 flex flex-wrap gap-x-6 gap-y-2 not-italic">
              {isConfirmed(phone) && <a className="underline underline-offset-4" href={`tel:${phone}`}>{phone}</a>}
              {isConfirmed(email) && <a className="break-all underline underline-offset-4" href={`mailto:${email}`}>{email}</a>}
            </address>
          )}
        </div>
        {children ? (
          <div className="rounded-2xl bg-white p-6 text-navy">{children}</div>
        ) : (
          <div className="md:justify-self-end">
            <Button href="/contact">Get a Free Quote</Button>
          </div>
        )}
      </Container>
    </section>
  );
}
