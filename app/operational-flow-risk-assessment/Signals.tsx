import { motion } from 'framer-motion';
import { ArrowDownRight, EyeOff, Shredder, Siren } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import React, { ForwardRefExoticComponent } from 'react';
import { Separator } from '@/app/components/ui/separator';

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

const groupedSignals = [
  {
    topic: 'Inefficiency is a New Normal',
    tagline: 'Every rework cycle, every expedited shipment, and every system mismatch adds up to thousands in preventable costs.',
    signals: [
      'Constant rework loops',
      'Premiums (freight/overtime) spike',
      'Recurring near-misses or incidents',
      'Multiple systems don\'t align'
    ],
    icon: Shredder
  },
  {
    topic: 'Firefighting is Your Default',
    tagline: 'When everything is urgent, nothing gets done right - your team burns out chasing exceptions instead of executing strategy.',
    signals: [
      'Expedite requests are routine',
      'Exceptions bypass standard process',
      'Priorities shift without clear rationale',
      'Reactive vendor coordination'
    ],
    icon: Siren
  },
  {
    topic: 'Your Process is a Black Box',
    tagline: 'Without real-time visibility, you\'re guessing at bottlenecks, losing weeks to handoff delays you didn\'t even know existed',
    signals: [
      'Unclear WIP visibility',
      'Unpredictable cycle times',
      'Metrics that don\'t match reality',
      'Handoffs lack clear ownership'
    ],
    icon: EyeOff
  }
];

export default function Signals() {

  const signalCard = (signalGroup: {
    topic: string,
    tagline: string,
    signals: string[],
    icon: ForwardRefExoticComponent<any>
  }) => {
    const Icon = signalGroup.icon;

    return <Card className="bg-background items-center h-full">
      <CardHeader className="space-y-4 items-center">
        <Icon size={36} strokeWidth={1.5} className="my-4"/>
        <CardTitle className="text-lg text-center">
          {signalGroup.topic}
        </CardTitle>
        <CardDescription className="text-md text-center text-text-secondary">
          {signalGroup.tagline}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Separator className="mb-6"/>
        <ul className="space-y-2">
          {signalGroup.signals.map((signal) => (
            <li key={signal} className="flex gap-2">
              <ArrowDownRight size={16} strokeWidth={1} className="mt-1"/>
              <p>{signal}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>;
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
            className="section-heading mb-12 md:mb-16 text-center"
          >
            Your pain points
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {groupedSignals.map((group) => (
              <motion.div
                key={group.topic}
                variants={fadeInUp}
              >
                {signalCard(group)}
              </motion.div>

            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}