# Khanh Le — Developer Portfolio

Personal portfolio site for Khanh Le, built with Next.js (App Router), TypeScript, and Tailwind CSS. It is a single static page with Hero, About, Skills, Projects, Experience, Education, and Contact sections.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:4317
```

Other scripts:

| Command             | What it does                       |
| ------------------- | ---------------------------------- |
| `npm run lint`      | ESLint (Next.js core-web-vitals)   |
| `npm run typecheck` | Generate route types, run `tsc`    |
| `npm run build`     | Production build                   |
| `npm run start`     | Serve the production build on 4317 |

## Editing content

All content lives in typed data files under `src/data/`. Components map over this data, so you normally don't need to touch JSX to update the site.

| File                     | Content                                         |
| ------------------------ | ----------------------------------------------- |
| `src/data/site.ts`       | Name, role, tagline, about text, email, socials, nav |
| `src/data/skills.ts`     | Skill groups                                    |
| `src/data/projects.ts`   | Projects (description, features, tech, links, optional screenshot) |
| `src/data/experience.ts` | Work experience                                 |
| `src/data/education.ts`  | Education                                       |

Types for every data shape are in `src/types/portfolio.ts`. Values in `[brackets]` and `your-username` links are placeholders to replace.

Project screenshots: put images in `public/projects/` and add an `image` (`src`, `alt`, `width`, `height`) to the project entry. Cards without an image show a placeholder.

## Configuration

| Variable               | Purpose                                                        |
| ---------------------- | -------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Production URL used for canonical/Open Graph URLs, robots, and sitemap. Defaults to `http://localhost:4317`. |

## Structure

```
src/
  app/                 layout (metadata, skip link), page, robots, sitemap, global styles
  components/
    layout/            Navbar, MobileNav (only client component), Footer
    sections/          One component per page section
    ui/                Section, Container, ProjectCard, Timeline, Tag, ButtonLink, TextLink
  data/                Typed portfolio content
  types/               Shared TypeScript interfaces
```

Design tokens (colors for light and dark mode) are CSS variables in `src/app/globals.css`, exposed to Tailwind via `@theme`. Motion is CSS-only and disabled under `prefers-reduced-motion`.
