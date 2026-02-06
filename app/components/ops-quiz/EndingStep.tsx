'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ending } from '@/app/data/opsQuiz';
import { cn } from '@/app/utils/cn';
import { track } from '@/app/utils/analytics';

interface EndingStepProps {
  ending: Ending;
  onSoftFollowUp?: (choice: string) => void;
  onProceedToLeadCapture?: () => void;
}

const SOFT_FOLLOW_UP_OPTIONS = ['Visibility', 'Rework', 'Ownership'];

export default function EndingStep({ ending, onSoftFollowUp, onProceedToLeadCapture }: EndingStepProps) {
  const [softFollowUpChoice, setSoftFollowUpChoice] = useState<string | null>(null);
  const [hasSubmittedFollowUp, setHasSubmittedFollowUp] = useState(false);

  const handleSoftFollowUp = (choice: string) => {
    setSoftFollowUpChoice(choice);
    setHasSubmittedFollowUp(true);
    if (onSoftFollowUp) {
      onSoftFollowUp(choice);
    }
    track('quiz_soft_followup', { choice, endingId: ending.id });
    if (onProceedToLeadCapture) {
      setTimeout(() => {
        onProceedToLeadCapture();
      }, 500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-text-primary">
          {ending.title}
        </h2>
        <p className="text-lg text-text-secondary leading-relaxed max-w-xl mx-auto">
          {ending.text}
        </p>
      </div>

      {!hasSubmittedFollowUp && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="space-y-4 pt-4"
        >
          <p className="text-base text-text-primary text-center font-medium">
            If you could fix ONE thing first - which would reduce stress the most?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            {SOFT_FOLLOW_UP_OPTIONS.map((option) => (
              <motion.button
                key={option}
                type="button"
                onClick={() => handleSoftFollowUp(option)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'flex-1 min-w-[100px] px-6 py-3 rounded-xl border-2 font-medium transition-all duration-300',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lilac focus-visible:ring-offset-2 focus-visible:ring-offset-background-alt',
                  softFollowUpChoice === option
                    ? 'border-accent-lilac bg-accent-lilac/20 text-text-primary shadow-lg'
                    : 'border-border/50 bg-background-alt/30 text-text-secondary hover:border-transparent hover:bg-gradient-to-tr hover:from-accent-pink hover:to-accent-blue hover:text-white hover:shadow-lg'
                )}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {hasSubmittedFollowUp && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center pt-4"
        >
          <p className="text-base text-text-secondary">Thank you! We'll ask for your email next.</p>
        </motion.div>
      )}
    </motion.div>
  );
}
