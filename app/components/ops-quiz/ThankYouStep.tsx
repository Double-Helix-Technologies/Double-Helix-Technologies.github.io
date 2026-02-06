'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/button';

interface ThankYouStepProps {
  onRestart: () => void;
}

export default function ThankYouStep({ onRestart }: ThankYouStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center space-y-6"
    >
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-text-primary">
          Thank you! 🙏
        </h2>
        <p className="text-lg text-text-secondary leading-relaxed max-w-xl mx-auto">
          We appreciate you taking the time to complete the quiz. We'll be in touch soon to discuss how we can help you get clarity with our product.
        </p>
      </div>

      <div className="pt-4">
        <Button
          variant="gradient"
          size="lg"
          onClick={onRestart}
          className="px-8"
        >
          Take Quiz Again
        </Button>
      </div>
    </motion.div>
  );
}
