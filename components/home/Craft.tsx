import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { CraftPrinciple } from "@/components/home/CraftPrinciple";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function Craft() {
  return (
    <Section id="craft" className="!py-0">
      <Container>
        <div className="max-w-2xl pb-24 md:ml-[33.333%] md:pb-32">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-text-muted">
              {homeContent.craft.eyebrow}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="mt-10 text-balance text-3xl font-normal leading-tight tracking-[-0.03em] text-text-primary md:text-5xl">
              {homeContent.craft.headline}
            </h2>
          </FadeIn>

          <div className="mt-20 space-y-20 md:mt-24 md:space-y-28">
            {homeContent.craft.principles.map((principle, index) => (
              <CraftPrinciple
                key={principle.heading}
                heading={principle.heading}
                description={principle.description}
                delay={index * 0.06}
              />
            ))}
          </div>

          <FadeIn delay={0.1}>
            <p className="mt-24 max-w-lg text-balance text-2xl font-normal leading-snug tracking-[-0.03em] text-text-primary md:mt-32 md:text-3xl">
              {homeContent.craft.closing}
            </p>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
