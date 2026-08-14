"use client";

import { useState } from "react";
import { soundscape } from "@/lib/soundscape";
import { motion } from "motion/react";

export function SoundToggle() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    const active = soundscape.toggle();
    setIsActive(active);
  };

  return (
    <button
      onClick={handleToggle}
      aria-label={isActive ? "Mute ambient soundscape" : "Play ambient soundscape"}
      className="glass-panel group fixed top-6 right-6 z-50 flex items-center gap-3 rounded-full px-4 py-2 text-xs transition-all duration-300 hover:border-accent-indigo/40 hover:shadow-lg hover:shadow-accent-indigo/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-indigo"
    >
      <div className="flex items-end gap-[3px] h-3 w-4">
        {[0.6, 1, 0.4, 0.8].map((heightRatio, i) => (
          <motion.span
            key={i}
            className={`w-[2px] rounded-full transition-colors duration-300 ${
              isActive ? "bg-accent-amber" : "bg-text-muted group-hover:bg-text-secondary"
            }`}
            animate={
              isActive
                ? {
                    height: ["20%", `${heightRatio * 100}%`, "30%"],
                  }
                : { height: "30%" }
            }
            transition={
              isActive
                ? {
                    duration: 0.8 + i * 0.15,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }
                : undefined
            }
          />
        ))}
      </div>

      <span className="font-mono-code tracking-wider text-[11px] uppercase text-text-secondary group-hover:text-text-primary transition-colors">
        {isActive ? "Acoustic Resonance: ON" : "Soundscape: OFF"}
      </span>
    </button>
  );
}
