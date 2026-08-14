"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function Arrival() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.65],
    [1, shouldReduceMotion ? 1 : 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.65],
    [1, shouldReduceMotion ? 1 : 0.94]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.65],
    [0, shouldReduceMotion ? 0 : -40]
  );

  return (
    <div ref={sectionRef} className="relative min-h-[100svh] w-full">
      <Section
        id="arrival"
        className="relative flex min-h-[100svh] flex-col items-center justify-center py-20 lg:py-28"
      >
        <motion.div
          style={{ opacity, scale, y }}
          className="w-full"
        >
          <Container>
            <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
              
              {/* Badge System Identifier */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-surface-glass/80 px-4 py-1.5 backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan"></span>
                </span>
                <span className="font-mono-code text-[11px] font-medium tracking-[0.25em] text-text-secondary uppercase">
                  {homeContent.arrival.systemBadge}
                </span>
              </motion.div>

              {/* Main Dual Identity Headline */}
              <motion.h1
                initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-1 text-balance tracking-tight"
              >
                <span className="font-serif-display text-4xl font-light italic leading-[1.05] text-text-primary/90 sm:text-6xl md:text-7xl lg:text-8xl">
                  {homeContent.arrival.headline.serifLine}
                </span>
                <span className="font-sans text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] bg-gradient-to-r from-accent-cyan via-text-primary to-accent-amber bg-clip-text text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                  {homeContent.arrival.headline.sansLine}
                </span>
              </motion.h1>

              {/* Subheading Narrative */}
              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 max-w-2xl text-base text-text-secondary sm:text-lg leading-relaxed font-light"
              >
                {homeContent.arrival.subheading}
              </motion.p>

              {/* Dual Identity Pillars */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 text-left"
              >
                {homeContent.arrival.duality.map((item, idx) => (
                  <div
                    key={item.tag}
                    className="glass-panel group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:border-white/20 hover:bg-surface-glass/90 hover:shadow-2xl"
                  >
                    <div
                      className={`absolute top-0 right-0 h-24 w-24 rounded-full blur-2xl transition-opacity duration-500 opacity-20 group-hover:opacity-40 ${
                        idx === 0 ? "bg-accent-indigo" : "bg-accent-amber"
                      }`}
                    />

                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono-code text-[10px] tracking-widest text-text-muted uppercase">
                        // {item.tag}
                      </span>
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          idx === 0 ? "bg-accent-cyan" : "bg-accent-amber"
                        }`}
                      />
                    </div>

                    <h2 className="text-lg font-semibold text-text-primary group-hover:text-white transition-colors">
                      {item.title}
                    </h2>

                    <p className="mt-2 font-mono-code text-xs text-text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
                className="mt-16"
              >
                <a
                  href="#belief"
                  className="group flex flex-col items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-ring"
                >
                  <span className="font-mono-code text-[10px] uppercase tracking-[0.35em] text-text-muted transition-colors group-hover:text-text-secondary">
                    {homeContent.arrival.scrollCue}
                  </span>
                  
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex h-7 w-4 items-start justify-center rounded-full border border-white/20 p-1"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-indigo" />
                  </motion.div>
                </a>
              </motion.div>

            </div>
          </Container>
        </motion.div>
      </Section>
    </div>
  );
}
