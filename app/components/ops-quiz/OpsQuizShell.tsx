'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/app/utils/cn';

interface OpsQuizShellProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  showProgress?: boolean;
}

export default function OpsQuizShell({
  children,
  currentStep,
  totalSteps,
  showProgress = true,
}: OpsQuizShellProps) {
  const progress = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-lilac/10 via-transparent to-accent-blue/10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-2xl">
        {showProgress && totalSteps > 0 && (
          <div className="mb-6 flex items-center justify-between text-sm text-text-secondary">
            <span className="font-medium">
              {currentStep} / {totalSteps}
            </span>
            <div className="flex-1 mx-4 h-1 bg-background-alt rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-lilac to-accent-blue"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={cn(
            'bg-background-alt/80 backdrop-blur-sm',
            'rounded-2xl border border-border/50',
            'shadow-xl',
            'p-6 md:p-8 lg:p-10'
          )}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
