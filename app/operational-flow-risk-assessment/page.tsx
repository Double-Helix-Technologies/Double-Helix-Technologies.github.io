'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';
import Pricing from '@/app/operational-flow-risk-assessment/Pricing';
import Signals from '@/app/operational-flow-risk-assessment/Signals';
import Process from '@/app/operational-flow-risk-assessment/Process';
import Deliverables from '@/app/operational-flow-risk-assessment/Deliverables';
import { Button } from '@/app/components/ui/button';
import Faq from '@/app/operational-flow-risk-assessment/Faq';

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

  const actionButtons =
    <motion.div
      variants={fadeInUp}
      className="flex flex-col sm:flex-row justify-center items-center gap-4"
    >
      <Button variant="gradient">
        <Link href="/contact">
          Book a discovery call
        </Link>
        <ArrowRight size={16}/>
      </Button>

      {/*<Button variant="secondary">*/}
      {/*  <a*/}
      {/*    href="/assets/operational-flow-risk-onepager.pdf"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Download the one-pager*/}
      {/*  </a>*/}
      {/*  <FileText size={16}/>*/}
      {/*</Button>*/}

    </motion.div>;

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">
        <Navigation/>
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
                className="mb-10 leading-relaxed"
              >
                We ensure operational certainty, before something breaks. A time-boxed assessment that maps your
                end-to-end execution flow, quantifies risk, and delivers a prioritized plan you can execute internally.
              </motion.p>
              {actionButtons}
            </motion.div>
          </div>
        </section>

        <Signals/>
        <Process/>
        <Deliverables/>
        <Pricing/>
        <Faq/>

        {/* Final CTA Section */}
        <section className="section bg-background-alt py-24">
          <div className="container-tight">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl text-text-primary mb-6"
              >
                In weeks, you'll know where flow breaks, who owns it, and what to fix first.
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-text-secondary mb-10"
              >
                Get operational certainty before something breaks.
              </motion.p>
              {actionButtons}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer/>
    </ThemeProvider>
  );
}
