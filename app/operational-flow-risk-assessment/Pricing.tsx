import { motion } from 'framer-motion';
import { Card } from '@/app/components/ui/card';
import { Separator } from '@/app/components/ui/separator';
import React from 'react';
import { CalendarClock, HeartHandshake, Notebook, UsersRound } from 'lucide-react';

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

const pricingTiers = [
  {
    name: 'Entry',
    range: '$15k – $25k',
    description: 'Single process or system flow',
    package: [],
    timeline: '~14 weeks'
  },
  {
    name: 'Standard',
    range: '$30k – $60k',
    description: 'Cross-functional flows, multiple systems',
    package: [],
    timeline: '~21-28 weeks'
  },
  {
    name: 'Enterprise',
    range: '$75k – $150k',
    description: 'End-to-end value streams, complex ecosystems',
    package: [],
    timeline: '~35-42 weeks'


  },
  {
    name: 'Optional add-ons',
    range: '',
    description: 'Enhance any of the packages above with the addons',
    package: [],
    timeline: '',
    style: 'bg-gradient-to-tr from-purple-500/20 to-blue-500/20 border-0'
  }

];

const addOns = [
  {
    group: 'Design & strategy',
    icon: Notebook,
    addons: [
      'Observability blueprint',
      'Integration roadmap'
    ]
  }, {
    group: 'People & processes',
    icon: UsersRound,
    addons: [
      'SOP advisory',
      'Training'
    ]
  }, {
    group: 'Execution & continuity',
    icon: HeartHandshake,
    addons: [
      'Vendor coordination',
      'Quarterly re-scan',
      'Execution of roadmap',
      'Ongoing maintenance'
    ]
  }

];

const roiCopyOg = 'One production stop, quality escape, or compliance gap can cost multiples of this engagement. This is\n' +
  'pre-incident insurance with actionable intelligence. Most organizations find risks they didn\'t know\n' +
  'existed - risks that, if left unaddressed, would have caused incidents costing far more than the\n' +
  'assessment.';

const roiCopyV2 = 'One production stop, quality escape, or compliance gap can cost multiples of this engagement, not just in downtime and scrap, ' +
  'but in lost stakeholder trust and reputational damage. Instead of paying that price reactively, ' +
  'you pay once upfront to identify and eliminate those risks. You get flow maps, a risk register, and a 30/60/90 fix plan. Prevention beats crisis management.';

export default function Pricing() {

  const addonBadge = (addon: string) => {
    return <div key={addon} className="m-1 items-center rounded-xl px-3 py-1 text-sm font-medium bg-background">
      {addon}
    </div>;
  };

  const addonGroup = (group: any) => {
    const Icon = group.icon;
    return (
      <div key={group.group}>
        <div className="flex items-center gap-2">
          <Icon strokeWidth={1.5}/>
          <h3 className="text-lg md:text-xl text-text-primary">
            {group.group}
          </h3>
        </div>
        <div className="flex flex-wrap space-x-2 m-4">
          {group.addons.map((addon: string) => (addonBadge(addon)))}
        </div>
      </div>
    );
  };

  const addons = <div>
    {addOns.map((addon) => (addonGroup(addon)))}
  </div>;

  const packageCard = (tier: any) => {
    return <Card
      className={`p-8 h-full w-full border border-border ${tier.style}`}>
      <div className="grid md:grid-col-3 grid-cols-1 md:gap-8 gap-6">
        <div className="space-y-2">
          <h3 className="col-span-1 text-3xl font-semibold text-text-primary">
            {tier.name}
          </h3>
          <p>
            {tier.description}
          </p>
        </div>
        <div className="md:col-start-2 col-span-2 text-end space-y-2">
          <p
            className="text-4xl  flex flex-nowrap font-bold
          text-transparent bg-clip-text bg-gradient-to-tr from-purple-500 to-blue-500">
            {tier.range}
          </p>
        </div>
      </div>
      <div className="h-fit">
        <Separator className="my-4 opacity-50"/>
      </div>
      {tier.timeline && <div className="text-text-secondary flex flex-wrap space-x-2">
        <CalendarClock strokeWidth={1.5}/>
        <p className="text-text-secondary align-text-top">
          {tier.timeline}
        </p>
      </div>
      }
      {tier.name === 'Optional add-ons' && (addons)}
    </Card>;
  };

  return (
    <section className="section">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="container-tight grid lg:grid-cols-2 gap-10"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="space-y-5 mb-10 lg:sticky lg:top-20 lg:h-fit"
        >

          <motion.h2
            variants={fadeInUp}
            className="section-heading mb-12"
          >
            Pricing
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="max-w-xl space-y-5"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-xl md:text-3xl text-text-primary">
              ROI: Cheaper than a single Incident
            </motion.h3>

            <p className="text-text-secondary leading-relaxed max-w-md">
              {roiCopyV2}
            </p>
            <div className="font-mono text-sm text-text-primary mb-4">
              ROI ≈ (avoided downtime + avoided scrap/rework + reduced premium freight + reduced overtime +
              avoided penalties + avoided reputation damage) – remediation costs
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 mb-12 relative">
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={fadeInUp}
            >
              {packageCard(tier)}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}