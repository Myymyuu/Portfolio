import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/site";

const description = `Background, skills, experience, and education of ${profile.name}.`;

export const metadata: Metadata = {
  title: "About Me",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: "/about",
    siteName: profile.name,
    title: `About Me | ${profile.name}`,
    description,
  },
};

export default function AboutPage() {
  return (
    <>
      <Container className="pt-16 pb-4 sm:pt-24 motion-safe:animate-fade-up">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          About Me
        </h1>
      </Container>
      <About />
      <Skills />
      <Experience />
      <Education />
    </>
  );
}
