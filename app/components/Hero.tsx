'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Sparkles } from '@/app/components/ui/sparkles';
import { useTheme } from '@/app/components/ThemeProvider';
import LogoMarquee from './LogoMarquee';
import { siteConfig } from '@/app/lib/seo';

/**
 * First screen: the headline, one sentence, two actions, and the customer and partner marquee
 * pinned to the bottom. Behind it a soft mesh of the brand colours, and sparkles that rise from a
 * glowing line where the marquee begins and fade out on their way up (ui-layouts sparkles on
 * tsparticles). Decoration only: none of it carries
 * content, all of it is hidden from assistive technology, and the motion stops for visitors who
 * prefer reduced motion. The outcomes named are the ones the published cases evidence (order
 * setup time down 75%, delivery from 1.5 days to 3 hours, onboarding from months to weeks, IT
 * running costs down 37%); the case carousel below carries the figures.
 */
export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { theme } = useTheme();
  const sparkleColor = theme === 'dark' ? '#ffffff' : '#6E5AFB';

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-background">
      {/* Mesh gradient: three blurred brand-colour fields drifting slowly. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute -left-[12%] top-[8%] h-[52vw] w-[52vw] rounded-full bg-accent-pink opacity-25 blur-3xl motion-safe:animate-drift dark:opacity-20" />
        <div className="absolute -right-[10%] top-[22%] h-[46vw] w-[46vw] rounded-full bg-accent-blue opacity-20 blur-3xl motion-safe:animate-drift motion-safe:[animation-delay:-8s] dark:opacity-15" />
        <div className="absolute -bottom-[18%] left-[24%] h-[44vw] w-[44vw] rounded-full bg-accent-teal opacity-15 blur-3xl motion-safe:animate-drift motion-safe:[animation-delay:-15s] dark:opacity-10" />
        <div className="absolute -bottom-[20%] -right-[8%] h-[38vw] w-[38vw] rounded-full bg-accent-lilac opacity-15 blur-3xl motion-safe:animate-drift motion-safe:[animation-delay:-4s] dark:opacity-10" />
      </div>

      <div className="relative flex flex-1 items-center px-0 pb-14 pt-28 sm:px-6 md:px-8 md:pt-32">
        {/* Sparkles rise from the line where the marquee begins and fade out on the way up. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[62%]">
          {!reduceMotion && (
            <div className="absolute inset-0 [mask-image:linear-gradient(to_top,black_0%,black_20%,transparent_100%)]">
              {/* Keyed by theme so the canvas is rebuilt with the new colour instead of reusing the old one. */}
              <Sparkles
                key={theme}
                className="h-full w-full"
                color={sparkleColor}
                density={220}
                size={1.6}
                speed={1.1}
                minSpeed={0.25}
                opacity={0.9}
                opacitySpeed={2}
                direction="top"
              />
            </div>
          )}
          <div className="absolute inset-x-[10%] bottom-0 h-px bg-gradient-to-r from-transparent via-accent-lilac to-transparent" />
          <div className="absolute inset-x-[25%] bottom-0 h-[3px] bg-gradient-to-r from-transparent via-accent-blue to-transparent blur-sm" />
        </div>

        <div className="container-tight flex flex-col items-start gap-8 md:gap-10">
          <h1 className="animate-fade-in max-w-4xl bg-gradient-to-tr from-accent-pink via-accent-blue to-accent-teal bg-clip-text pb-2 text-4xl font-semibold leading-[1.08] tracking-[.02em] text-transparent sm:text-5xl lg:text-6xl">
            Higher throughput. Lower running costs.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
            Custom software and system integrations for life sciences and healthcare operations in Europe and North
            America.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <Button variant="cta" size="cta" asChild>
              <a href={siteConfig.booking.url} target="_blank" rel="noreferrer">
                Book a free consultation
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button variant="secondary" size="cta" asChild>
              <Link href="/work/">See our work</Link>
            </Button>
          </div>
        </div>
      </div>

      <LogoMarquee />
    </section>
  );
}
