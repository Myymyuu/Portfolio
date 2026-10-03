interface TagProps {
  children: string;
}

export function Tag({ children }: TagProps) {
  return (
    <li className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
      {children}
    </li>
  );
}
