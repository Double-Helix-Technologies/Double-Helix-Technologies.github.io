import { ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { siteConfig } from '@/app/lib/seo';

/**
 * Invitation to talk: heading, one sentence, the booking action and one line of practicalities.
 * The call description matches the booking page (see `siteConfig.booking`). Company details live
 * on the About page and in the legal notice, not here.
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
                Book a free consultation
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-text-secondary">
            Free introductory call, {siteConfig.booking.durationLabel} on {siteConfig.booking.channel}. Prefer email?{' '}
            <a href="mailto:aleksandrs.gusevs@doublehelix.dev" className="underline underline-offset-4">
              aleksandrs.gusevs@doublehelix.dev
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
