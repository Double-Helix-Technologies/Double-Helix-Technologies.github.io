'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Question, QuestionOption } from '@/app/data/opsQuiz';
import { cn } from '@/app/utils/cn';

interface QuestionStepProps {
  question: Question;
  selectedOption: QuestionOption['id'] | null;
  onSelect: (optionId: QuestionOption['id']) => void;
  onNext: () => void;
  onBack: () => void;
  canGoBack: boolean;
}

export default function QuestionStep({
  question,
  selectedOption,
  onSelect,
  onNext,
  onBack,
  canGoBack,
}: QuestionStepProps) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    setFocusedIndex(null);
    optionRefs.current = [];
  }, [question.id]);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = index < question.options.length - 1 ? index + 1 : 0;
      setFocusedIndex(nextIndex);
      optionRefs.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = index > 0 ? index - 1 : question.options.length - 1;
      setFocusedIndex(prevIndex);
      optionRefs.current[prevIndex]?.focus();
    } else if (e.key === 'Enter' && focusedIndex !== null) {
      e.preventDefault();
      const option = question.options[focusedIndex];
      if (option) {
        onSelect(option.id);
      }
    }
  };

  const handleSelect = (optionId: QuestionOption['id']) => {
    onSelect(optionId);
    const delay = prefersReducedMotion.current ? 0 : 300;
    setTimeout(() => {
      onNext();
    }, delay);
  };

  const getIndicatorColor = (optionId: QuestionOption['id']): string => {
    switch (optionId) {
      case 'A': return 'bg-green-500'; // Green
      case 'B': return 'bg-yellow-400'; // Bright Yellow
      case 'C': return 'bg-orange-500'; // Medium Orange/Amber
      case 'D': return 'bg-red-600'; // Dark Red
      default: return 'bg-gray-400';
    }
  };

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: prefersReducedMotion.current ? 0 : 0.3 }}
      className="space-y-6"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-8">
        {question.text}
      </h2>

      <div className="space-y-3" role="radiogroup" aria-label={question.text}>
        {question.options.map((option, index) => {
          const isSelected = selectedOption === option.id;
          const isFocused = focusedIndex === index;

          return (
            <motion.button
              key={option.id}
              ref={(el) => {
                optionRefs.current[index] = el;
              }}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => handleSelect(option.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onFocus={() => setFocusedIndex(index)}
              onBlur={() => {
                if (!isSelected) {
                  setFocusedIndex(null);
                }
              }}
              className={cn(
                'w-full text-left p-4 md:p-5 rounded-xl border-2 transition-all',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lilac focus-visible:ring-offset-2 focus-visible:ring-offset-background-alt',
                isSelected
                  ? 'bg-accent-lilac/20 border-accent-lilac text-text-primary shadow-lg'
                  : 'bg-background-alt/30 border-border/50 text-text-secondary hover:border-accent-lilac/50 hover:bg-background-alt/50',
                isFocused && !isSelected && 'border-accent-lilac/70 bg-background-alt/40'
              )}
            >
              <div className="flex items-start gap-3">
                <div
                  className={cn(
                    'flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5',
                    isSelected
                      ? 'border-accent-lilac bg-accent-lilac'
                      : 'border-border'
                  )}
                >
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 rounded-full bg-white"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-base mb-1">
                    {option.label}
                  </div>
                </div>
                <div className={cn(
                  'flex-shrink-0 w-3 h-3 rounded-full mt-1.5',
                  getIndicatorColor(option.id)
                )} />
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="flex justify-between items-center pt-4">
        {canGoBack && (
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-text-secondary"
          >
            Back
          </Button>
        )}
        <div className="flex-1" />
      </div>
    </motion.div>
  );
}
