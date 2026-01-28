'use client';

import Image from 'next/image';
import { Separator } from '@radix-ui/react-separator';
import { Button } from './ui/button';
import { AtSign, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 bg-gray-600/10" aria-labelledby="footer-heading">
      <Separator/>
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="max-w-48 flex flex-col gap-6">
            <Image
              src="/images/logo-full.svg"
              alt="Double Helix Technologies Logo"
              color={'text-text-primary'}
              width={150}
              height={0}
              className="h-auto mr-5 text-text-primary"
            />
            <div className="flex gap-2">
              <Button size="icon" variant="secondary"><a href="https://www.linkedin.com/company/double-helix-technologies"><Linkedin/></a></Button>
              <Button size="icon" variant="secondary"><a href="mailto:hello@doublehelix.dev"><AtSign/></a></Button>
            </div>
            <p className="text-sm">
              Simple, secure, adaptable systems for regulated and quality‑driven businesses.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h3>Company</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/#services" className="text-sm text-text-secondary hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/#about" className="text-sm text-text-secondary hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="text-sm text-text-secondary hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Legal</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/privacy" className="text-sm text-text-secondary hover:text-primary transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-sm text-text-secondary hover:text-primary transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="/notice" className="text-sm text-text-secondary hover:text-primary transition-colors">
                    Legal Notice
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-text-secondary font-semibold">
            &copy; {new Date().getFullYear()} Double Helix Technologies SIA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}