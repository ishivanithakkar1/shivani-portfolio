import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function Arrival() {
    return (
        <Section
            id="arrival"
            className="flex min-h-screen items-center justify-center"
        >
            <Container>
                <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    <h1 className="text-5xl font-medium leading-[0.95] tracking-tight text-text-primary md:text-7xl lg:text-8xl">
                        <span className="block">
                            {homeContent.arrival.headline.line1}
                        </span>

                        <span className="block">
                            {homeContent.arrival.headline.line2}
                        </span>
                    </h1>

                    <p className="mt-8 text-lg text-text-secondary">
                        {homeContent.arrival.subheading}
                    </p>

                    <div className="mt-16 flex flex-col items-center gap-3">
                        <span className="text-xl text-text-muted">
                            ↓
                        </span>

                        <p className="text-xs uppercase tracking-[0.35em] text-text-muted">
                            {homeContent.arrival.scrollCue}
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
}