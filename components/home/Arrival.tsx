"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";
import { FadeIn } from "@/components/ui/FadeIn";

export function Arrival() {
  return (
    <Section
      id="arrival"
      className="flex min-h-screen items-center justify-center"
    >
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <FadeIn>
            <h1 className="text-5xl font-medium leading-[0.95] tracking-tight text-text-primary md:text-7xl lg:text-8xl">
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
            <div className="mt-16 flex flex-col items-center gap-3">
              <span className="text-xl text-text-muted">
                ↓
              </span>

              <p className="text-xs uppercase tracking-[0.35em] text-text-muted">
                {homeContent.arrival.scrollCue}
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}