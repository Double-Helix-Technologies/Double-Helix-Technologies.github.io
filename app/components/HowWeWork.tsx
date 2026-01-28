'use client';
import React from 'react';
import { Card } from '@/app/components/ui/card';
import { Activity, Asterisk, Rocket, ShieldCheck, Workflow } from 'lucide-react';
import { CardSpotlight } from '@/app/components/ui/CardSpotlight';

export default function HowWeWork() {
  const cardContents = [
    {
      title: 'Discover',
      description: 'Meet stakeholders, map current systems and constraints, capture risks, and define success metrics.',
      icon: <Activity/>
    },
    {
      title: 'Design',
      description: 'Propose right‑sized architecture, decide build‑vs‑buy, and plan incremental releases with clear acceptance criteria.',
      icon: <Workflow/>
    },
    {
      title: 'Deliver',
      description: 'Ship in small increments with demos, automated tests and CI/CD; manage change control where required.',
      icon: <Rocket/>
    },
    {
      title: 'Evolve',
      description: 'Set up monitoring and alerts, runbooks and training; hand over or stay to operate with SLAs.',
      icon: <ShieldCheck/>
    }
  ];

  const collaborationPrinciples = [
    'Communicate early and often',
    'Understand the \'why\' to focus on real value',
    'Work closely with domain experts and end users',
    'Iterate with stakeholders to land the right solution',
    'Consolidate findings into an actionable plan',
    'Deliver only what’s essential, no bloat'
  ];

  return (
    <section id="how-we-work" className="section bg-gradient-to-t from-background to-background-alt">
      <div className="container-tight grid lg:grid-cols-2 gap-10 ">
        <div className="flex flex-col gap-5 max-w-md lg:sticky lg:top-20 lg:h-fit">
          <h2 className="text-5xl text-text-primary mb-5">
            How we work
          </h2>
          <p className="text-text-secondary">
            We keep the process simple and transparent. From the first
            conversations to ongoing operations we strive to listen, coach when necessary and
            deliver.
          </p>
          <p className="text-text-secondary">
            Here’s our approach to building meaningful solutions:
          </p>
          <ul className="space-y-1 text-text-secondary mb-6">
            {collaborationPrinciples.map((principle) => (
              <li key={principle} className="flex items-top gap-2">
                <Asterisk className="h-6 w-6 flex-shrink-0"/>
                {principle}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 content-stretch relative">
          {cardContents.map(({ icon, title, description }, idx) => (
            <Card key={title} className="shadow-none">
              <CardSpotlight
                className="py-8 transition-all duration-300 bg-transparent group"
                color={'rgba(156,75,255,0.4)'}
              >
                <div className="relative z-20 flex flex-col h-full gap-8">
                  <div className="flex justify-between">
                    <div className="flex flex-row items-baseline space-x-3">
                      <h3 className="text-4xl md:text-5xl font-bold">{++idx}</h3>
                      <p className="text-2xl font-semibold">{title}</p>
                    </div>
                    <div className="mt-6 transition-transform group-hover:-rotate-12">{icon}</div>
                  </div>
                  <p className={'text-md'}>{description}</p>
                </div>
              </CardSpotlight>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 