"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/90 dark:bg-background/80 backdrop-blur-md shadow-sm dark:shadow-background/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-wide flex items-center justify-between h-20" aria-label="Global">
        <div className="flex">
          <Link href="/" className="flex items-center gap-0">
            <Image
              src="/images/logo.png"
              alt="Double Helix Technologies Logo"
              width={100}
              height={0}
              className="w-100 h-auto"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wide text-text-primary font-heading ml-[-15px] tracking-wider">double helix</span>
              <span className="text-md font-medium tracking-wide text-text-secondary font-heading ml-[-15px] mt-[-8px] tracking-widest">technologies</span>
            </div>
          </Link>
        </div>
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            type="button"
            className="p-2 text-text-primary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-8 items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-text-primary hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="#contact"
            className="btn-accent ml-4"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-background p-6 shadow-lg dark:shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/images/logo.png"
                  alt="Double Helix Technologies Logo"
                  width={32}
                  height={0}
                  className="w-8 h-auto"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-medium tracking-wide text-text-primary font-heading">DOUBLE HELIX</span>
                  <span className="text-md font-light tracking-wide text-text-secondary font-heading">TECHNOLOGIES</span>
                </div>
              </Link>
              <button
                type="button"
                className="p-2 text-text-primary hover:bg-background-alt rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="space-y-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-lg font-medium text-text-primary hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  className="btn-accent mt-8 block w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 