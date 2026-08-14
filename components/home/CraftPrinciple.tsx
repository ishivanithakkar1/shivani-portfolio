"use client";

import { motion, useReducedMotion } from "motion/react";

type CraftPrincipleProps = {
  heading: string;
  description: string;
  delay: number;
  index: number;
};

export function CraftPrinciple({
  heading,
  description,
  delay,
  index,
}: CraftPrincipleProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.4 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="glass-panel group rounded-xl p-8 transition-all duration-500 hover:border-accent-indigo/40 hover:bg-surface-glass/90"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono-code text-xs text-accent-cyan tracking-widest">
          0{index + 1}
        </span>
        <span className="h-[1px] w-12 bg-white/10 group-hover:w-20 group-hover:bg-accent-cyan/50 transition-all duration-500" />
      </div>

      <h3 className="font-sans text-xl font-bold tracking-tight text-text-primary group-hover:text-white transition-colors">
        {heading}
      </h3>

      <p className="mt-3 text-base text-text-secondary font-light leading-relaxed">
        {description}
      </p>
    </motion.article>
  );
}
