import { profile } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="py-20 sm:py-32">
      <Container className="motion-safe:animate-fade-up">
        <p className="text-sm font-medium text-accent">{profile.role}</p>
        <h1
          id="hero-heading"
          className="mt-3 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
        >
          Hi, I&apos;m {profile.name}.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-pretty text-muted-foreground sm:text-xl">
          {profile.tagline}
        </p>
        <p className="mt-3 text-sm text-muted-foreground">{profile.location}</p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#projects">View projects</ButtonLink>
          <ButtonLink href="#contact" variant="secondary">
            Get in touch
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
