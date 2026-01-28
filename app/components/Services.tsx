'use client';
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Asterisk, ChevronsRight } from 'lucide-react';
import { servicesContents } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="section bg-gradient-to-b from-background to-background-alt">
      <div className="container-tight text-left">
        <div className="mb-10">
          <h2 className="text-5xl text-text-primary text-left mb-5 md:mb-3">
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
          {servicesContents.map(({ key, title, description, pricing }) => (

            <AccordionItem key={key} value={key} className="w-full">
              <AccordionTrigger>
                <div className="flex gap-2">
                  <Asterisk className="w-8 h-8"/>
                  {title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-8 justify-between">
                <p>{description}</p>
                <div className="flex justify-between text-sm opacity-70">
                  <span>Starting at <strong>{pricing}</strong></span>
                  <a href={'/'} target="_blank">
                    <div className="flex flex-row gap-1">
                      learn more <ChevronsRight className="h-6 w-6"/>
                    </div>
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
} 