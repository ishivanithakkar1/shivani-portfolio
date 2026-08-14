"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export function FrequencySignature() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentFreq, setCurrentFreq] = useState(440); // A4 Pitch
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = 160);

    const handleResize = () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = 160;
      }
    };

    window.addEventListener("resize", handleResize);

    let time = 0;
    let hoverImpulse = 0;

    const render = () => {
      time += 0.04;
      hoverImpulse += (0 - hoverImpulse) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const barCount = 48;
      const barWidth = (width - barCount * 3) / barCount;
      const centerY = height / 2;

      for (let i = 0; i < barCount; i++) {
        const x = i * (barWidth + 3);

        // Acoustic Vocal Wave Function (Harmonic Sine blend)
        const norm = i / barCount;
        const wave1 = Math.sin(norm * Math.PI * 4 + time * 1.5);
        const wave2 = Math.cos(norm * Math.PI * 8 - time * 2) * 0.5;
        const wave3 = Math.sin(norm * Math.PI * 2 + time * 0.8) * 0.8;

        const combinedWave = (wave1 + wave2 + wave3) / 2.3;
        const amp = (height * 0.35 + hoverImpulse * 40) * Math.sin(norm * Math.PI); // Envelope bell curve
        const barHeight = Math.max(6, Math.abs(combinedWave) * amp);

        // Dynamic Color Gradient: Transition between Electric Indigo and Warm Amber
        const isAmber = i % 2 === 0;
        const gradient = ctx.createLinearGradient(x, centerY - barHeight / 2, x, centerY + barHeight / 2);

        if (isAmber) {
          gradient.addColorStop(0, "rgba(251, 191, 36, 0.9)");
          gradient.addColorStop(1, "rgba(244, 63, 94, 0.2)");
        } else {
          gradient.addColorStop(0, "rgba(56, 189, 248, 0.9)");
          gradient.addColorStop(1, "rgba(99, 102, 241, 0.2)");
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(x, centerY - barHeight / 2, barWidth, barHeight, 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width;
    const freq = Math.round(220 + relativeX * 440); // 220Hz to 660Hz range
    setCurrentFreq(freq);
    setIsInteracting(true);
  };

  const handleMouseLeave = () => {
    setCurrentFreq(440);
    setIsInteracting(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-panel group relative overflow-hidden rounded-2xl p-6 backdrop-blur-xl border-white/10 transition-all duration-500 hover:border-accent-amber/40 hover:shadow-2xl"
    >
      <div className="flex items-center justify-between font-mono-code text-[11px] text-text-muted mb-4">
        <span className="flex items-center gap-2 text-accent-amber uppercase tracking-widest">
          <span className={`h-1.5 w-1.5 rounded-full ${isInteracting ? "bg-accent-amber animate-ping" : "bg-accent-amber"}`} />
          // ACOUSTIC & BINARY FREQUENCY SIGNATURE
        </span>
        <span className="text-text-secondary">
          FREQ: <strong className="text-white">{currentFreq}Hz</strong>
        </span>
      </div>

      {/* Interactive Oscilloscope Canvas */}
      <div className="relative h-40 w-full overflow-hidden rounded-xl border border-white/5 bg-black/50 p-2 flex items-center justify-center">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>

      <div className="mt-4 flex items-center justify-between font-mono-code text-[10px] text-text-muted">
        <span>MODE: LIVE OSCILLOSCOPE</span>
        <span>HOVER TO RESCALE HARMONICS</span>
        <span className="text-accent-cyan">ST-ACOUSTICS v2.4</span>
      </div>
    </div>
  );
}
