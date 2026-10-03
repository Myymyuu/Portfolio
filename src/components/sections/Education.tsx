import { education } from "@/data/education";
import { Section } from "@/components/ui/Section";
import { Timeline } from "@/components/ui/Timeline";

export function Education() {
  return (
    <Section id="education" title="Education">
      <Timeline entries={education} />
    </Section>
  );
}
