"use client";

import { useEffect, useRef } from "react";

export function AtmosphereCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const pointer = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      pointer.targetX = e.clientX;
      pointer.targetY = e.clientY;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    let time = 0;

    const render = () => {
      time += prefersReducedMotion ? 0.002 : 0.008;

      // Smooth pointer interpolation
      pointer.x += (pointer.targetX - pointer.x) * 0.05;
      pointer.y += (pointer.targetY - pointer.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Acoustic Glow Ambient Orbs
      // Orb 1: Logic Cyan/Indigo (Top Left / Center)
      const orb1X = width * 0.3 + Math.sin(time * 0.5) * 80;
      const orb1Y = height * 0.35 + Math.cos(time * 0.7) * 60;
      const grad1 = ctx.createRadialGradient(
        orb1X,
        orb1Y,
        0,
        orb1X,
        orb1Y,
        Math.max(width, height) * 0.45
      );
      grad1.addColorStop(0, "rgba(99, 102, 241, 0.12)"); // Electric Indigo
      grad1.addColorStop(0.5, "rgba(56, 189, 248, 0.04)"); // Cyan
      grad1.addColorStop(1, "rgba(6, 6, 8, 0)");

      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Orb 2: Acoustic Amber/Rose (Bottom Right / Pointer subtle influence)
      const orb2X =
        width * 0.7 +
        Math.cos(time * 0.6) * 90 +
        (pointer.x !== -1000 ? (pointer.x - width / 2) * 0.08 : 0);
      const orb2Y =
        height * 0.5 +
        Math.sin(time * 0.8) * 70 +
        (pointer.y !== -1000 ? (pointer.y - height / 2) * 0.08 : 0);
      const grad2 = ctx.createRadialGradient(
        orb2X,
        orb2Y,
        0,
        orb2X,
        orb2Y,
        Math.max(width, height) * 0.4
      );
      grad2.addColorStop(0, "rgba(251, 191, 36, 0.08)"); // Warm Amber
      grad2.addColorStop(0.6, "rgba(244, 63, 94, 0.03)"); // Rose
      grad2.addColorStop(1, "rgba(6, 6, 8, 0)");

      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Subtle Wave Grid Lines (Acoustic Resonance Frequency)
      if (!prefersReducedMotion) {
        ctx.lineWidth = 1;
        const lineCount = 3;
        for (let i = 0; i < lineCount; i++) {
          ctx.beginPath();
          const yOffset = height * (0.35 + i * 0.15);
          const freq = 0.0015 + i * 0.0005;
          const amp = 15 + i * 10;

          ctx.strokeStyle = `rgba(255, 255, 255, ${0.015 - i * 0.003})`;

          for (let x = 0; x < width; x += 15) {
            // Calculate distance to pointer for ripple effect
            const dx = x - pointer.x;
            const dy = yOffset - pointer.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const ripple = dist < 250 ? Math.sin(dist * 0.05 - time * 4) * (1 - dist / 250) * 12 : 0;

            const y = yOffset + Math.sin(x * freq + time + i) * amp + ripple;
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-90 transition-opacity duration-1000"
    />
  );
}
