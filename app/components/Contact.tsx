import { ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { siteConfig } from '@/app/lib/seo';
import { SectionBackdrop } from './ui/section-backdrop';

/**
 * Invitation to talk, sized to carry a screen of its own: heading, one sentence, the booking action
 * and one line of practicalities. The call description matches the booking page (see
 * `siteConfig.booking`). Company details live on the About page and in the legal notice, not here.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      className="section relative isolate overflow-hidden bg-background lg:flex lg:min-h-[90svh] lg:items-center"
      aria-labelledby="contact-heading"
    >
      <SectionBackdrop variant="mesh" />
      <div className="container-tight w-full">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="contact-heading" className="section-heading mb-6 text-balance leading-[1.08] lg:text-7xl">
            When systems don&apos;t talk, we listen.
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-text-secondary md:text-2xl">
            Tell us which workflow, integration or system is costing your team time. We will suggest a sensible first
            step.
          </p>
          <div className="mt-10 flex justify-center">
            <Button variant="cta" size="hero" asChild>
              <a href={siteConfig.booking.url} target="_blank" rel="noreferrer">
                Book a free consultation
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
          <p className="mt-6 text-base text-text-secondary">
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
