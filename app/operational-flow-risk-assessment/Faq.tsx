import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import React from 'react';

export default function Faq() {

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

  const objections = [
    {
      objection: 'We don\'t have time',
      reframe: 'That\'s the signal. When expedites and rework consume capacity, you\'re already paying the cost of unclear flow. A 3–6 week diagnostic prevents months of reactive firefighting.'
    },
    {
      objection: 'This sounds like IT',
      reframe: 'No build. This is operational diagnostics—mapping how work actually flows, where handoffs break, and what risks exist. You implement fixes internally or with any partner.'
    },
    {
      objection: 'We already do Lean',
      reframe: 'This closes handoff/data/detection gaps that Lean tools often miss. We map the actual system interactions, not just the process steps, revealing where flow breaks between teams and tools.'
    },
    {
      objection: 'Too expensive',
      reframe: 'Anchor to one incident. A single production stop, quality escape, or compliance gap can cost multiples of this engagement. This is pre-incident insurance with actionable intelligence.'
    },
    {
      objection: 'We can do this internally',
      reframe: 'You can, but will you? Internal teams are often too close to see patterns, lack cross-functional visibility, or get deprioritized. We bring fresh eyes and a time-boxed commitment.'
    },
    {
      objection: 'What if we find nothing?',
      reframe: 'Then you\'ve validated your operational maturity and have documentation to prove it. Most organizations find 20–40 risks they didn\'t know existed, but confirmation is valuable too.'
    },
    {
      objection: 'We need implementation, not assessment',
      reframe: 'Start with clarity. Implementing without understanding flow and risk often creates new problems. This diagnostic ensures you fix the right things in the right order.'
    },
    {
      objection: 'Our processes are documented',
      reframe: 'Documented processes rarely match reality. We map what actually happens—exceptions, workarounds, and gaps between systems. That\'s where risk lives.'
    },
    {
      objection: 'This will disrupt operations',
      reframe: 'Minimal disruption. We work alongside operations, using interviews and data analysis. No system changes, no downtime. Most teams find the visibility helpful.'
    },
    {
      objection: 'We\'re too small for this',
      reframe: 'Small teams benefit most. Early clarity prevents scaling problems. A $15k–$25k Entry engagement can prevent costly mistakes as you grow.'
    },
    {
      objection: 'We need regulatory compliance',
      reframe: 'Regulatory frameworks are out of scope, but we identify where compliance risks exist in your operational flow. You can then engage compliance specialists with clear context.'
    },
    {
      objection: 'What\'s the ROI?',
      reframe: 'ROI ≈ (avoided downtime + avoided scrap/rework + reduced premium freight + reduced overtime + avoided penalties) – remediation costs. One prevented incident typically pays for the engagement.'
    }
  ];


  const objectionAccordionItem = (item: { objection: string, reframe: string }) => {
    return <AccordionItem key={item.objection} value={item.objection} className="w-full">
      <AccordionTrigger>
        <div className="flex gap-4 items-center text-xl">
          <Quote size={20} className="flex-shrink-0"/>
          {item.objection}
          {/*<Quote size={20} className="self-baseline"/>*/}

        </div>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-8">
        <p>{item.reframe}</p>
      </AccordionContent>
    </AccordionItem>;
  };

  return (
    <section className="section bg-gradient-to-b from-background to-background-alt">
      <div className="container-tight">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="section-heading mb-12"
          >Frequently asked questions
          </motion.h2>
          <Accordion
            type="single"
            collapsible
            defaultValue="integration"
            className="w-full mx-auto border-b border-b-gray-700"
          >
            {objections.map((item) => (
              <motion.div
                key={item.objection}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-50px' }}
              >
                {objectionAccordionItem(item)}
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}