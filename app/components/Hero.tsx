"use client"

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { CheckCircle2, LineChart } from 'lucide-react';

export default function Hero() {
  const slogans = [
    "No bloat—delivering only what’s essential",
    "Analysis → architecture → build → operate",
    "Secure by design, audit‑ready",
    "Partnership mindset: we coach, listen, deliver",
  ];
  const workshopItems = [
    "Stakeholder interviews & goals",
    "Systems & data flow map",
    "Risks & controls (incl. compliance)",
    "Target architecture & options",
    "90‑day plan with priorities",
  ];
  return (
    <div className="relative py-20 md:py-32 overflow-hidden bg-background-alt">
      <div className="container-tight animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-semibold text-text-primary mb-12 text-center">
          Your Strategic Technology Partner
        </h2>
        <div className="md:grid md:grid-cols-12 md:gap-16">
          <div className="text-center md:col-span-7">
            <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto text-justify">
              We help businesses create a healthier, safer, and better organized world by solving IT challenges that matter. We grow businesses by building simple, secure, and adaptable solutions that scale as you go.
            </p>
            <div className="mt-10 mb-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:hello@doublehelix.dev?subject=Book%20an%20intro%20call"
                className="btn-accent"
              >
                Book an intro call
              </a>
              <Link
                href="#how-we-work"
                className="btn-secondary"
              >
                See how we work
              </Link>
            </div>
            <ul className="pace-y-2">
              {slogans.map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-green mt-1" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5">
              <div className="relative h-full flex flex-col justify-end">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-indigo-500/10 via-sky-500/10 to-emerald-400/10 blur-2xl" />
              <Card className="relative rounded-3xl shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-5 w-5" /> Discovery Workshop
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-2">
                    {workshopItems.map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent-green mt-1" /> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs">Timeline: 1–2 weeks</div>
                    <a
                      href="mailto:hello@doublehelix.dev?subject=Book%20a%20workshop"
                      className="btn-accent"
                    >
                      Book a workshop
                    </a>
                  </div>
                  <div className="mt-2 text-xs">Discovery Workshop (structured 1–2 week engagement)</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 