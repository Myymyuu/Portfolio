import { skillGroups } from "@/data/skills";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      description="Languages, frameworks, and tools I work with."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.category}
            className="reveal rounded-xl border border-border bg-surface p-6"
          >
            <h3 className="font-semibold">{group.category}</h3>
            <ul aria-label={group.category} className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
