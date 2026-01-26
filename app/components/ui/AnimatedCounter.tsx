"use client";

import {useEffect, useRef, useState} from "react";
import {motion, useInView, useMotionValue, useSpring} from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  from?: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  from,
  suffix = "",
  className = ""
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const startValue = from ?? 0;
  const motionValue = useMotionValue(startValue);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(startValue);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [springValue]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {displayValue}
      {suffix}
    </motion.span>
  );
}
