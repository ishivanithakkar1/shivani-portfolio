import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function Identity() {
  return (
    <Section id="identity" className="relative py-28 md:py-36">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <FadeIn>
              <div className="inline-flex items-center gap-2">
                <span className="h-[1px] w-6 bg-accent-cyan/60" />
                <p className="font-mono-code text-[11px] font-medium uppercase tracking-[0.25em] text-accent-cyan">
                  // {homeContent.identity.eyebrow}
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-9 md:col-start-4">
            <FadeIn delay={0.1}>
              <h2 className="font-serif-display text-4xl font-light italic leading-[1.05] tracking-tight text-text-primary md:text-6xl lg:text-7xl">
                {homeContent.identity.headline}
              </h2>
            </FadeIn>

            <div className="glass-panel mt-10 rounded-2xl p-8 backdrop-blur-xl border-white/10">
              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl leading-relaxed text-text-primary font-light">
                  {homeContent.identity.introduction}
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="mt-6 font-mono-code text-sm text-text-muted leading-relaxed">
                  {homeContent.identity.perspective}
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
