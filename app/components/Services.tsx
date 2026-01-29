'use client';
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { ArrowRight, Asterisk, Sparkles } from 'lucide-react';
import { servicesContents } from '../data/services';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';

export default function Services() {
  return (
    <section id="services" className="section bg-gradient-to-b from-background to-background-alt">
      <div className="container-tight text-left">
        <div className="mb-10">
          <h2 className="section-heading mb-3 md:mb-5">
            What we do
          </h2>
          <p className="text-text-secondary max-w-2xl py-4">
            We provide comprehensive solutions to help you streamline your business process and get the most out of your
            resources.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="integration"
          className="w-full mx-auto border-b border-b-gray-700"
        >
          {servicesContents.map(({ key, title, description, price }) => (

            <AccordionItem key={key} value={key} className="w-full">
              <AccordionTrigger>
                <div className="flex gap-2">
                  <Asterisk className="w-8 h-8"/>
                  {title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-8">
                <p>{description}</p>
                <div className="flex flex-row justify-between">
                  <p className="py-2">Starting at <strong>{price}</strong> *</p>
                  <Button variant="secondary">
                    <a href={`/services/${key}`} target="_blank">
                      learn more
                    </a>
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
            We offer tailored packages combining multiple services for comprehensive digital transformation.
          </CardContent>
          <CardFooter>
            <Button variant="secondary">
              <a href="mailto:hello@doublehelix.dev?subject=Book%20an%20intro%20call">
                Schedule an intro call
              </a>
              <ArrowRight size={11}/>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
} 