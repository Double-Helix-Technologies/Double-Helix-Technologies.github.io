import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import React from 'react';
import { faqItems } from './faqData';

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

  const objectionAccordionItem = (item: { question: string, answer: string }) => {
    return <AccordionItem key={item.question} value={item.question} className="w-full">
      <AccordionTrigger>
        <div className="flex gap-4 items-center text-xl">
          <Quote size={20} className="flex-shrink-0"/>
          {item.question}
        </div>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-8">
        <p>{item.answer}</p>
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
            {faqItems.map((item) => (
              <motion.div
                key={item.question}
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
