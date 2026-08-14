"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function ExperienceTimeline() {
  return (
    <Section id="experience" className="relative py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          
          {/* Left Column: Eyebrow & Certifications HUD */}
          <div className="md:col-span-4">
            <FadeIn>
              <div className="inline-flex items-center gap-2">
                <span className="h-[1px] w-6 bg-accent-cyan/60" />
                <p className="font-mono-code text-[11px] font-medium uppercase tracking-[0.25em] text-accent-cyan">
                  // CAREER TELEMETRY
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="mt-3 font-serif-display text-3xl font-light italic text-text-primary md:text-5xl">
                Experience & Certifications
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-4 text-sm text-text-secondary leading-relaxed font-light">
                3.5+ years of software engineering experience delivering production-grade REST APIs, optimizing DB response times by 30%, and integrating GCP Vertex AI solutions.
              </p>
            </FadeIn>

            {/* Certifications Badge Card */}
            <FadeIn delay={0.3}>
              <div className="glass-panel mt-8 rounded-2xl p-6 backdrop-blur-xl border-white/10">
                <span className="font-mono-code text-[10px] text-accent-cyan uppercase tracking-widest block mb-4">
                  // VERIFIED CERTIFICATIONS
                </span>

                <div className="space-y-4 font-mono-code text-xs">
                  {homeContent.certifications.map((cert) => (
                    <div key={cert.title} className="rounded-xl border border-white/5 bg-black/40 p-3">
                      <p className="text-white font-semibold">{cert.title}</p>
                      <p className="text-[10px] text-accent-amber mt-0.5">Issuer: {cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Work Experience Timeline */}
          <div className="md:col-span-8">
            <div className="space-y-6">
              {homeContent.experience.map((item, idx) => (
                <FadeIn key={item.company} delay={0.1 * (idx + 1)}>
                  <div className="glass-panel group relative overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:border-accent-cyan/40 hover:bg-surface-glass/95">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                      <div>
                        <span className="font-mono-code text-[10px] text-accent-cyan uppercase tracking-widest">
                          0{idx + 1}. {item.period}
                        </span>
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-white transition-colors mt-0.5">
                          {item.role} <span className="text-accent-cyan font-normal">@ {item.company}</span>
                        </h3>
                      </div>

                      <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 font-mono-code text-[10px] text-text-muted">
                        📍 {item.location}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="mt-5 space-y-2 font-mono-code text-xs text-text-secondary">
                      {item.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent-cyan font-bold">›</span>
                          <span className="leading-relaxed">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
