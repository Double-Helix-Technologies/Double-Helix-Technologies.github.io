'use client';

import { Button } from '@/app/components/ui/button';
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section bg-gradient-to-b from-background to-background-alt">
      <div className="container-tight">
        <div className="mb-8 text-center">
          <h2 className="section-heading mb-5">Ready to move from ideas to outcomes?</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Tell us where it hurts. We’ll suggest a right‑sized way forward.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bp-8 md:pb-10 rounded-2xl text-center">
            <Button variant="gradient">
              <a href="mailto:hello@doublehelix.dev?subject=Book%20an%20intro%20call">
                Schedule an intro call
              </a>
            </Button>
            <p className="mt-2 text-text-secondary text-xs">
              Intro call (15–30 min)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 