"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Glow } from "@/components/ui/Glow";
import { Noise } from "@/components/ui/Noise";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function Arrival() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame: number | undefined;

    const updateTransition = () => {
      animationFrame = undefined;

      if (reducedMotion.matches) {
        content.style.opacity = "";
        content.style.transform = "";
        return;
      }

      const sectionHeight = section.offsetHeight;

      if (!sectionHeight) {
        return;
      }

      const progress = Math.min(
        Math.max(-section.getBoundingClientRect().top / sectionHeight, 0),
        1,
      );
      const transitionProgress = Math.min(
        Math.max((progress - 0.55) / 0.45, 0),
        1,
      );

      content.style.opacity = String(1 - transitionProgress * 0.45);
      content.style.transform = `translateY(${-transitionProgress * 24}px)`;
    };

    const scheduleTransition = () => {
      if (animationFrame === undefined) {
        animationFrame = window.requestAnimationFrame(updateTransition);
      }
    };

    scheduleTransition();
    window.addEventListener("scroll", scheduleTransition, { passive: true });
    window.addEventListener("resize", scheduleTransition);
    reducedMotion.addEventListener("change", scheduleTransition);

    return () => {
      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener("scroll", scheduleTransition);
      window.removeEventListener("resize", scheduleTransition);
      reducedMotion.removeEventListener("change", scheduleTransition);
      content.style.opacity = "";
      content.style.transform = "";
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <Section
        id="arrival"
        className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden py-24"
      >
        <div aria-hidden="true">
          <Noise />
          <Glow />
        </div>

        <Container>
          <div
            ref={contentRef}
            className="relative mx-auto flex max-w-4xl flex-col items-center text-center"
          >
            <FadeIn>
              <h1 className="text-balance text-4xl font-normal leading-[0.98] tracking-[-0.04em] text-text-primary sm:text-5xl lg:text-6xl">
                <span className="block">
                  {homeContent.arrival.headline.line1}
                </span>

                <span className="block">
                  {homeContent.arrival.headline.line2}
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.7}>
              <p className="mt-8 text-lg text-text-secondary">
                {homeContent.arrival.subheading}
              </p>
            </FadeIn>

            <FadeIn delay={1.2}>
              <a
                href="#belief"
                className="mt-16 flex flex-col items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-ring"
              >
                <span className="text-xl text-text-muted">&darr;</span>

                <p className="text-xs uppercase tracking-[0.35em] text-text-muted">
                  {homeContent.arrival.scrollCue}
                </p>
              </a>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </div>
  );
}
