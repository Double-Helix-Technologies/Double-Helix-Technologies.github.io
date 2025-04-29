"use client"

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background-alt">
      <div className="container-tight">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight font-semibold text-text-primary font-heading">
            <span className="block">Strategic</span>
            <span className="block text-primary">Technology Partner</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            We help businesses scale by providing senior-level software engineering, IT process consulting, and digital transformation strategies.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#contact"
              className="btn-accent"
            >
              Get a Consultation
            </Link>
            <Link
              href="#services"
              className="btn-secondary"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 