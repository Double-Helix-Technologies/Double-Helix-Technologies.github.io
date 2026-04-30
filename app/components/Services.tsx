'use client';
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { ArrowRight, Asterisk, Sparkles } from 'lucide-react';
import { servicesContents } from '../data/services';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';

export default function Services() {
  return (
    <section id="services" className="section bg-gradient-to-b from-background to-background-alt">
      <div className="container-tight text-left">
        <div className="mb-10">
          <h2 className="section-heading mb-3 md:mb-5">
            What we do
          </h2>
          <p className="text-text-secondary max-w-2xl py-4">
            We help life sciences and healthcare organizations streamline regulated operations through custom software, system integrations, and practical AI.
          </p>
          <p className="text-text-secondary max-w-2xl">
            Looking for a solution focused on AI-enabled workflows? Explore our{' '}
            <Link href="/solutions/custom-ai-software-life-sciences/" className="text-primary underline-offset-4 hover:underline">
              custom AI software solutions for life sciences
            </Link>
            {' '}page.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full mx-auto border-b border-b-gray-700"
        >
          {servicesContents.map(({ key, slug, title, description }) => (
            <AccordionItem key={key} value={key} className="w-full">
              <AccordionTrigger>
                <div className="flex gap-2">
                  <Asterisk className="w-8 h-8 flex-shrink-0"/>
                  {title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-8">
                <p>{description}</p>
                <div className="flex flex-row justify-end">
                  <Button variant="secondary">
                    <Link href={`/services/${slug}/`}>
                      learn more
                    </Link>
                    <ArrowRight size={11}/>
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Card className="bg-gray-600/10 p-5 justify-items-center mt-12 md:mt-24 shadow-none">
          <CardHeader>
            <CardTitle className="text-2xl flex gap-3">
              <Sparkles/> Need a custom solution?
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-10">
            We combine engineering, integration, and workflow expertise to solve operational bottlenecks in regulated environments.
          </CardContent>
          <CardFooter>
            <Button variant="secondary" asChild>
              <Link href="/solutions/custom-ai-software-life-sciences/">
                See life sciences AI solutions
                <ArrowRight size={11}/>
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
} 
