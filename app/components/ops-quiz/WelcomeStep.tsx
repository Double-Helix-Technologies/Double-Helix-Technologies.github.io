'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/button';

interface WelcomeStepProps {
  onStart: () => void;
}

export default function WelcomeStep({ onStart }: WelcomeStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center space-y-6"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary mb-4">
        How in control are you, really?
      </h1>
      <p className="text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
        A 90-second operations quiz for manufacturing & life sciences.
        <br />
        No judgement - just a quick way to spot where stress and risk hide.
      </p>
      <div className="pt-4">
        <Button
          variant="gradient"
          size="lg"
          onClick={onStart}
          className="px-8"
        >
          Start
        </Button>
      </div>
    </motion.div>
  );
}
