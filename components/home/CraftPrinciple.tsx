"use client";

import { motion, useReducedMotion } from "motion/react";

type CraftPrincipleProps = {
  heading: string;
  description: string;
  delay: number;
};

export function CraftPrinciple({
  heading,
  description,
  delay,
}: CraftPrincipleProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0.82, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.6 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <h3 className="text-2xl font-normal leading-none tracking-[-0.03em] text-text-primary md:text-3xl">
        {heading}
      </h3>
      <p className="mt-4 max-w-xl text-lg leading-8 text-text-secondary">
        {description}
      </p>
    </motion.article>
  );
}
