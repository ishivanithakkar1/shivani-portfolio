import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function Belief() {
  return (
    <Section id="belief" className="!pt-0">
      <Container>
        <div className="grid gap-10 pb-16 pt-10 md:grid-cols-12 md:gap-8 md:pb-24 md:pt-16">
          <div className="md:col-span-3">
            <FadeIn>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-text-muted">
                {homeContent.belief.eyebrow}
              </p>
            </FadeIn>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <FadeIn delay={0.1}>
              <h2 className="text-balance text-3xl font-medium leading-tight tracking-[-0.03em] text-text-primary md:text-5xl">
                <span className="block">
                  {homeContent.belief.headline.line1}
                </span>
                <span className="block text-text-secondary">
                  {homeContent.belief.headline.line2}
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-8 max-w-xl text-lg leading-8 text-text-secondary">
                {homeContent.belief.description}
              </p>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
