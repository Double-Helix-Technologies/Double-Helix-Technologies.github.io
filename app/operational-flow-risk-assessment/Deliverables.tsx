import { motion } from 'framer-motion';
import { AlertTriangle, FileBarChart, ListChecks, Map, Plus, Presentation, Shield, Waypoints } from 'lucide-react';
import React, { ForwardRefExoticComponent } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Separator } from '@/app/components/ui/separator';
import { Badge } from '@/app/components/ui/badge';

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

const deliverables = [
  {
    icon: Map,
    title: 'End-to-End Flow Maps',
    tagline: 'Stop guessing at bottlenecks',
    description: 'See exactly where work stalls and which exceptions bypass your process',
    definition: 'All touchpoints documented; exceptions mapped; evidence linked'
  },
  {
    icon: Shield,
    title: 'Prioritized Risk Register',
    tagline: 'Know what to fix first',
    description: 'Every operational risk scored by impact and probability, with clear ownership assigned',
    definition: 'Owners assigned; exceptions mapped; evidence linked'
  },
  {
    icon: ListChecks,
    title: 'Triage Action Plan',
    tagline: 'Stop debating priorities',
    description: 'Every risk sorted into Fix Now, Fix Later, or Defer with rationale you can defend to stakeholders',
    definition: 'All risks categorized; rationale documented'
  },
  {
    icon: Waypoints,
    title: 'Phased Remediation Roadmap',
    tagline: 'Start fixing things Monday',
    description: 'A week-by-week plan for the next 90 days - dependencies mapped, resources estimated, quick wins front-loaded',
    definition: 'Sequenced by dependency; resource estimates included; quick wins prioritized in first 30 days'
  },
  {
    icon: Presentation,
    title: 'Stakeholder Readout Deck',
    tagline: 'Get buy-in without starting from scratch',
    description: 'A presentation-ready summary of findings, risks, and the fix plan built for your leadership team',
    definition: 'Stakeholder-ready; action items clear'
  },
  {
    icon: FileBarChart,
    title: 'Executive Summary Memo',
    tagline: 'Brief your CEO in 5 minutes',
    description: 'A single-page brief for C-suite or board review',
    definition: 'C-level appropriate; decision-ready',
    optional: true
  }
];

const boundaries = [
  {
    title: 'One size fits all solutions',
    description: 'Generic templates, unmapped findings, or a report that sits on a shelf. Every deliverable is designed and customized to your operations.'
  },
  {
    title: 'Implementation or integration builds',
    description: 'We map, diagnose, and plan. Implementation happens separately—in-house, with another partner, or with us in a follow-on engagement.'
  },
  {
    title: 'Regulatory frameworks out of scope',
    description: 'We identify where compliance risks exist in your operational flow, but regulatory interpretation and compliance frameworks are handled by specialists.'
  }
];

export default function Deliverables() {

  const deliverableCard = (deliverable: {
    title: string,
    tagline: string,
    description: string,
    definition: string,
    optional?: boolean,
    icon: ForwardRefExoticComponent<any>
  }) => {
    const Icon = deliverable.icon;

    return <Card className="bg-background h-full">
      {deliverable.optional && <Badge variant="outline"
                                      className={'m-4 absolute opacity-70 dark:bg-transparent bg-background-alt'}>optional</Badge>}

      <CardHeader className="items-center pb-0">
        <Icon size={36} strokeWidth={1.5} className="my-4"/>
        <CardTitle className="text-lg text-center">
          {deliverable.title}
        </CardTitle>
        <CardDescription className="text-text-secondary">
          {deliverable.tagline}
        </CardDescription>
      </CardHeader>
      <CardContent className="items-center">
        <Separator className="my-4"/>
        <p className="">{deliverable.description}</p>
      </CardContent>
    </Card>;
  };

  return (
    <section className="section bg-gradient-to-t from-background to-background-alt">
      <div className="container-tight space-y-5">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="section-heading mb-3 md:mb-5 text-center"
          >
            What you get
          </motion.h2>
          <motion.p className="text-center mb-10 md:mb-12">
            All deliverables are designed for internal execution.<br/> You own the plan and choose how to execute it.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
              >
                {deliverableCard(item)}
              </motion.div>
            ))}
          </div>
          <Separator className="my-10"/>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="px-6 md:px-10 pb-6"
        >

          <div className="flex gap-2 items-bottom">
            <AlertTriangle size={28} strokeWidth={1.8} className="flex-shrink-0 mt-1.5"/>
            <h3 className="text-2xl md:text-3xl font-semibold text-text-primary mb-8">
              What you don't get
            </h3>
          </div>
          <div className="space-y-4">
            <ul className="space-y-4">
              {boundaries.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <Plus size={24} className="rotate-45 flex-shrink-0 mt-0.5"/>
                  <div>
                    <p className="text-lg font-semibold text-text-primary mb-1">{item.title}</p>
                    <p className="text-text-secondary">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        <Separator/>
      </div>
    </section>
  );
}