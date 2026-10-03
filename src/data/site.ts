import type { NavItem, Profile, SocialLink } from "@/types/portfolio";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:4317";

export const profile: Profile = {
  name: "Khanh Le",
  role: "[Your role]",
  location: "[Your city, country]",
  tagline:
    "[One sentence about what you build and the kind of problems you like to work on.]",
  about: [
    "[A short paragraph about your background: how you got into software and what you focus on today.]",
    "[A second paragraph about what you are currently learning or building, and what kind of role or collaboration you are looking for.]",
  ],
  email: "you@example.com",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/your-username" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-username" },
];
