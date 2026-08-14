"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { projectsData, type ProjectItem } from "@/content/projects";
import { musicTracksData, type MusicTrack } from "@/content/music";
import { vocalSynthPlayer } from "@/lib/vocalSynthPlayer";

export function StudioShowcase() {
  const [activeTab, setActiveTab] = useState<"engineering" | "music">("engineering");
  const [activeTrackId, setActiveTrackId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    vocalSynthPlayer.subscribe((trackId, isPlaying) => {
      setActiveTrackId(isPlaying ? trackId : null);
    });
  }, []);

  const handlePlayTrack = (track: MusicTrack) => {
    vocalSynthPlayer.playPreview(track.id, track.synthFrequency);
  };

  return (
    <Section id="studio" className="relative py-28 md:py-36">
      <Container>
        {/* Section Header & Duality Switcher */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end">
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2">
                <span className="h-[1px] w-6 bg-accent-cyan/60" />
                <p className="font-mono-code text-[11px] font-medium uppercase tracking-[0.25em] text-accent-cyan">
                  // THE STUDIO & CRAFT
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="mt-3 font-serif-display text-4xl font-light italic text-text-primary md:text-6xl">
                Selected Works & Resonance
              </h2>
            </FadeIn>
          </div>

          {/* Mode Switcher Tabs */}
          <FadeIn delay={0.2}>
            <div className="glass-panel inline-flex rounded-full p-1.5 backdrop-blur-xl">
              <button
                onClick={() => setActiveTab("engineering")}
                className={`relative rounded-full px-5 py-2.5 font-mono-code text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "engineering"
                    ? "text-text-primary"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                {activeTab === "engineering" && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 rounded-full bg-accent-indigo/25 border border-accent-indigo/40"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                  01. Software Architecture
                </span>
              </button>

              <button
                onClick={() => setActiveTab("music")}
                className={`relative rounded-full px-5 py-2.5 font-mono-code text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "music"
                    ? "text-text-primary"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                {activeTab === "music" && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 rounded-full bg-accent-amber/25 border border-accent-amber/40"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-amber" />
                  02. Vocal & Acoustic Studio
                </span>
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Tab Content Display */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {activeTab === "engineering" ? (
              <motion.div
                key="engineering-grid"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 gap-8 md:grid-cols-3"
              >
                {projectsData.map((project, idx) => (
                  <div
                    key={project.id}
                    className="glass-panel group relative flex flex-col justify-between overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:border-accent-cyan/40 hover:bg-surface-glass/90 hover:shadow-2xl"
                  >
                    <div>
                      <div className="flex items-center justify-between font-mono-code text-[11px] text-text-muted">
                        <span className="text-accent-cyan uppercase tracking-widest">// 0{idx + 1}</span>
                        <span>{project.category}</span>
                      </div>

                      <h3 className="mt-4 font-sans text-xl font-bold tracking-tight text-text-primary group-hover:text-white transition-colors">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-xs leading-relaxed text-text-secondary font-light">
                        {project.summary}
                      </p>

                      {/* Telemetry Metrics HUD */}
                      <div className="mt-6 grid grid-cols-3 gap-2 rounded-xl border border-white/5 bg-black/40 p-3 font-mono-code">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="text-center">
                            <p className="text-[9px] uppercase tracking-wider text-text-muted">{m.label}</p>
                            <p className="mt-1 text-xs font-semibold text-accent-cyan">{m.value}</p>
                          </div>
                        ))}
                      </div>

                      {/* Architecture Highlights */}
                      <ul className="mt-6 space-y-2 font-mono-code text-[11px] text-text-secondary">
                        {project.architectureHighlights.map((hl, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1 text-accent-cyan">›</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Tags & Interactive Action */}
                    <div className="mt-8 pt-4 border-t border-white/5">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono-code text-[10px] text-text-muted group-hover:border-accent-cyan/20 group-hover:text-text-secondary transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-2.5 font-mono-code text-xs text-text-primary transition-all duration-300 hover:border-accent-cyan/50 hover:bg-accent-cyan/10"
                      >
                        <span>Inspect Architecture</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="music-grid"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 gap-8 md:grid-cols-3"
              >
                {musicTracksData.map((track, idx) => {
                  const isPlayingThis = activeTrackId === track.id;

                  return (
                    <div
                      key={track.id}
                      className={`glass-panel group relative flex flex-col justify-between overflow-hidden rounded-2xl p-7 transition-all duration-500 ${
                        isPlayingThis
                          ? "border-accent-amber/60 bg-surface-glass/95 shadow-2xl shadow-accent-amber/10"
                          : "hover:border-accent-amber/40 hover:bg-surface-glass/90"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between font-mono-code text-[11px] text-text-muted">
                          <span className="text-accent-amber uppercase tracking-widest">// TRACK 0{idx + 1}</span>
                          <span>{track.genre}</span>
                        </div>

                        <h3 className="mt-4 font-serif-display text-2xl font-light italic text-text-primary group-hover:text-white transition-colors">
                          {track.title}
                        </h3>

                        {/* Musical Spec Metadata */}
                        <div className="mt-4 flex items-center gap-4 font-mono-code text-[11px] text-text-muted">
                          <span>Key: <strong className="text-accent-amber">{track.keySignature}</strong></span>
                          <span>•</span>
                          <span>Tempo: <strong className="text-text-secondary">{track.tempo}</strong></span>
                          <span>•</span>
                          <span>Duration: {track.duration}</span>
                        </div>

                        {/* Lyric Snippet Quote */}
                        <blockquote className="mt-6 border-l-2 border-accent-amber/40 pl-4 font-serif-display italic text-sm text-text-secondary">
                          &ldquo;{track.lyricSnippet}&rdquo;
                        </blockquote>

                        <p className="mt-4 text-xs font-light leading-relaxed text-text-muted">
                          {track.story}
                        </p>
                      </div>

                      {/* Interactive Soundwave Player Controls */}
                      <div className="mt-8 pt-4 border-t border-white/5">
                        {/* Dynamic Soundwave Visualizer Bars */}
                        <div className="mb-4 flex items-end justify-center gap-[4px] h-8 bg-black/40 rounded-xl p-2">
                          {[0.4, 0.8, 0.5, 1, 0.6, 0.9, 0.3, 0.7, 0.5, 0.95, 0.4].map((ratio, i) => (
                            <motion.span
                              key={i}
                              className={`w-1 rounded-full transition-colors duration-300 ${
                                isPlayingThis ? "bg-accent-amber" : "bg-white/10"
                              }`}
                              animate={
                                isPlayingThis
                                  ? {
                                      height: ["20%", `${ratio * 100}%`, "30%"],
                                    }
                                  : { height: "25%" }
                              }
                              transition={
                                isPlayingThis
                                  ? {
                                      duration: 0.5 + (i % 4) * 0.15,
                                      repeat: Infinity,
                                      repeatType: "reverse",
                                      ease: "easeInOut",
                                    }
                                  : undefined
                              }
                            />
                          ))}
                        </div>

                        <button
                          onClick={() => handlePlayTrack(track)}
                          className={`flex w-full items-center justify-center gap-3 rounded-lg border py-3 font-mono-code text-xs transition-all duration-300 ${
                            isPlayingThis
                              ? "border-accent-amber bg-accent-amber/20 text-accent-amber"
                              : "border-white/10 bg-white/5 text-text-primary hover:border-accent-amber/50 hover:bg-accent-amber/10"
                          }`}
                        >
                          <span className="text-base">{isPlayingThis ? "❚❚" : "▶"}</span>
                          <span>{isPlayingThis ? "Pause Resonance" : "Play Vocal Preview"}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Modal Breakdown for Selected Engineering Architecture */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-panel max-w-2xl w-full rounded-2xl p-8 border-accent-cyan/30 bg-surface/95"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-mono-code text-xs text-accent-cyan uppercase tracking-widest">
                    // ARCHITECTURE SPECIFICATION
                  </span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="font-mono-code text-xs text-text-muted hover:text-white"
                  >
                    [ Close ESC ]
                  </button>
                </div>

                <h3 className="mt-4 text-2xl font-bold text-text-primary">{selectedProject.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{selectedProject.summary}</p>

                <div className="mt-6 rounded-xl border border-white/10 bg-black/50 p-4 font-mono-code text-xs">
                  <p className="text-accent-cyan mb-2">// TECHNICAL TELEMETRY METRICS</p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {selectedProject.metrics.map((m) => (
                      <div key={m.label} className="bg-white/5 p-2 rounded-lg">
                        <span className="block text-[10px] text-text-muted">{m.label}</span>
                        <span className="block mt-1 font-bold text-white">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-mono-code text-xs text-text-muted mb-2">// DESIGN HIGHLIGHTS</h4>
                  <ul className="space-y-2 font-mono-code text-xs text-text-secondary">
                    {selectedProject.architectureHighlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent-cyan">✔</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="rounded-lg bg-accent-cyan/20 border border-accent-cyan/40 px-5 py-2 font-mono-code text-xs text-accent-cyan hover:bg-accent-cyan/30 transition-colors"
                  >
                    Done Inspecting
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}
