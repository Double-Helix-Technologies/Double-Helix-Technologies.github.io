"use client"

import { useState, useRef, useEffect } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      quote: "Collaborating with Double Helix Technologies has greatly enhanced the efficiency and reliability of our IT integration projects. Their strong technical expertise and proactive, customer-focused approach enabled us to address potential issues early and implement solutions perfectly aligned with our user needs. The team’s ability to listen carefully and anticipate challenges ensured a smooth and efficient integration that supports our business objectives. Double Helix Technologies is a dependable partner for any organization seeking innovative and client-centered IT integration services.",
      author: "Reynald Vidili",
      position: "Sales Director, Eurofins Genomics France SAS",
    },
    {
      quote: "Working with this team was a game-changer. They don’t just code—they dive deep into your business, challenge assumptions, and co-create solutions that are both innovative and intuitive. I was impressed about their ability to translate very complex business processes into elegant, user-friendly solutions.",
      author: "Annika Schott",
      position: "Eurofins Genomics Europe Project Management Team Lead NGS",
    },
    {
      quote: "The IT team consistently demonstrates a solution-oriented approach and a commitment to building sustainable structures that enhance our workflow. Their valuable interactions and willingness to share knowledge significantly impact our projects. Their hard work and dedication are truly commendable, and I look forward to seeing our collective continued success.",
      author: "Nadine Tappe",
      position: "Eurofins Genomics Europe Head of Oligonucleotides",
    },
    {
      quote: "Working with this team has been an exceptional experience. They delivered our project management application for multiple laboratories with remarkable speed and precision, all while maintaining the highest standards of quality. What truly impressed us was their communication: always clear, responsive, and collaborative. They didn’t just build software, they took the time to understand our entire business ecosystem, not just the immediate requirements. Their approach went beyond solving surface-level problems, they actively sought out root causes and designed solutions that support both current operations and future growth. Their dedication, insight, and professionalism make them a standout partner for any organization looking to build impactful, scalable digital solutions.",
      author: "Andreas Feldl",
      position: "Eurofins Genomics Europe Global Business Product Owner",
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
          <h2 className="text-5xl text-center text-text-primary mb-5">What clients say</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
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
                  key={testimonial.author}
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
                        <div className="w-12 aspect-square rounded-full bg-primary flex items-center justify-center text-white font-medium text-lg">
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