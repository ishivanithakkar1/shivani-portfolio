import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Glow } from "@/components/ui/Glow";
import { Noise } from "@/components/ui/Noise";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function Arrival() {
  return (
    <Section
      id="arrival"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden py-24"
    >
      <div aria-hidden="true">
        <Noise />
        <Glow />
      </div>

      <Container>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <FadeIn>
            <h1 className="text-balance text-4xl font-medium leading-[0.98] tracking-[-0.04em] text-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
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
              <span className="text-xl text-text-muted">↓</span>

              <p className="text-xs uppercase tracking-[0.35em] text-text-muted">
                {homeContent.arrival.scrollCue}
              </p>
            </a>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
