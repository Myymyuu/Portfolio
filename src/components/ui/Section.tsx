import type { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, title, description, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-20 border-t border-border py-16 sm:py-24"
    >
      <Container>
        <header className="reveal mb-10 max-w-2xl">
          <h2
            id={headingId}
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-muted-foreground">{description}</p>
          )}
        </header>
        {children}
      </Container>
    </section>
  );
}
