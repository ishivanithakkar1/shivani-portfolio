import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { CraftPrinciple } from "@/components/home/CraftPrinciple";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function Craft() {
  return (
    <Section id="craft" className="relative py-28 md:py-36">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <FadeIn>
              <div className="inline-flex items-center gap-2">
                <span className="h-[1px] w-6 bg-accent-indigo/60" />
                <p className="font-mono-code text-[11px] font-medium uppercase tracking-[0.25em] text-accent-indigo">
                  // {homeContent.craft.eyebrow}
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-9 md:col-start-4">
            <FadeIn delay={0.1}>
              <h2 className="font-serif-display text-3xl font-light italic leading-[1.1] text-text-primary md:text-5xl lg:text-6xl">
                {homeContent.craft.headline}
              </h2>
            </FadeIn>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {homeContent.craft.principles.map((principle, index) => (
                <CraftPrinciple
                  key={principle.heading}
                  index={index}
                  heading={principle.heading}
                  description={principle.description}
                  delay={index * 0.1}
                />
              ))}
            </div>

            <FadeIn delay={0.3}>
              <p className="mt-16 border-l-2 border-accent-amber/50 pl-6 font-serif-display text-xl italic text-text-secondary md:text-2xl">
                &ldquo;{homeContent.craft.closing}&rdquo;
              </p>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
