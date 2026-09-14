import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { siteConfig } from '@/app/lib/seo';

/**
 * The hero is deliberately minimal: one headline with the operational benefit, one sentence that
 * says what we do and for whom, and two actions. Everything else waits for the sections below.
 */
export default function Hero() {
  return (
    <section className="bg-background px-0 pt-28 pb-14 sm:px-6 md:px-8 md:pt-40 lg:pt-44 lg:pb-20">
      <div className="container-tight flex flex-col items-start gap-8 md:gap-10">
        <h1 className="animate-fade-in max-w-4xl bg-gradient-to-tr from-accent-pink via-accent-blue to-accent-teal bg-clip-text pb-2 text-4xl font-semibold leading-[1.08] tracking-[.02em] text-transparent sm:text-5xl lg:text-6xl">
          Less manual work. More capacity for what matters.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
          Custom software and system integration for life sciences and healthcare operations.
        </p>
        <div className="flex flex-wrap gap-3 md:gap-4">
          <Button variant="cta" size="cta" asChild>
            <a href={siteConfig.booking.url} target="_blank" rel="noreferrer">
              Book a consultation
              <ArrowRight aria-hidden="true" />
            </a>
          </Button>
          <Button variant="secondary" size="cta" asChild>
            <Link href="/work/">See our work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
