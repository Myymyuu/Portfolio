# Khanh Le — Developer Portfolio

Personal portfolio site for Khanh Le, built with Next.js (App Router), TypeScript, and Tailwind CSS. It has three static routes: `/` (Hero, Contact), `/about` (About, Skills, Experience, Education), and `/projects`.

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
| `npm run build`     | Static export to `out/`            |

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
| `NEXT_PUBLIC_SITE_URL` | Full public URL of the site, including any base path (e.g. `https://myymyuu.github.io/Portfolio`). Used for canonical/Open Graph URLs, robots, and sitemap. Defaults to `http://localhost:4317` plus `NEXT_PUBLIC_BASE_PATH` when unset. |
| `NEXT_PUBLIC_BASE_PATH` | URL prefix when the site is not served from the domain root (e.g. `/Portfolio`). Empty by default so `npm run dev` works at `/`. GitHub Actions sets this from `actions/configure-pages`. |

## Deploy to GitHub Pages

The site is a static export (`output: "export"`). Pushing to `main` on [Myymyuu/Portfolio](https://github.com/Myymyuu/Portfolio) runs `.github/workflows/deploy-pages.yml`, which builds with base path `/Portfolio` and deploys to **https://myymyuu.github.io/Portfolio**.

One-time setup in WSL (after creating the empty `Portfolio` repo on GitHub):

```bash
git remote add github https://github.com/Myymyuu/Portfolio.git
git push -u github main
```

In the GitHub repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

To preview a project-site build locally:

```bash
NEXT_PUBLIC_BASE_PATH=/Portfolio NEXT_PUBLIC_SITE_URL=http://localhost:4318/Portfolio npm run build
mkdir -p /tmp/site && rm -rf /tmp/site/Portfolio && cp -r out /tmp/site/Portfolio
python3 -m http.server 4318 --directory /tmp/site   # http://localhost:4318/Portfolio/
```

## Structure

```
src/
  app/                 layout (metadata, skip link), home page, about/ and projects/ routes, robots, sitemap, global styles
  components/
    layout/            Navbar, NavDropdown and MobileNav (the only client components), Footer
    sections/          One component per page section
    ui/                Section, Container, ProjectCard, Timeline, Tag, ButtonLink, TextLink
  data/                Typed portfolio content
  lib/                 Shared helpers (base path for GitHub Pages)
  types/               Shared TypeScript interfaces
```

Design tokens (colors for light and dark mode) are CSS variables in `src/app/globals.css`, exposed to Tailwind via `@theme`. Motion is CSS-only and disabled under `prefers-reduced-motion`.
