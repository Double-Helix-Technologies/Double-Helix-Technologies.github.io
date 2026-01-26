"use client";

import { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { CardSpotlight } from "./ui/CardSpotlight";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { caseStudies, colorClasses } from "../data/caseStudies";

export default function CaseStudiesSlider() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (idx: number) => {
    setExpandedCard(expandedCard === idx ? null : idx);
  };

  return (
    <section className="relative w-full bg-background-alt py-20 px-4 md:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Case Studies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {caseStudies.map((study, idx) => {
            const colors = colorClasses[study.color];
            const isExpanded = expandedCard === idx;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <CardSpotlight
                  className="cursor-pointer transition-all duration-300 min-h-[420px]"
                  color={colors.glow}
                  radius={400}
                  onClick={() => toggleCard(idx)}
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex-1">
                      {/* Category badge */}
                      <div className={`inline-flex self-start px-3 py-1 rounded-full ${colors.bg} ${colors.border} border mb-6`}>
                        <span className={`text-xs font-medium tracking-wide uppercase ${colors.text}`}>
                          {study.caseTitle}
                        </span>
                      </div>

                      <div className="mb-3">
                        <AnimatedCounter
                          value={study.stat}
                          from={study.statFrom}
                          suffix={study.statSuffix}
                          className={`text-4xl md:text-5xl font-bold ${colors.text}`}
                        />
                      </div>

                      <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-2">
                        {study.statLabel}
                      </h3>

                      <p className="text-text-secondary text-sm mb-5">
                        {study.subtitle}
                      </p>
                    </div>

                    <AnimatePresence mode="sync">
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            ease: "easeInOut",
                            opacity: { duration: 0.25 }
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pb-6 border-t border-border space-y-6">
                            <div>
                              <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500" />
                                Problem
                              </h4>
                              <p className="text-sm text-text-secondary leading-relaxed">
                                {study.details.problem}
                              </p>
                            </div>

                            <div>
                              <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500" />
                                Solution
                              </h4>
                              <p className="text-sm text-text-secondary leading-relaxed">
                                {study.details.solution}
                              </p>
                            </div>

                            <div>
                              <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${colors.text.replace('text-', 'bg-')}`} />
                                Outcomes
                              </h4>
                              <ul className="space-y-2">
                                {study.details.outcomes.map((outcome, outIdx) => (
                                  <li key={outIdx} className="flex gap-2 text-sm text-text-secondary">
                                    <CheckCircle2 className={`h-4 w-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                                    <span>{outcome}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      className={`mt-auto w-full py-3 px-4 rounded-xl ${colors.bg} ${colors.border} border ${colors.text} font-medium transition-all hover:bg-opacity-20 flex items-center justify-center gap-2`}
                    >
                      {isExpanded ? 'Show Less' : 'Read Full Case Study'}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </button>
                  </div>
                </CardSpotlight>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}