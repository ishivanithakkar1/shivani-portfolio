import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function Identity() {
  return (
    <Section id="identity" className="!py-0">
      <Container>
        <div className="grid gap-10 pb-24 md:grid-cols-12 md:gap-8 md:pb-32">
          <div className="md:col-span-3">
            <FadeIn>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-text-muted">
                {homeContent.identity.eyebrow}
              </p>
            </FadeIn>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <FadeIn delay={0.1}>
              <h2 className="text-balance text-4xl font-normal leading-[0.98] tracking-[-0.04em] text-text-primary md:text-6xl">
                {homeContent.identity.headline}
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-8 max-w-xl text-lg leading-8 text-text-secondary">
                {homeContent.identity.introduction}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-6 max-w-xl text-lg leading-8 text-text-secondary">
                {homeContent.identity.perspective}
              </p>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
