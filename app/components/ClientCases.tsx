'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { CarouselApi } from './ui/carousel';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { clientSolutions, getClientSolutionPath, type ClientSolution } from '@/app/data/work';

/**
 * Result headings in prose, one per case. Each restates the approved `headline` from work.ts
 * without adding or changing a figure; cases without an entry fall back to the headline itself.
 */
const RESULT_HEADINGS: Record<string, string> = {
  'process-automation-lims-integration': 'From seven data entry points to one',
  'ngs-data-delivery-automation': 'Data delivery from 1.5 days to 3 hours',
  'customer-integration-api-onboarding': 'Customer onboarding from months to under two weeks',
  'forensics-integration': 'Two years late, first to launch',
  'it-reorganization': '95% fewer repeat incidents',
  'observability-improvement': '80% fewer alerts, 4× faster incident response',
  'rapid-mvp-development': 'From idea to a working MVP in under a week'
};

function eyebrowFor(solution: ClientSolution) {
  return solution.client ? `Client case, ${solution.client.name}` : `Client case, ${solution.cardLabel ?? solution.sector}`;
}

/**
 * Client cases as a page-wide carousel: one slide per case, each in the same calm layout
 * (client or sector, result heading, one sentence, the figures, the attributed quote where one
 * exists, and a link to the full case). Everything is read from `app/data/work.ts`. All slides
 * are in the server-rendered HTML; the carousel only moves on the visitor's action, so nobody
 * loses their place while reading.
 */
export default function ClientCases() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  // Slides differ in height (one to three figures, a quote or none). The viewport follows the
  // active slide so shorter cases are not followed by empty space; without JavaScript it simply
  // takes the height of the tallest slide.
  useEffect(() => {
    if (!api) return;

    const root = api.rootNode();
    const fit = () => {
      const slide = api.slideNodes()[api.selectedScrollSnap()];
      if (slide) root.style.height = `${slide.offsetHeight}px`;
    };

    root.style.transition = 'height 300ms ease';
    fit();
    api.on('select', fit);
    api.on('reInit', fit);
    api.on('resize', fit);
    return () => {
      api.off('select', fit);
      api.off('reInit', fit);
      api.off('resize', fit);
      root.style.height = '';
      root.style.transition = '';
    };
  }, [api]);

  return (
    <section id="client-cases" className="section bg-background-alt" aria-label="Client cases">
      <div className="container-tight">
        <Carousel setApi={setApi} opts={{ align: 'start', loop: true }} className="w-full">
          <CarouselContent className="items-start">
            {clientSolutions.map((solution) => (
              <CarouselItem key={solution.slug} className="basis-full">
                <article className="flex flex-col gap-10 md:gap-12" aria-label={solution.title}>
                  <div className="max-w-3xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">
                      {eyebrowFor(solution)}
                    </p>
                    <h2 className="section-heading mb-5">{RESULT_HEADINGS[solution.slug] ?? solution.headline}</h2>
                    <p className="text-lg leading-relaxed text-text-secondary">{solution.summary}</p>
                  </div>

                  <dl className="grid gap-8 sm:grid-cols-3 sm:gap-6">
                    {solution.highlightStats.map((stat) => (
                      <div key={stat.label} className="border-t border-divider pt-5">
                        <dd className="text-4xl font-semibold text-text-primary md:text-5xl">{stat.value}</dd>
                        <dt className="mt-2 text-text-secondary">{stat.label}</dt>
                      </div>
                    ))}
                  </dl>

                  {solution.quote && (
                    <figure className="max-w-3xl">
                      <blockquote className="text-xl leading-relaxed text-text-primary md:text-2xl">
                        {`“${solution.quote.text}”`}
                      </blockquote>
                      <figcaption className="mt-4 text-sm text-text-secondary">{solution.quote.attribution}</figcaption>
                    </figure>
                  )}

                  <Link
                    href={getClientSolutionPath(solution)}
                    className="inline-flex items-center gap-1 font-medium text-text-primary underline-offset-4 hover:underline"
                  >
                    Read the full case study
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden lg:flex -left-12 bg-background hover:bg-background text-text-primary" />
          <CarouselNext className="hidden lg:flex -right-12 bg-background hover:bg-background text-text-primary" />
        </Carousel>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-divider text-text-primary lg:hidden"
              aria-label="Previous case"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Client cases">
            {clientSolutions.map((solution, idx) => (
              <button
                key={solution.slug}
                type="button"
                role="tab"
                aria-selected={current === idx}
                onClick={() => api?.scrollTo(idx)}
                className={`h-2 cursor-pointer rounded-full transition-all ${current === idx ? 'w-4 bg-text-primary' : 'w-2 bg-border'}`}
                aria-label={`${solution.title} (${idx + 1} of ${clientSolutions.length})`}
              />
            ))}
            </div>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-divider text-text-primary lg:hidden"
              aria-label="Next case"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <Link href="/work/" className="text-sm font-medium text-text-primary underline-offset-4 hover:underline">
            All work
          </Link>
        </div>
      </div>
    </section>
  );
}
