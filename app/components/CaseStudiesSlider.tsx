"use client";

import { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import { CardSpotlight } from "./ui/CardSpotlight";
import { motion } from "framer-motion";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { caseStudies, colorClasses } from "../data/caseStudies";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import type { CarouselApi } from "./ui/carousel";
import Link from "next/link";

export default function CaseStudiesSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
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
    <section id="case-studies" className="relative w-full bg-background-alt py-20 px-4 md:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-1">
          <span className="text-sm font-medium text-primary mb-2 inline-block">Case Studies</span>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6 py-2 pr-4 md:pr-6 pl-2">
            {caseStudies.map((study, idx) => {
              const colors = colorClasses[study.color];
              
              return (
                <CarouselItem 
                  key={idx} 
                  className="pl-4 md:pl-6 basis-full lg:basis-1/3 pr-2"
                >
                  <Link href={`/case-studies/${study.slug}`} className="block">
                    <CardSpotlight
                      className="cursor-pointer transition-all duration-300 min-h-[320px] relative hover:scale-[1.02]"
                      color={colors.glow}
                      radius={400}
                    >
                      <div className="relative z-10 flex flex-col h-full pb-12">
                        <div className="flex-1">
                          <div className={`inline-flex self-start px-3 py-1 rounded-full ${colors.bg} ${colors.border} border mb-4`}>
                            <span className={`text-xs font-medium tracking-wide uppercase ${colors.text}`}>
                              {study.caseTitle}
                            </span>
                          </div>

                          <div className="mb-2">
                            <AnimatedCounter
                              value={study.stat}
                              from={study.statFrom}
                              suffix={study.statSuffix}
                              className={`text-4xl md:text-5xl font-bold ${colors.text}`}
                            />
                          </div>

                          <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-2">
                            {study.statLabel}
                          </h3>

                          <p className="text-text-secondary text-sm mb-3">
                            {study.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Eye Icon Button - Bottom Right */}
                      <div className="absolute bottom-3 right-3 z-20 p-2 rounded-full bg-background/50 border border-border hover:bg-background transition-all">
                        <Eye className={`h-5 w-5 ${colors.text}`} />
                      </div>
                    </CardSpotlight>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          
          <CarouselPrevious className="hidden lg:flex -left-12 bg-background/70 hover:bg-background text-text-primary border-border" />
          <CarouselNext className="hidden lg:flex -right-12 bg-background/70 hover:bg-background text-text-primary border-border" />
        </Carousel>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {caseStudies.map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={`h-2 cursor-pointer rounded-full transition-all ${
                current === idx ? "w-8 bg-accent-green" : "w-2 bg-border"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
