import type { TimelineEntry } from "@/types/portfolio";

interface TimelineProps {
  entries: TimelineEntry[];
}

export function Timeline({ entries }: TimelineProps) {
  return (
    <ol className="ml-1 max-w-3xl border-l border-border">
      {entries.map((entry) => (
        <TimelineItem key={entry.id} entry={entry} />
      ))}
    </ol>
  );
}

function TimelineItem({ entry }: { entry: TimelineEntry }) {
  const { title, organization, period, location, highlights } = entry;

  return (
    <li className="reveal relative pb-10 pl-6 last:pb-0 sm:pl-8">
      <span
        aria-hidden="true"
        className="absolute top-2 left-0 size-2.5 -translate-x-1/2 rounded-full bg-accent ring-4 ring-background"
      />
      <article>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{period}</p>
        </div>
        <p className="mt-1 text-muted-foreground">
          {organization}
          {location && <span> · {location}</span>}
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </article>
    </li>
  );
}
