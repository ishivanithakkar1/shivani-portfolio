import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function Belief() {
  return (
    <Section id="belief" className="relative py-28 md:py-36">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <FadeIn>
              <div className="inline-flex items-center gap-2">
                <span className="h-[1px] w-6 bg-accent-amber/60" />
                <p className="font-mono-code text-[11px] font-medium uppercase tracking-[0.25em] text-accent-amber">
                  // {homeContent.belief.eyebrow}
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-9 md:col-start-4">
            <FadeIn delay={0.1}>
              <h2 className="text-balance text-3xl font-light tracking-tight md:text-5xl lg:text-6xl leading-[1.1]">
                <span className="font-serif-display italic block text-text-primary">
                  {homeContent.belief.headline.line1}
                </span>
                <span className="font-sans font-bold block text-text-secondary mt-2">
                  {homeContent.belief.headline.line2}
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary font-light">
                {homeContent.belief.description}
              </p>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
