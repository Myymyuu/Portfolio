import { profile, socialLinks } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";

export function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      description="The best way to reach me is by email. I'm also on the platforms below."
    >
      <div className="reveal flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <ButtonLink href={`mailto:${profile.email}`}>{profile.email}</ButtonLink>
        {socialLinks.map((link) => (
          <ButtonLink key={link.href} href={link.href} variant="secondary" external>
            {link.label}
          </ButtonLink>
        ))}
        {profile.resumeUrl && (
          <ButtonLink href={profile.resumeUrl} variant="secondary" external>
            Résumé
          </ButtonLink>
        )}
      </div>
    </Section>
  );
}
