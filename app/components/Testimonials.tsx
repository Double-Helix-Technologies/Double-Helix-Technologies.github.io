'use client';

import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import type { CarouselApi } from './ui/carousel';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import AvatarPlaceholder from '@/app/components/ui/avatarPlaceholder';
import { getPublishedQuotes } from '@/app/data/work';
import { SectionBackdrop } from './ui/section-backdrop';

/** "Name, role, organisation" is shown as a name line and a role line. */
function splitAttribution(attribution: string) {
  const separator = attribution.indexOf(',');
  if (separator === -1) return { name: attribution, role: '' };
  return {
    name: attribution.slice(0, separator).trim(),
    role: attribution.slice(separator + 1).trim()
  };
}

const AUTO_ADVANCE_MS = 9000;

/**
 * Client quotes, one at a time, centred and large enough to carry a full screen. Text and
 * attribution come from the case studies in `app/data/work.ts` through `getPublishedQuotes()`, so
 * the homepage cannot drift from the /work/ pages. The carousel advances by itself, pauses while
 * the pointer or keyboard focus is on it, and stays still for visitors who prefer reduced motion.
 */
export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const testimonials = getPublishedQuotes();

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || paused || reduceMotion) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(interval);
  }, [api, paused, reduceMotion]);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section relative isolate bg-background-alt lg:flex lg:min-h-[100svh] lg:items-center"
      aria-labelledby="testimonials-heading"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!sectionRef.current?.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <SectionBackdrop variant="glow" className="-scale-x-100" />
      <div className="container-tight w-full">
        <h2 id="testimonials-heading" className="section-heading mb-10 text-center lg:mb-14 lg:text-6xl">
          What clients say
        </h2>

        <div className="relative mx-auto max-w-4xl">
          <Carousel setApi={setApi} opts={{ align: 'center', loop: true }} className="w-full">
            <CarouselContent className="items-center">
              {testimonials.map((testimonial) => {
                const { name, role } = splitAttribution(testimonial.attribution);
                return (
                  <CarouselItem key={testimonial.slug} className="basis-full">
                    <figure className="flex flex-col items-center px-2 text-center md:px-10">
                      <Quote aria-hidden="true" className="mb-6 h-9 w-9 text-accent-lilac lg:h-11 lg:w-11" />
                      <blockquote>
                        <p className="text-2xl font-semibold leading-snug text-text-primary md:text-3xl lg:text-4xl">
                          {`“${testimonial.tagline}”`}
                        </p>
                        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">
                          {testimonial.body}
                        </p>
                      </blockquote>
                      <figcaption className="mt-8 flex items-center gap-4 text-left">
                        <AvatarPlaceholder aria-hidden="true">{name[0]}</AvatarPlaceholder>
                        <div>
                          <p className="font-medium text-text-primary">{name}</p>
                          {role && <p className="text-sm text-text-secondary">{role}</p>}
                        </div>
                      </figcaption>
                    </figure>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselPrevious className="hidden lg:flex -left-14 bg-background hover:bg-background text-text-primary" />
            <CarouselNext className="hidden lg:flex -right-14 bg-background hover:bg-background text-text-primary" />
          </Carousel>

          <div className="mt-10 flex justify-center gap-2" role="tablist" aria-label="Client quotes">
            {testimonials.map((testimonial, idx) => (
              <button
                key={testimonial.slug}
                type="button"
                role="tab"
                aria-selected={current === idx}
                onClick={() => api?.scrollTo(idx)}
                className={`h-2 cursor-pointer rounded-full transition-all ${current === idx ? 'w-4 bg-text-primary' : 'w-2 bg-border'}`}
                aria-label={`Quote ${idx + 1} of ${testimonials.length}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
