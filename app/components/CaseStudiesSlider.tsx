'use client';

import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { CardSpotlight } from './ui/CardSpotlight';
import { AnimatedCounter } from './ui/AnimatedCounter';
import { clientSolutions, getClientSolutionPath } from '../data/work';
import type { CarouselApi } from './ui/carousel';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

type ColorClass = {
  text: string;
  bg: string;
  border: string;
  glow: string;
};

const COLOR_CYCLE: ColorClass[] = [
  { text: 'text-sky-400', bg: 'bg-sky-400/10', border: 'border-sky-400/30', glow: 'rgba(56, 189, 248, 0.4)' },
  { text: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/30', glow: 'rgba(251, 191, 36, 0.4)' },
  { text: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/30', glow: 'rgba(52, 211, 153, 0.4)' },
  { text: 'text-violet-400', bg: 'bg-violet-400/10', border: 'border-violet-400/30', glow: 'rgba(167, 139, 250, 0.4)' }
];

/**
 * Homepage teaser for the Work section. Reads the same data as /work so figures cannot drift.
 * Each card shows one number (animated) and one label, nothing else.
 */
export default function CaseStudiesSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-advance every 7 seconds
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 7000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="case-studies" className="section">
      <div className="container-tight">
        <h2 className="section-heading mb-5 md:mb-10">
          Case studies
        </h2>

        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: true
          }}
          className="w-full"
        >
          <CarouselContent className="py-2 -ml-1 mr-1 md:-ml-2 ">
            {clientSolutions.map((solution, index) => {
              const colors = COLOR_CYCLE[index % COLOR_CYCLE.length];
              const stat = solution.featuredStat;

              return (
                <CarouselItem
                  key={solution.slug}
                  className="pl-4 basis-full lg:basis-1/2"
                >
                  <Link href={getClientSolutionPath(solution)} className="block">
                    <CardSpotlight
                      className="cursor-pointer transition-all duration-300 min-h-[280px] relative hover:scale-[1.02] bg-background-alt"
                      color={colors.glow}
                    >
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex-1">
                          <div
                            className={`inline-flex self-start px-3 py-1 rounded-full ${colors.bg} ${colors.border} border mb-4`}>
                            <span className={`text-xs font-medium tracking-wide ${colors.text}`}>
                              {solution.title}
                            </span>
                          </div>

                          <div className="mb-2">
                            <AnimatedCounter
                              value={stat.value}
                              from={stat.from}
                              prefix={stat.prefix}
                              suffix={stat.suffix}
                              className={`text-4xl md:text-5xl font-bold ${colors.text}`}
                            />
                          </div>

                          <p className="text-2xl font-medium text-text-primary mb-2">
                            {stat.label}
                          </p>
                        </div>
                      </div>

                      <div
                        className="absolute bottom-3 right-3 z-20 p-2 rounded-full bg-background/50 hover:bg-background transition-all">
                        <Plus className={`h-6 w-6 ${colors.text}`}/>
                      </div>
                    </CardSpotlight>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious
            className="hidden lg:flex -left-12 bg-background/70 hover:bg-background text-text-primary"/>
          <CarouselNext
            className="hidden lg:flex -right-12 bg-background/70 hover:bg-background text-text-primary"/>
        </Carousel>

        <div className="flex justify-center gap-2 mt-8">
          {clientSolutions.map((solution, idx) => (
            <button
              key={solution.slug}
              onClick={() => api?.scrollTo(idx)}
              className={`h-2 cursor-pointer rounded-full transition-all ${
                current === idx ? 'w-4 bg-gray-300' : 'w-2 bg-border'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
