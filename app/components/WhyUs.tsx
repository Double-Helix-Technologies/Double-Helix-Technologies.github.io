import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getClientSolutionBySlug, getClientSolutionPath } from '@/app/data/work';
import { whyUs } from '@/app/data/whyUs';
import { SectionBackdrop } from './ui/section-backdrop';

/**
 * Why choose us, directly after the client cases: a visitor who has just seen the proof asks "why
 * you" before "what exactly do you offer". The copy lives in `app/data/whyUs.ts` (shared with
 * `/llms.txt`); the evidence phrases link to the cases that back them, so every claim is checkable
 * in one click. The mesh backdrop, otherwise used behind the hero and the contact section, gives
 * the claim the same weight as the first screen.
 */
function casePath(slug: string) {
  const solution = getClientSolutionBySlug(slug);
  if (!solution) throw new Error(`Unknown client case: ${slug}`);
  return getClientSolutionPath(solution);
}

const linkClass =
  'font-medium text-text-primary underline decoration-accent-blue/60 underline-offset-4 hover:decoration-accent-blue';

export default function WhyUs() {
  const { eyebrow, headline, forYou, largeOrganisations } = whyUs;

  return (
    <section
      id="why-us"
      className="section relative isolate overflow-hidden bg-background lg:flex lg:min-h-[100svh] lg:items-center"
      aria-labelledby="why-us-heading"
    >
      <SectionBackdrop variant="mesh" className="opacity-80" />
      <div className="container-tight w-full">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">{eyebrow}</p>
        <h2
          id="why-us-heading"
          className="section-heading mb-12 max-w-4xl text-balance leading-[1.08] lg:mb-16 lg:text-6xl"
        >
          {headline}
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-semibold leading-snug text-text-primary lg:text-2xl">{forYou.title}</h3>
            <p className="text-lg leading-relaxed text-text-secondary md:text-xl">{forYou.text}</p>
            <p className="text-2xl font-semibold leading-snug text-text-primary md:text-3xl">{forYou.emphasis}</p>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-semibold leading-snug text-text-primary lg:text-2xl">
              {largeOrganisations.title}
            </h3>
            <p className="text-lg leading-relaxed text-text-secondary md:text-xl">
              {largeOrganisations.segments.map((segment, index) =>
                segment.caseSlug ? (
                  <Link key={index} href={casePath(segment.caseSlug)} className={linkClass}>
                    {segment.text}
                  </Link>
                ) : (
                  <span key={index}>{segment.text}</span>
                )
              )}
            </p>
            <Link
              href="/work/"
              className="inline-flex items-center gap-1 font-medium text-text-primary underline-offset-4 hover:underline"
            >
              See the cases
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
