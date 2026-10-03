import Image from "next/image";
import type { Project } from "@/types/portfolio";
import { Tag } from "./Tag";
import { TextLink } from "./TextLink";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, features, technologies, image, githubUrl, liveUrl } =
    project;

  return (
    <article className="reveal flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition duration-200 hover:shadow-md motion-safe:hover:-translate-y-0.5">
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 480px, 100vw"
          className="aspect-video w-full border-b border-border object-cover"
        />
      ) : (
        <div className="flex aspect-video items-center justify-center border-b border-border bg-muted text-sm text-muted-foreground">
          [Project screenshot]
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>

        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </ul>

        {(githubUrl || liveUrl) && (
          <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6 text-sm">
            {githubUrl && (
              <TextLink href={githubUrl} external>
                Source code
              </TextLink>
            )}
            {liveUrl && (
              <TextLink href={liveUrl} external>
                Live site
              </TextLink>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
