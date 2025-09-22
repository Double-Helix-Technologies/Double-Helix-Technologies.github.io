"use client"

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background-alt">
      <div className="container-tight">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight font-semibold text-text-primary font-heading">
            <span className="block">Transform complexity into clarity</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            We help businesses create a healthier, safer, and better organized world by solving IT challenges that matter. We grow businesses by building simple, secure, and adaptable solutions that scale as you go.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#contact"
              className="btn-accent"
            >
              Book an intro call
            </Link>
            <Link
              href="#services"
              className="btn-secondary"
            >
              See how we work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 