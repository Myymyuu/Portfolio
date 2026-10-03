import { profile, socialLinks } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <TextLink href={link.href} external>
                {link.label}
              </TextLink>
            </li>
          ))}
          <li>
            <a
              href="#top"
              className="rounded-sm hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Back to top
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
