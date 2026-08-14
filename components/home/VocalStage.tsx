"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { FrequencySignature } from "@/components/ui/FrequencySignature";

export function VocalStage() {
  return (
    <Section id="vocal-stage" className="relative py-28 md:py-36">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-white/10 pb-10">
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2">
                <span className="h-[1px] w-6 bg-accent-amber/60" />
                <p className="font-mono-code text-[11px] font-medium uppercase tracking-[0.25em] text-accent-amber">
                  // VOCAL STAGE & ACOUSTIC STUDIO
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="mt-3 font-serif-display text-4xl font-light italic text-text-primary md:text-6xl">
                Vocal Performances & Melodies
              </h2>
            </FadeIn>
          </div>

          {/* Social Studio Channels */}
          <FadeIn delay={0.2}>
            <div className="flex items-center gap-3 font-mono-code text-xs">
              <a
                href="https://www.youtube.com/@shivani_sings7721"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-text-primary hover:border-rose-500/50 hover:text-rose-400 transition-all"
              >
                <span className="text-rose-500">▶</span>
                <span>YouTube @shivani_sings7721</span>
              </a>

              <a
                href="https://instagram.com/i_shivanithakkar"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-text-primary hover:border-accent-amber/50 hover:text-accent-amber transition-all"
              >
                <span>📷</span>
                <span>Instagram @i_shivanithakkar</span>
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Live Frequency Signature & Studio Stage */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          
          {/* Left Column: Real Studio Vocal Feature Card */}
          <div className="md:col-span-7">
            <FadeIn delay={0.2}>
              <div className="glass-panel group relative overflow-hidden rounded-3xl p-8 backdrop-blur-2xl border-white/10 shadow-2xl">
                <div className="flex items-center justify-between font-mono-code text-xs text-text-muted mb-4">
                  <span className="text-accent-amber">// LIVE VOCAL REPERTOIRE</span>
                  <span>RECORDED AT STUDIO FREQUENCY</span>
                </div>

                <h3 className="font-serif-display text-3xl font-light italic text-text-primary group-hover:text-white transition-colors">
                  Acoustic Covers & Vocal Experiments
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-text-secondary font-light">
                  A curated collection of live vocal performances, acoustic arrangements, and improvisational runs. Exploring the intersection where vocal timbre meets electronic frequency.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
                  <a
                    href="https://www.youtube.com/@shivani_sings7721"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-accent-amber to-rose-500 px-6 py-3 font-mono-code text-xs font-semibold text-white shadow-lg shadow-accent-amber/20 transition-all duration-300 hover:opacity-90"
                  >
                    <span>Watch Full YouTube Performances</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Oscilloscope Frequency Interactive Signature */}
          <div className="md:col-span-5">
            <FadeIn delay={0.3}>
              <FrequencySignature />
            </FadeIn>
          </div>

        </div>
      </Container>
    </Section>
  );
}
