"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileText,
  Layers,
  Map,
  Target,
  TrendingUp,
  Users,
  Zap,
  ArrowLeftRight,
  Eye,
  AlertCircle,
  Handshake,
  Calendar,
  BarChart3,
  Shield,
  ListChecks,
  Presentation,
  FileBarChart,
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';
import { cn } from '../utils/cn';
import styles from './page.module.css';

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

export default function OperationalFlowRiskAssessmentPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const signals = [
    { icon: Zap, text: "Expedite requests are routine" },
    { icon: ArrowLeftRight, text: "Rework loops are common" },
    { icon: Eye, text: "WIP visibility is unclear" },
    { icon: Users, text: "Handoffs lack clear ownership" },
    { icon: AlertCircle, text: "Exceptions bypass standard process" },
    { icon: Clock, text: "Cycle times are unpredictable" },
    { icon: TrendingUp, text: "Premiums (freight/overtime) spike" },
    { icon: AlertTriangle, text: "Near-misses or incidents occur" },
    { icon: Layers, text: "Multiple systems don't align" },
    { icon: Handshake, text: "Vendor coordination is reactive" },
    { icon: BarChart3, text: "Metrics don't match reality" },
    { icon: Target, text: "Priorities shift without clear rationale" },
  ];

  const deliverables = [
    {
      icon: Map,
      title: "End-to-End Flow Maps",
      description: "Ops + Systems mapped from trigger to completion",
      definition: "All touchpoints documented; exceptions mapped; evidence linked"
    },
    {
      icon: Shield,
      title: "Risk Register",
      description: "Scored + owned risks with impact/probability",
      definition: "Owners assigned; exceptions mapped; evidence linked"
    },
    {
      icon: ListChecks,
      title: "Fix Now / Fix Later / Defer",
      description: "Triage framework applied to all identified risks",
      definition: "All risks categorized; rationale documented"
    },
    {
      icon: Calendar,
      title: "Sequenced 30/60/90 Plan",
      description: "Prioritized remediation roadmap",
      definition: "Dependencies mapped; resources estimated"
    },
    {
      icon: Presentation,
      title: "Executive Readout Deck",
      description: "Findings, risks, and plan summary",
      definition: "Stakeholder-ready; action items clear"
    },
    {
      icon: FileBarChart,
      title: "Board-Ready 1-Page Memo",
      description: "Optional executive summary",
      definition: "C-level appropriate; decision-ready"
    },
  ];

  const steps = [
    {
      title: "Align",
      description: "Stakeholder interviews, scope confirmation, access setup",
      duration: "Entry: ~2 weeks | Standard: 3–4 weeks | Enterprise: 5–6 weeks"
    },
    {
      title: "Map",
      description: "End-to-end flow documentation, system touchpoints, data flows",
      duration: "Entry: ~2 weeks | Standard: 3–4 weeks | Enterprise: 5–6 weeks"
    },
    {
      title: "Diagnose",
      description: "Risk identification, scoring, exception mapping",
      duration: "Entry: ~2 weeks | Standard: 3–4 weeks | Enterprise: 5–6 weeks"
    },
    {
      title: "Prioritize",
      description: "Triage framework application, impact analysis",
      duration: "Entry: ~2 weeks | Standard: 3–4 weeks | Enterprise: 5–6 weeks"
    },
    {
      title: "Plan",
      description: "Remediation sequencing, resource estimates, deliverables",
      duration: "Entry: ~2 weeks | Standard: 3–4 weeks | Enterprise: 5–6 weeks"
    },
  ];

  const pricingTiers = [
    {
      name: "Entry",
      range: "$15k–$25k",
      description: "Single process or system flow"
    },
    {
      name: "Standard",
      range: "$30k–$60k",
      description: "Cross-functional flows, multiple systems"
    },
    {
      name: "Enterprise",
      range: "$75k–$150k",
      description: "End-to-end value streams, complex ecosystems"
    },
  ];

  const addOns = [
    "Observability blueprint",
    "Integration roadmap",
    "SOP advisory",
    "Training",
    "Vendor coordination",
    "Quarterly re-scan",
    "Execution of roadmap",
    "Ongoing maintenance & support",
  ];

  const objections = [
    {
      objection: "We don't have time",
      reframe: "That's the signal. When expedites and rework consume capacity, you're already paying the cost of unclear flow. A 3–6 week diagnostic prevents months of reactive firefighting."
    },
    {
      objection: "This sounds like IT",
      reframe: "No build. This is operational diagnostics—mapping how work actually flows, where handoffs break, and what risks exist. You implement fixes internally or with any partner."
    },
    {
      objection: "We already do Lean",
      reframe: "This closes handoff/data/detection gaps that Lean tools often miss. We map the actual system interactions, not just the process steps, revealing where flow breaks between teams and tools."
    },
    {
      objection: "Too expensive",
      reframe: "Anchor to one incident. A single production stop, quality escape, or compliance gap can cost multiples of this engagement. This is pre-incident insurance with actionable intelligence."
    },
    {
      objection: "We can do this internally",
      reframe: "You can, but will you? Internal teams are often too close to see patterns, lack cross-functional visibility, or get deprioritized. We bring fresh eyes and a time-boxed commitment."
    },
    {
      objection: "What if we find nothing?",
      reframe: "Then you've validated your operational maturity and have documentation to prove it. Most organizations find 20–40 risks they didn't know existed, but confirmation is valuable too."
    },
    {
      objection: "We need implementation, not assessment",
      reframe: "Start with clarity. Implementing without understanding flow and risk often creates new problems. This diagnostic ensures you fix the right things in the right order."
    },
    {
      objection: "Our processes are documented",
      reframe: "Documented processes rarely match reality. We map what actually happens—exceptions, workarounds, and gaps between systems. That's where risk lives."
    },
    {
      objection: "This will disrupt operations",
      reframe: "Minimal disruption. We work alongside operations, using interviews and data analysis. No system changes, no downtime. Most teams find the visibility helpful."
    },
    {
      objection: "We're too small for this",
      reframe: "Small teams benefit most. Early clarity prevents scaling problems. A $15k–$25k Entry engagement can prevent costly mistakes as you grow."
    },
    {
      objection: "We need regulatory compliance",
      reframe: "Regulatory frameworks are out of scope, but we identify where compliance risks exist in your operational flow. You can then engage compliance specialists with clear context."
    },
    {
      objection: "What's the ROI?",
      reframe: "ROI ≈ (avoided downtime + avoided scrap/rework + reduced premium freight + reduced overtime + avoided penalties) – remediation costs. One prevented incident typically pays for the engagement."
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">
        <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="container-tight">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl tracking-tight font-semibold text-text-primary mb-6"
            >
              Operational System Flow & Risk Assessment
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-text-secondary mb-10 leading-relaxed"
            >
              We ensure operational certainty, before something breaks. A time-boxed assessment that maps your end-to-end execution flow, quantifies risk, and delivers a prioritized plan you can execute internally.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Book a discovery call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="/assets/operational-flow-risk-onepager.pdf"
                className="btn-secondary inline-flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download the one-pager
                <FileText className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* When This Is Happening Signals */}
      <section className="py-24 bg-background-alt">
        <div className="container-tight">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-semibold text-text-primary mb-12 text-center"
            >
              Experience or something else here
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {signals.map((signal, index) => {
                const Icon = signal.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border"
                  >
                    <Icon className="h-6 w-6 text-accent-green flex-shrink-0 mt-0.5" />
                    <p className="text-text-primary">{signal.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get Deliverables */}
      <section className="py-24">
        <div className="container-tight">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-semibold text-text-primary mb-12 text-center"
            >
              What you get
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deliverables.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="p-6 bg-background-alt rounded-lg border border-border"
                  >
                    <Icon className="h-8 w-8 text-accent-green mb-4" />
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary mb-4">
                      {item.description}
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-text-secondary italic">
                        <strong className="text-text-primary">Definition of done:</strong> {item.definition}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-24 bg-background-alt">
        <div className="container-tight">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-semibold text-text-primary mb-12 text-center"
            >
              How it works
            </motion.h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-semibold text-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold text-text-primary md:hidden">
                      {step.title}
                    </h3>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-text-primary mb-2 hidden md:block">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary mb-3">
                      {step.description}
                    </p>
                    <p className="text-sm text-text-secondary italic">
                      {step.duration}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scope Boundary Box */}
      <section className="py-24">
        <div className="container-tight">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="p-8 md:p-12 bg-background-alt border-2 border-border rounded-lg"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-6">
              Scope boundary
            </h2>
            <div className="space-y-4 text-text-secondary">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-accent-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-text-primary mb-1">Diagnostic-only: no implementation, no integrations build</p>
                  <p>This engagement maps, diagnoses, and plans. Implementation happens separately—in-house, with another partner, or with us in a follow-on engagement.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-accent-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-text-primary mb-1">Regulatory frameworks out of scope</p>
                  <p>We identify where compliance risks exist in your operational flow, but regulatory interpretation and compliance frameworks are handled by specialists.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-text-primary mb-1">You can implement in-house / with another partner / with us later</p>
                  <p>All deliverables are designed for internal execution. You own the plan and choose how to execute it.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing / Packaging */}
      <section className="py-24 bg-background-alt">
        <div className="container-tight">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-semibold text-text-primary mb-12 text-center"
            >
              Pricing & packaging
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-8 bg-background rounded-lg border border-border"
                >
                  <h3 className="text-2xl font-semibold text-text-primary mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-3xl font-bold text-accent-green mb-4">
                    {tier.range}
                  </p>
                  <p className="text-text-secondary">
                    {tier.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div
              variants={fadeInUp}
              className="mt-12"
            >
              <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">
                Add-ons
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {addOns.map((addon, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-4 bg-background rounded-lg border border-border"
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent-green flex-shrink-0" />
                    <span className="text-text-primary">{addon}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ROI Narrative */}
      <section className="py-24">
        <div className="container-tight">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-semibold text-text-primary mb-12 text-center"
            >
              ROI: cheaper than an incident (put above pricing)
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto"
            >
              <div className="p-8 bg-background-alt rounded-lg border border-border mb-8">
                <div className="font-mono text-lg md:text-xl text-text-primary text-center mb-4">
                  ROI ≈ (avoided downtime + avoided scrap/rework + reduced premium freight + reduced overtime + avoided penalties) – remediation costs
                </div>
              </div>
              <p className="text-lg text-text-secondary text-center leading-relaxed">
                One production stop, quality escape, or compliance gap can cost multiples of this engagement. This is pre-incident insurance with actionable intelligence. Most organizations find risks they didn't know existed—risks that, if left unaddressed, would have caused incidents costing far more than the assessment.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Objections + Reframes Accordion */}
      <section className="py-24 bg-background-alt">
        <div className="container-tight">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-semibold text-text-primary mb-12 text-center"
            >
              Common questions
            </motion.h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {objections.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className={styles.accordionItem}>
                    <button
                      onClick={() => toggleAccordion(index)}
                      className={styles.accordionButton}
                      aria-expanded={openAccordion === index}
                      aria-controls={`accordion-content-${index}`}
                    >
                      <span className="font-semibold text-text-primary text-left">
                        "{item.objection}"
                      </span>
                      <ChevronDown
                        className={cn(
                          'h-5 w-5 text-text-secondary flex-shrink-0 transition-transform',
                          openAccordion === index && 'rotate-180'
                        )}
                      />
                    </button>
                    <div
                      id={`accordion-content-${index}`}
                      className={cn(
                        styles.accordionContent,
                        openAccordion === index && styles.accordionContentOpen
                      )}
                    >
                      <p className="text-text-secondary pt-2">
                        {item.reframe}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24">
        <div className="container-tight">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-semibold text-text-primary mb-6"
            >
              In weeks, you'll know where flow breaks, who owns it, and what to fix first.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-text-secondary mb-10"
            >
              Get operational certainty before something breaks.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Book a discovery call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="/assets/operational-flow-risk-onepager.pdf"
                className="btn-secondary inline-flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download the one-pager
                <FileText className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
