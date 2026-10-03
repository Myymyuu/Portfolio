import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project name",
    description:
      "[One or two sentences: what you built, the problem it solves, and who it is for.]",
    features: [
      "[A feature you personally implemented]",
      "[Another feature or technical challenge you solved]",
    ],
    technologies: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
    githubUrl: "https://github.com/your-username/project-one",
    liveUrl: "https://your-project.example.com",
  },
  {
    slug: "project-two",
    title: "Project name",
    description:
      "[One or two sentences: what you built, the problem it solves, and who it is for.]",
    features: [
      "[A feature you personally implemented]",
      "[Another feature or technical challenge you solved]",
    ],
    technologies: ["[Tech 1]", "[Tech 2]"],
    githubUrl: "https://github.com/your-username/project-two",
  },
  {
    slug: "project-three",
    title: "Project name",
    description:
      "[One or two sentences: what you built, the problem it solves, and who it is for.]",
    features: [
      "[A feature you personally implemented]",
      "[Another feature or technical challenge you solved]",
    ],
    technologies: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
    githubUrl: "https://github.com/your-username/project-three",
  },
];
