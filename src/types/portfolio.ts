export interface NavItem {
  label: string;
  href: `/${string}`;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  tagline: string;
  about: string[];
  email: string;
  resumeUrl?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  image?: ProjectImage;
  githubUrl?: string;
  liveUrl?: string;
}

export interface TimelineEntry {
  id: string;
  title: string;
  organization: string;
  period: string;
  location?: string;
  highlights: string[];
}
