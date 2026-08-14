"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { contactContent } from "@/content/contact";

export function Contact() {
  const [selectedOption, setSelectedOption] = useState<string>("engineering");
  const [message, setMessage] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  const activeOptionObj =
    contactContent.options.find((o) => o.id === selectedOption) ||
    contactContent.options[0];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactContent.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSubmitted(true);
  };

  return (
    <Section id="contact" className="relative py-28 md:py-36">
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          
          {/* Left Column: Vision & Quick Direct Channels */}
          <div className="md:col-span-5">
            <FadeIn>
              <div className="inline-flex items-center gap-2">
                <span className="h-[1px] w-6 bg-accent-amber/60" />
                <p className="font-mono-code text-[11px] font-medium uppercase tracking-[0.25em] text-accent-amber">
                  // {contactContent.eyebrow}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="mt-4 font-serif-display text-3xl font-light italic leading-tight text-text-primary md:text-5xl">
                {contactContent.headline.serif}{" "}
                <span className="font-sans font-bold not-italic block text-text-secondary mt-1">
                  {contactContent.headline.sans}
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-base text-text-secondary font-light leading-relaxed">
                {contactContent.subheading}
              </p>
            </FadeIn>

            {/* Direct Quick Copy Pill */}
            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-col gap-3">
                <span className="font-mono-code text-[11px] text-text-muted uppercase tracking-widest">
                  // DIRECT STUDIO CHANNEL
                </span>

                <button
                  onClick={handleCopyEmail}
                  className="glass-panel group inline-flex items-center justify-between rounded-xl px-4 py-3 font-mono-code text-xs text-text-primary transition-all duration-300 hover:border-accent-amber/50 hover:bg-surface-glass/90"
                >
                  <span className="text-accent-amber">{contactContent.email}</span>
                  <span className="rounded-md bg-white/10 px-2 py-1 text-[10px] text-text-muted group-hover:bg-accent-amber/20 group-hover:text-accent-amber transition-colors">
                    {copied ? "Copied to Clipboard! ✓" : "Click to Copy"}
                  </span>
                </button>
              </div>
            </FadeIn>

            {/* Social Links */}
            <FadeIn delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-4 font-mono-code text-xs text-text-muted">
                {contactContent.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-cyan transition-colors"
                  >
                    ↗ {s.label}
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column: The Interactive Psychological Exchange Form */}
          <div className="md:col-span-7">
            <FadeIn delay={0.2}>
              <div className="glass-panel relative overflow-hidden rounded-3xl p-8 backdrop-blur-2xl border-white/10 shadow-2xl">
                
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="exchange-form"
                      initial={shouldReduceMotion ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {/* Step 1: Select Intent Chip */}
                      <div>
                        <label className="font-mono-code text-xs text-text-muted uppercase tracking-widest block mb-3">
                          1. Select what brings you here today:
                        </label>

                        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 font-mono-code text-xs">
                          {contactContent.options.map((opt) => {
                            const isSelected = selectedOption === opt.id;
                            return (
                              <button
                                type="button"
                                key={opt.id}
                                onClick={() => setSelectedOption(opt.id)}
                                className={`rounded-xl p-3 text-left border transition-all duration-300 ${
                                  isSelected
                                    ? "border-accent-cyan bg-accent-cyan/15 text-white shadow-lg shadow-accent-cyan/10"
                                    : "border-white/10 bg-white/5 text-text-muted hover:border-white/20 hover:text-text-secondary"
                                }`}
                              >
                                <span className="block text-[9px] uppercase tracking-wider text-accent-cyan mb-1">
                                  [{opt.badge}]
                                </span>
                                <span className="text-[11px] leading-tight block">{opt.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Step 2: Thought Input */}
                      <div>
                        <label className="font-mono-code text-xs text-text-muted uppercase tracking-widest block mb-2">
                          2. {activeOptionObj.prompt}
                        </label>

                        <textarea
                          required
                          rows={3}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Share your thought, idea, or challenge..."
                          className="w-full rounded-xl border border-white/10 bg-black/40 p-4 font-sans text-sm text-text-primary placeholder:text-text-muted focus:border-accent-cyan focus:outline-none focus:ring-1 focus:ring-accent-cyan transition-all"
                        />
                      </div>

                      {/* Step 3: Low-friction Contact Details */}
                      <div>
                        <label className="font-mono-code text-xs text-text-muted uppercase tracking-widest block mb-2">
                          3. Where can Shivani reach you? <span className="text-[10px] text-text-muted">(Email, LinkedIn, or Twitter handle)</span>
                        </label>

                        <input
                          type="text"
                          required
                          value={contactInfo}
                          onChange={(e) => setContactInfo(e.target.value)}
                          placeholder="your.email@company.com or @yourhandle"
                          className="w-full rounded-xl border border-white/10 bg-black/40 p-4 font-mono-code text-xs text-text-primary placeholder:text-text-muted focus:border-accent-cyan focus:outline-none focus:ring-1 focus:ring-accent-cyan transition-all"
                        />
                      </div>

                      {/* Submit Action Trigger */}
                      <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-indigo py-4 font-mono-code text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-accent-indigo/20 transition-all duration-300 hover:opacity-90 hover:shadow-xl"
                      >
                        <span>Transmit Signal to Shivani</span>
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </button>
                    </motion.form>
                  ) : (
                    /* Step 4: Digital Resonance Receipt Token */
                    <motion.div
                      key="exchange-receipt"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex flex-col items-center text-center py-6"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-cyan/20 border border-accent-cyan text-accent-cyan mb-4 text-2xl">
                        ✓
                      </div>

                      <span className="font-mono-code text-[11px] text-accent-cyan uppercase tracking-widest">
                        // SIGNAL TRANSMITTED SUCCESSFULLY
                      </span>

                      <h3 className="mt-2 font-serif-display text-3xl font-light italic text-text-primary">
                        Thank you for reaching out.
                      </h3>

                      <p className="mt-3 max-w-md text-xs font-mono-code text-text-muted leading-relaxed">
                        Your thought has been registered in Shivani&apos;s studio terminal. She will review your message and connect back shortly.
                      </p>

                      <div className="mt-6 rounded-xl border border-white/10 bg-black/50 p-4 font-mono-code text-[10px] text-text-muted w-full max-w-sm text-left">
                        <p className="text-accent-cyan">// DIGITAL TRANSMISSION SPEC</p>
                        <p className="mt-1">INTENT: {activeOptionObj.label}</p>
                        <p>CONTACT: {contactInfo}</p>
                        <p>STATUS: DIRECT PENDING RESPONSE</p>
                      </div>

                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setMessage("");
                          setContactInfo("");
                        }}
                        className="mt-6 font-mono-code text-xs text-text-muted hover:text-white transition-colors"
                      >
                        [ Transmit Another Message ]
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          </div>

        </div>

        {/* Minimalist Digital Footprint Footer */}
        <div className="mt-24 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 font-mono-code text-[11px] text-text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Shivani Thakkar. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Built with Next.js & Motion</span>
            <span>•</span>
            <span className="text-accent-cyan">Where Code Meets Sound</span>
          </p>
        </div>
      </Container>
    </Section>
  );
}
