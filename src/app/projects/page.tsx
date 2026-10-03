import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { profile } from "@/data/site";

const description = `Projects built by ${profile.name}: what each one does, the technologies used, and links to the code.`;

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    url: "/projects",
    siteName: profile.name,
    title: `Projects | ${profile.name}`,
    description,
  },
};

export default function ProjectsPage() {
  return (
    <section aria-labelledby="projects-heading" className="py-16 sm:py-24">
      <Container>
        <header className="mb-10 max-w-2xl motion-safe:animate-fade-up">
          <h1
            id="projects-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Projects
          </h1>
          <p className="mt-3 text-muted-foreground">
            A selection of things I&apos;ve built, what they do, and the parts I
            worked on.
          </p>
        </header>

        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
