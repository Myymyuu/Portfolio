import { experience } from "@/data/experience";
import { Section } from "@/components/ui/Section";
import { Timeline } from "@/components/ui/Timeline";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <Timeline entries={experience} />
    </Section>
  );
}
