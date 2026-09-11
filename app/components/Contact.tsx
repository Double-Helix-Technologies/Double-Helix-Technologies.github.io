'use client';

import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section bg-gradient-to-b from-background to-background-alt">
      <div className="container-tight">
        <div className="mb-8 text-center">
          <h2 className="section-heading mb-5">When systems don’t talk, we listen.</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Tell us what’s broken, missing or worth building. We’ll suggest a way forward.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bp-8 md:pb-10 rounded-2xl text-center">
            <Button variant="gradient">
              <a
                href="https://cal.com/aleksandrs-gusevs/let-s-meet"
                target="_blank"
                rel="noreferrer"
              >
                Book a free consultation
              </a>
            </Button>
            <p className="mt-2 text-text-secondary text-xs">
              Free consultation (15–30 min)
            </p>
            <p className="mt-2 text-text-secondary text-xs">
              Prefer typing to talking? Email us:{' '}
              <a href="mailto:aleksandrs.gusevs@doublehelix.dev" className="underline">
                aleksandrs.gusevs@doublehelix.dev
              </a>
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-text-secondary text-sm">
            <p className="font-semibold text-text-primary">Double Helix Technologies SIA</p>
            <p>Bauskas iela 203 - 35, Riga, Latvia</p>
            <p>
              <a href="mailto:hello@doublehelix.dev" className="hover:text-primary transition-colors">
                hello@doublehelix.dev
              </a>
              {' · '}
              <a href="tel:+37129636428" className="hover:text-primary transition-colors">
                +371 29636428
              </a>
            </p>
            <p>VAT: LV50203351951</p>
            <p className="mt-2 text-xs">
              <Link href="/notice" className="underline hover:text-primary transition-colors">
                Full legal notice
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
