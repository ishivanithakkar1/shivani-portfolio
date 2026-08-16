"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { FrequencySignature } from "@/components/ui/FrequencySignature";
import { musicTracksData, socialLinks } from "@/content/music";
import { vocalSynthPlayer } from "@/lib/vocalSynthPlayer";

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

          {/* Social & Linktree Studio Channels */}
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap items-center gap-3 font-mono-code text-xs">
              <a
                href={socialLinks.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-text-primary border-emerald-500/30 hover:border-emerald-400 hover:text-emerald-400 transition-all"
              >
                <span className="text-emerald-400">🌴</span>
                <span>Official Linktree</span>
              </a>

              <a
                href={socialLinks.youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-text-primary border-rose-500/30 hover:border-rose-500 hover:text-rose-400 transition-all"
              >
                <span className="text-rose-500">▶</span>
                <span>YouTube @shivani_sings7721</span>
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-text-primary border-accent-amber/30 hover:border-accent-amber hover:text-accent-amber transition-all"
              >
                <span>📷</span>
                <span>Instagram @i_shivanithakkar</span>
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Live Frequency Signature & Featured Track Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          
          {/* Left Column: Interactive Frequency Signature Oscilloscope */}
          <div className="md:col-span-5">
            <FadeIn delay={0.3}>
              <FrequencySignature />
            </FadeIn>
          </div>

          {/* Right Column: Real Performance Cards */}
          <div className="md:col-span-7 space-y-4">
            <FadeIn delay={0.3}>
              <p className="font-mono-code text-[11px] text-accent-amber uppercase tracking-widest mb-2">
                // FEATURED VOCAL RECORDINGS & REELS
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {musicTracksData.map((track, idx) => (
                <FadeIn key={track.id} delay={0.1 * (idx + 1)}>
                  <div className="glass-panel group relative flex flex-col justify-between rounded-2xl p-5 backdrop-blur-xl border-white/10 hover:border-accent-amber/40 hover:bg-surface-glass/95 transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between font-mono-code text-[10px] text-text-muted">
                        <span className="text-accent-amber font-semibold">{track.type}</span>
                        <span>0{idx + 1}</span>
                      </div>

                      <h3 className="mt-3 font-serif-display text-lg font-light italic text-text-primary group-hover:text-white transition-colors">
                        {track.title}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-text-secondary font-light">
                        {track.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between pt-3 border-t border-white/5">
                      <button
                        type="button"
                        onClick={() => vocalSynthPlayer.playPreview(track.id, track.synthFrequency)}
                        className="font-mono-code text-[10px] text-accent-amber hover:underline flex items-center gap-1"
                      >
                        <span>♪ Audio Preview</span>
                      </button>

                      <a
                        href={track.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono-code text-xs text-text-primary hover:border-accent-amber/50 hover:bg-accent-amber/15 hover:text-white transition-all"
                      >
                        <span>Watch Video</span>
                        <span>↗</span>
                      </a>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Linktree Subscribe Callout */}
            <FadeIn delay={0.5}>
              <div className="glass-panel rounded-2xl p-5 border-emerald-500/20 bg-emerald-500/[0.03] flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="font-mono-code text-xs font-semibold text-emerald-400">
                    🌴 Shivani Thakkar Linktree Community
                  </p>
                  <p className="text-xs text-text-secondary font-light mt-0.5">
                    Explore all vocal performances, releases, and social links in one hub.
                  </p>
                </div>

                <a
                  href={socialLinks.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-emerald-500/20 border border-emerald-500/40 px-4 py-2 font-mono-code text-xs text-emerald-300 hover:bg-emerald-500/30 transition-all"
                >
                  Visit linktr.ee/i.shivani ↗
                </a>
              </div>
            </FadeIn>
          </div>

        </div>
      </Container>
    </Section>
  );
}
