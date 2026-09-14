'use client';

import { useEffect, useState } from 'react';
import type { CarouselApi } from './ui/carousel';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import AvatarPlaceholder from '@/app/components/ui/avatarPlaceholder';
import { Card, CardContent, CardFooter, CardHeader } from '@/app/components/ui/card';
import { getPublishedQuotes } from '@/app/data/work';

/** "Name, role, organisation" is shown as a name line and a role line. */
function splitAttribution(attribution: string) {
  const separator = attribution.indexOf(',');
  if (separator === -1) return { name: attribution, role: '' };
  return {
    name: attribution.slice(0, separator).trim(),
    role: attribution.slice(separator + 1).trim()
  };
}

/**
 * Client quotes carousel. Text and attribution come from the case studies in `app/data/work.ts`
 * through `getPublishedQuotes()`, so the homepage cannot drift from the /work/ pages.
 */
export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const testimonials = getPublishedQuotes();

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="testimonials" className="section bg-background-alt">
      <div className="container-tight">
        <div className="text-center mb-3 md:mb-5">
          <h2 className="section-heading mb-5">What clients say</h2>
        </div>
        <div className="relative md:mt-12 pb-12 max-w-5xl">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'center',
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="items-center align-top">
              {testimonials.map((testimonial) => {
                const { name, role } = splitAttribution(testimonial.attribution);
                return (
                  <CarouselItem key={testimonial.slug} className="py-2 md:py-4 -ml-1 md:mr-1 basis-full md:basis-6/12">
                    <Card className="bg-gray-600/10 max-w-xl">
                      <CardHeader className="text-xl font-semibold">
                        <h4 className="text-2xl md:text-1xl font-semibold">{`"${testimonial.tagline}"`}</h4>
                      </CardHeader>
                      <CardContent className="text-md text-text-secondary">{testimonial.body}</CardContent>
                      <CardFooter className="flex gap-4 text-left items-center">
                        <AvatarPlaceholder>{name[0]}</AvatarPlaceholder>
                        <div>
                          <p className="font-medium text-text-primary max-w-48 text-md">{name}</p>
                          {role && <p className="text-text-secondary text-xs">{role}</p>}
                        </div>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselPrevious className="hidden lg:flex -left-12 hover:bg-background text-text-primary" />
            <CarouselNext className="hidden lg:flex -right-12 hover:bg-background text-text-primary" />
          </Carousel>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((testimonial, idx) => (
              <button
                key={testimonial.slug}
                onClick={() => api?.scrollTo(idx)}
                className={`h-2 cursor-pointer rounded-full transition-all ${current === idx ? 'w-4 bg-gray-300' : 'w-2 bg-border'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
