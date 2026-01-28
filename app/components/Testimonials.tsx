'use client';

import { useEffect, useState } from 'react';
import type { CarouselApi } from './ui/carousel';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import AvatarPlaceholder from '@/app/components/ui/avatarPlaceholder';
import { Card, CardContent, CardFooter, CardHeader } from '@/app/components/ui/card';

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      tagline: 'Collaborating with Double Helix Technologies has greatly enhanced the efficiency and reliability of our IT integration projects.',
      quote: 'Their strong technical expertise and proactive, customer-focused approach enabled us to address potential issues early and implement solutions perfectly aligned with our user needs. The team’s ability to listen carefully and anticipate challenges ensured a smooth and efficient integration that supports our business objectives. Double Helix Technologies is a dependable partner for any organization seeking innovative and client-centered IT integration services.',
      author: 'Reynald Vidili',
      position: 'Sales Director, Eurofins Genomics France SAS'
    },
    {
      tagline: 'Working with this team was a game-changer.',
      quote: 'They don’t just code—they dive deep into your business, challenge assumptions, and co-create solutions that are both innovative and intuitive. I was impressed about their ability to translate very complex business processes into elegant, user-friendly solutions.',
      author: 'Annika Schott',
      position: 'Eurofins Genomics Europe Project Management Team Lead NGS'
    },
    {
      tagline: 'The IT team consistently demonstrates a solution-oriented approach and a commitment to building sustainable structures that enhance our workflow.',
      quote: 'Their valuable interactions and willingness to share knowledge significantly impact our projects. Their hard work and dedication are truly commendable, and I look forward to seeing our collective continued success.',
      author: 'Nadine Tappe',
      position: 'Eurofins Genomics Europe Head of Oligonucleotides'
    },
    {
      tagline: 'Working with this team has been an exceptional experience.',
      quote: 'They delivered our project management application for multiple laboratories with remarkable speed and precision, all while maintaining the highest standards of quality. What truly impressed us was their communication: always clear, responsive, and collaborative. They didn’t just build software, they took the time to understand our entire business ecosystem, not just the immediate requirements. Their approach went beyond solving surface-level problems, they actively sought out root causes and designed solutions that support both current operations and future growth. Their dedication, insight, and professionalism make them a standout partner for any organization looking to build impactful, scalable digital solutions.',
      author: 'Andreas Feldl',
      position: 'Eurofins Genomics Europe Global Business Product Owner'
    }
  ];

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
    <section id="testimonials" className="section">
      <div className="container-tight">
        <div className="text-center mb-16">
          <h2 className="text-5xl text-center text-text-primary mb-5">What our clients say</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="relative mt-12 pb-12 max-w-5xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'center',
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="items-center">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.author} className="py-4 -ml-1 mr-1 md:basis-6/12">
                  <Card className="bg-gray-600/10 max-w-xl">
                    <CardHeader className="text-xl font-semibold">
                      <h4 className="text-2xl md:text-1xl font-semibold">{`"${testimonial.tagline}"`}</h4>
                    </CardHeader>
                    <CardContent className="text-md text-text-secondary">
                      {testimonial.quote}
                    </CardContent>
                    <CardFooter className="flex gap-4 text-left">
                      <AvatarPlaceholder>
                        {testimonial.author[0]}
                      </AvatarPlaceholder>
                      <div>
                        <p className="font-medium text-text-primary max-w-48 text-md">{testimonial.author}</p>
                        <p className="text-text-secondary text-xs">{testimonial.position}</p>
                      </div>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              className="hidden lg:flex -left-12 hover:bg-background text-text-primary"/>
            <CarouselNext
              className="hidden lg:flex -right-12 hover:bg-background text-text-primary"/>
          </Carousel>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={_.tagline}
                onClick={() => api?.scrollTo(idx)}
                className={`h-2 cursor-pointer rounded-full transition-all ${
                  current === idx ? 'w-4 bg-gray-300' : 'w-2 bg-border'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}