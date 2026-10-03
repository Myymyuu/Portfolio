import { profile } from "@/data/site";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="reveal max-w-2xl space-y-4 text-lg text-muted-foreground">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
