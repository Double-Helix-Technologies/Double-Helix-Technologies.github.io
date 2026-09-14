import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { siteConfig } from '@/app/lib/seo';

/**
 * Outcome-led hero. One primary action (book the introductory call) and one secondary action
 * (see the work). The headline states the operational benefit; the paragraph explains the
 * software and integration capability behind it. AI is deliberately not in the headline: the
 * published evidence is integration and automation work, and the AI page stays reachable from
 * the services section.
 */
export default function Hero() {
  return (
    <section className="bg-background px-0 pt-28 pb-10 sm:px-6 md:px-8 md:pt-40 lg:pt-44 lg:pb-14">
      <div className="container-tight flex flex-col items-start gap-8 md:gap-10">
        <div className="flex max-w-4xl flex-col gap-5 md:gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">
            Software engineering and system integration for life sciences and healthcare
          </p>
          <h1 className="animate-fade-in bg-gradient-to-tr from-accent-pink via-accent-blue to-accent-teal bg-clip-text pb-2 text-4xl font-semibold leading-[1.08] tracking-[.02em] text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            Less manual administration. More capacity for the work that creates value.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            We connect the systems your teams already run, automate the handoffs between them, and build the
            workflow software that off-the-shelf tools cannot cover, for regulated operations in life sciences and
            healthcare, from genomics service labs to forensic laboratories. AI only where it creates measurable
            operational value.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-3 md:gap-5">
            <Button variant="cta" className="h-11 px-6 text-base" asChild>
              <a href={siteConfig.booking.url} target="_blank" rel="noreferrer">
                Book a consultation
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button variant="secondary" className="h-11 px-6 text-base" asChild>
              <Link href="/work/">See our work</Link>
            </Button>
          </div>
          <p className="text-sm text-text-secondary">
            Free introductory call, {siteConfig.booking.durationLabel} on {siteConfig.booking.channel}. You choose the
            length when booking.
          </p>
        </div>
      </div>
    </section>
  );
}
