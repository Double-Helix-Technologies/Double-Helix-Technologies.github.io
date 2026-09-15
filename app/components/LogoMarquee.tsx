'use client';

import Image from 'next/image';
import { useReducedMotion } from 'framer-motion';
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from './ui/marquee';
import Wordmark from './Wordmark';
import { customers } from '@/app/data/work';
import { partners, type Partner } from '@/app/data/partners';

/**
 * Narrow band under the hero: customer and partner logos scrolling right to left, each linking to
 * the organisation's site. Pauses while the pointer is on it and stands still for visitors who
 * prefer reduced motion. Logos are shown in grey and colour on hover; in the dark theme they are
 * rendered as light silhouettes so mixed brand colours do not fight the background. An entry with
 * a `brandColor` follows the same rule: grey at rest, the partner's own colour on hover, in the
 * dark theme too, so its mark and its lettering change together.
 *
 * The scrolling band renders only in the browser (react-fast-marquee measures its content), so the
 * names and links are also in a visually hidden list that is in the server-rendered HTML. That list
 * is what screen readers, keyboard users and crawlers get; the animated band is aria-hidden and
 * its links are taken out of the tab order, so nobody has to tab through moving logos and their
 * clones. The list is not shown to sighted visitors.
 *
 * Customer logos: the owner confirmed on 14 September 2026 that Eurofins Genomics, Lifespin, Onyx
 * Biotech, Mainos and Krafthub have each approved publication of their logo. Add a customer here
 * only with the same confirmation; the list is `customers` in app/data/work.ts.
 */
/** Temporarily hidden from the marquee at the owner's request (14 September 2026); they stay in `customers`. */
const HIDDEN_FROM_MARQUEE = new Set(['Lifespin', 'Onyx Biotech']);

const logos: Partner[] = [
  ...customers.filter((customer) => !HIDDEN_FROM_MARQUEE.has(customer.name)).map((customer) => ({ ...customer, kind: 'partner' as const })),
  ...partners
];

export default function LogoMarquee() {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-label="Customers and partners" className="border-t border-divider py-6 md:py-8">
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary">
        Customers and partners
      </p>
      {/* Visible only while one of its links has keyboard focus, so the focus indicator is never hidden. */}
      <ul className="sr-only focus-within:not-sr-only focus-within:mb-4 focus-within:flex focus-within:flex-wrap focus-within:items-center focus-within:justify-center focus-within:gap-x-6 focus-within:gap-y-2 focus-within:px-6 focus-within:text-sm focus-within:text-text-secondary">
        {logos.map((item) => (
          <li key={item.name}>
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline focus-visible:underline">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <Marquee aria-hidden="true">
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent speed={40} play={!reduceMotion} gradient={false}>
          {logos.map((item) => (
            <MarqueeItem key={item.name} className="mx-6 sm:mx-8">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                title={item.name}
                className="group flex h-12 min-w-32 items-center justify-center gap-2 sm:min-w-40"
              >
                {item.logo && (
                  <Image
                    src={item.logo}
                    alt={item.wordmark ? '' : item.name}
                    width={item.logoWidth ?? 160}
                    height={item.logoHeight ?? 48}
                    className={`h-auto w-auto object-contain opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:brightness-0 dark:invert ${
                      item.brandColor
                        ? 'dark:group-hover:brightness-100 dark:group-hover:invert-0'
                        : 'dark:group-hover:brightness-0 dark:group-hover:invert'
                    } ${item.wordmark ? 'max-h-7 max-w-7' : 'max-h-full max-w-32 sm:max-w-40'}`}
                  />
                )}
                {item.wordmark && (
                  <Wordmark
                    segments={item.wordmark}
                    tone="muted"
                    accentColor={item.brandColor}
                    tagline={item.tagline}
                    className={`opacity-80 group-hover:opacity-100 ${item.tagline ? 'text-lg' : 'text-xl'}`}
                  />
                )}
              </a>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </section>
  );
}
