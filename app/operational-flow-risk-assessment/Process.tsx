import { Card } from '@/app/components/ui/card';
import { CardSpotlight } from '@/app/components/ui/CardSpotlight';
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const steps = [
  {
    title: 'Align & Assess',
    description: 'We align on scope, objectives, and decision criteria through focused stakeholder interviews and access setup. ' +
      'This ensures we assess the right flow, at the right depth, with shared expectations from day one.'
  },
  {
    title: 'Map & Diagnose',
    description: 'We document the end-to-end operational and system flow, including handoffs, system touchpoints, data movements, and exceptions. ' +
      'From this, we identify where flow breaks, ownership is unclear, or risk accumulates.'
  },
  {
    title: 'Prioritize & Plan ',
    description: 'Identified risks are triaged using a clear framework (fix now / fix later / decide), ' +
      'scored by impact and likelihood, and sequenced into a pragmatic remediation plan. The result is focus: what matters most, and what comes next.'
  },
  {
    title: 'Prepare Final Report ',
    description: 'We consolidate findings into a clear, executive-ready set of deliverables: flow maps, risk register, ' +
      'prioritization logic, and a sequenced action plan. Everything is structured for internal execution.'
  },
  {
    title: 'Result Presentation',
    description: 'We walk decision-makers through the findings, trade-offs, and recommended next steps, ensuring shared ' +
      'understanding and ownership. You leave knowing where flow breaks, who owns each issue, and what to fix first.'
  }
];

export default function Process() {
  const spotlightCard = (item: { title: string, description: string }, idx: number) => {
    return (
      <Card key={item.title} className="w-full">
        <CardSpotlight
          className="py-8 transition-all duration-300 group flex justify-between bg-background-alt/40 "
          color={'rgba(156,75,255,0.4)'}
        >
          <div className=" w-full flex flex-col gap-6">
            <div className="relative z-20 h-full space-y-6">
              <div className="flex flex-row items-baseline space-x-3">
                <h3 className="text-4xl md:text-5xl font-bold">{++idx}</h3>
                <p className="text-2xl font-semibold">{item.title}</p>
              </div>
              <p>{item.description}</p>

            </div>
          </div>
        </CardSpotlight>
      </Card>);
  };

  return (
    <section className="section bg-background-alt">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="container-tight grid md:grid-cols-3 grid-cols-1 gap-16"
      >
        <motion.div
          variants={fadeInUp}
          className="space-y-5 mb-10 lg:sticky lg:top-20 lg:h-fit">
          <h2
            className="section-heading mb-6 md:mb-8 col-span-1"
          >
            Our process
          </h2>
          <p className="text-text-secondary">
            Our process is simple: we align on what matters, map and diagnose your real‑world flow, prioritize the riskiest gaps, and turn the findings into clear deliverables and a decision‑ready readout so you know what to fix first
          </p>
        </motion.div>
        <div className="space-y-4 col-span-2 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={fadeInUp}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              {spotlightCard(step, index)}

            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}