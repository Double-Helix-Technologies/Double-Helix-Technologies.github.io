"use client"

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background-alt">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight font-semibold text-text-primary font-heading">
              <span className="block">Strategic</span>
              <span className="block text-primary">Technology Partner</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0">
              We help businesses scale by providing senior-level software engineering, IT process consulting, and digital transformation strategies.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
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

          <div className="hidden lg:block relative animate-fade-in">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
              <svg 
                className="w-40 h-40 text-white animate-fade-in" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl bg-accent-yellow shadow-xl flex items-center justify-center">
              <svg 
                className="w-10 h-10 text-text-primary animate-fade-in" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 