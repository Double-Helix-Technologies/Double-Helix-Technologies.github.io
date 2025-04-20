"use client"

import { useState, useRef, useEffect } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      quote: "Double Helix Technologies transformed our outdated systems into a streamlined digital solution. Their expertise and approach to collaboration made the entire process smooth and effective.",
      author: "Maria Johnson",
      position: "CTO, Nordic Innovations",
      image: "/images/testimonial1.jpg"
    },
    {
      quote: "Working with Double Helix has been game-changing for our startup. Their MVP development accelerated our go-to-market strategy and helped us secure additional funding.",
      author: "Tomas Bergman",
      position: "Founder, Altura",
      image: "/images/testimonial2.jpg"
    },
    {
      quote: "The team's technical expertise is matched only by their ability to truly understand our business needs. They delivered exactly what we needed, when we needed it.",
      author: "Laura Smith",
      position: "VP of Operations, TechVantage",
      image: "/images/testimonial3.jpg"
    }
  ];

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div id="testimonials" className="section bg-background-alt">
      <div className="container-tight">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary mb-2 inline-block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-text-primary mb-6">What clients say</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="relative mt-12 pb-12">
          <div className="relative overflow-hidden">
            <div
              ref={testimonialsRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 transition-opacity duration-500"
                  style={{ opacity: activeIndex === index ? 1 : 0.5 }}
                >
                  <div className="bg-background p-8 md:p-12 rounded-2xl max-w-3xl mx-auto">
                    <div className="flex flex-col items-center text-center">
                      <svg className="h-10 w-10 text-primary/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-xl md:text-2xl font-medium text-text-primary mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-4 flex items-center">
                        <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-medium text-lg">
                          {testimonial.author[0]}
                        </div>
                        <div className="ml-4 text-left">
                          <p className="font-medium text-text-primary">{testimonial.author}</p>
                          <p className="text-text-secondary text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute left-0 right-0 -bottom-6 flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-primary' : 'bg-border'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 left-6 transform -translate-y-1/2 hidden md:block">
            <button 
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center shadow-md text-text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute top-1/2 right-6 transform -translate-y-1/2 hidden md:block">
            <button 
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center shadow-md text-text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 