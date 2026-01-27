'use client';
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Asterisk, ChevronsRight } from 'lucide-react';

export default function Services() {
  const servicesContents = [
    {
      title: 'End-to-end integration design & implementation',
      key: 'integration',
      description: 'We ensure that data is reliable, complete, and consistent across your entire application landscape. ' +
        'By implementing integrations end-to-end, we eliminate gaps between systems, establish a single source of truth, ' +
        'and provide a unified, auditable view of operations. Built-in observability ensures that issues ' +
        'are detected early - often before users or customers notice, ensuring stable day-to-day operations in regulated environments.',
      pricing: '€9000 *'
    },
    {
      title: 'Software architecture assessment & future-readiness advisory',
      key: 'architecture',
      description: 'We assess your current software architecture with a focus on scalability, maintainability, security, ' +
        'and regulatory fit. We identify structural risks, technical debt, and growth blockers, then provide clear, ' +
        'pragmatic recommendations to evolve the system without unnecessary rewrites. ' +
        'The goal is a future-ready architecture that supports business change, integrations, and long-term operations.',
      pricing: '€10 000 *'
    },
    {
      title: 'System observability setup or improvement',
      key: 'system',
      description: 'We design or improve system observability to give teams clear, actionable insight into workflows, ' +
        'integrations, and system health. By making data flows, failures, and bottlenecks visible end-to-end, ' +
        'we help laboratories detect issues earlier, reduce downtime, and improve traceability.',
      pricing: '€9000 *'
    },
    {
      title: 'Compliance & Security',
      key: 'security',
      description: 'A pragmatic cyber-security risk assessment focused on real operational impact. ' +
        'We identify and classify risks across machines, systems, data flows, and integrations, then deliver clear, ' +
        'prioritized recommendations that are practical to implement. The result is improved security posture, ' +
        'audit readiness, and confidence in everyday operations. Each step is a deliverable.',
      pricing: '€8000 *'
    }
  ];

  return (
    <div className="bg-gradient-to-t from-background-alt to-background">
      <section className="section container-tight text-left">
        <div className="mb-10">
          <h2 className="text-5xl text-text-primary text-left">
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
                  <span>Estimated at <strong>{pricing}</strong></span>
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
      </section>
    </div>
  );
} 