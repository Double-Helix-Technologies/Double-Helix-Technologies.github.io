'use client';

import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { CardSpotlight } from './ui/CardSpotlight';
import { AnimatedCounter } from './ui/AnimatedCounter';
import { caseStudies, colorClasses } from '../data/caseStudies';
import type { CarouselApi } from './ui/carousel';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Link from 'next/link';

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
        <h2 className="mb-10 text-left text-4xl md:text-5xl text-text-primary">
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
            {caseStudies.map((study) => {
              const colors = colorClasses[study.color];

              return (
                <CarouselItem
                  key={study.stats[0].statLabel}
                  className="pl-4 basis-full lg:basis-1/2"
                >
                  <Link href={`/case-studies/${study.slug}`} className="block">
                    <CardSpotlight
                      className="cursor-pointer transition-all duration-300 min-h-[280px] relative hover:scale-[1.02] bg-background-alt"
                      color={colors.glow}
                    >
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex-1">
                          <div
                            className={`inline-flex self-start px-3 py-1 rounded-full ${colors.bg} ${colors.border} border mb-4`}>
                            <span className={`text-xs font-medium tracking-wide ${colors.text}`}>
                              {study.caseTitle}
                            </span>
                          </div>

                          <div className="mb-2">
                            <AnimatedCounter
                              value={study.stats[0].stat}
                              from={study.stats[0].statFrom}
                              suffix={study.stats[0].statSuffix}
                              className={`text-4xl md:text-5xl font-bold ${colors.text}`}
                            />
                          </div>

                          <p className="text-2xl font-medium text-text-primary mb-2">
                            {study.stats[0].statLabel}
                          </p>

                          <p className="text-md mb-3">
                            {study.stats[0].statSubLabel}
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
          {caseStudies.map((_, idx) => (
            <button
              key={_.caseTitle}
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
