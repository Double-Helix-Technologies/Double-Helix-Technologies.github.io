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
        <div className="mb-8 text-center">
          <h2 className="section-heading mb-5">When systems don&apos;t talk, we listen.</h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            Tell us which workflow, integration or system is costing your team time. We will ask about it and suggest
            a sensible first step, whether that is the assessment, a scoped project, or nothing yet.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl text-center md:pb-10">
            <Button variant="cta" className="h-11 px-6 text-base" asChild>
              <a href={siteConfig.booking.url} target="_blank" rel="noreferrer">
                Book a consultation
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <p className="mt-3 text-sm text-text-secondary">
              Free introductory call, {siteConfig.booking.durationLabel} on {siteConfig.booking.channel}. You choose
              the length when booking.
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              Prefer typing to talking? Email{' '}
              <a href="mailto:aleksandrs.gusevs@doublehelix.dev" className="underline underline-offset-4">
                aleksandrs.gusevs@doublehelix.dev
              </a>
              . For procurement or RFP questions, write to{' '}
              <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-text-secondary">
            <p className="font-semibold text-text-primary">{siteConfig.legalName}</p>
            <p>
              {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.postalCode},
              Latvia
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-primary">
                {siteConfig.email}
              </a>
            </p>
            <p>
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
      </div>
    </section>
  );
}
