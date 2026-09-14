import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { siteConfig } from '@/app/lib/seo';

/**
 * Invitation to discuss a relevant problem. The call description matches the booking page
 * (see `siteConfig.booking`). Company details repeat only confirmed facts.
 */
export default function Contact() {
  return (
    <section id="contact" className="section bg-gradient-to-b from-background to-background-alt">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading mb-5">When systems don&apos;t talk, we listen.</h2>
          <p className="text-lg text-text-secondary">
            Tell us which workflow, integration or system is costing your team time. We will suggest a sensible first
            step.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="cta" size="cta" asChild>
              <a href={siteConfig.booking.url} target="_blank" rel="noreferrer">
                Book a consultation
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-text-secondary">
            Free introductory call, {siteConfig.booking.durationLabel} on {siteConfig.booking.channel}.
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            Prefer email?{' '}
            <a href="mailto:aleksandrs.gusevs@doublehelix.dev" className="underline underline-offset-4">
              aleksandrs.gusevs@doublehelix.dev
            </a>
            . Procurement or RFP questions:{' '}
            <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl border-t border-divider pt-8 text-center text-sm text-text-secondary">
          <p className="font-semibold text-text-primary">{siteConfig.legalName}</p>
          <p>
            {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.postalCode},
            Latvia
          </p>
          <p>
            <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-primary">
              {siteConfig.email}
            </a>
            {', '}
            <a href="tel:+37129636428" className="transition-colors hover:text-primary">
              +371 29636428
            </a>
          </p>
          <p>Registration number 50203351951, VAT LV50203351951</p>
          <p className="mt-2 text-xs">
            <Link href="/notice/" className="underline transition-colors hover:text-primary">
              Full legal notice
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
