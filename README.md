# Arttu Portfolio

A personal portfolio and blog for Arttu Nikkilä, built with [Astro](https://astro.build) 5, MDX content, and handcrafted CSS. Layout, typography, and colour usage follow the rules defined in [`brandbook.md`](brandbook.md).

## Features

### Home
- Hero introduction with multilingual greeting and biography.
- Automatically surfaces the three most recent posts and three featured "most read" articles sourced from the blog collection.

### Blog
- Blog index supports client-side tag filtering, date sorting, read-time estimates, and paginated browsing of the full archive.
- Individual tag hubs provide sticky filtering controls, per-tag pagination, and calculated read times for every article.
- RSS feed available at `/rss.xml` for subscription services.

### Projects
- Interactive "character select" grid with keyboard accessible controls, inline project metadata, and screenshot carousel rendered from structured project data.

### Experience
- Structured work history, education timeline, certifications, and skills rendered with reusable components for consistent typography and iconography.

### Reading List
- Curated book recommendations and yearly reading logs maintained as rich-content sections.

### Additional Pages
- Dedicated About, Projects, Experience, Reading List, Privacy Policy, and 404 views under `src/pages/` for simple routing.

## Content & Code Structure
- `src/pages/` contains route-level Astro files for static and dynamic pages (e.g., `/blog`, `/projects`, `/tags/[tag]`).
- `src/content/blog/` stores Markdown and MDX posts validated by the blog collection schema defined in `src/content.config.ts` (title, description, dates, optional excerpt, hero media, tags, colour, and featured flag).
- `src/components/` houses layout primitives (`BaseLayout`, `Header`, `Footer`) and UI elements such as `BlogListing` and `ExperienceItem`.
- `src/utils/blog.ts` centralises blog pagination size, read-time calculation, and tag aggregation helpers.
- Assets and client scripts live under `src/assets/` and `src/scripts/` respectively.

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server (default `http://localhost:4321`):
   ```bash
   npm run dev
   ```
3. Create a production build:
   ```bash
   npm run build
   ```
4. Preview the production build locally:
   ```bash
   npm run preview
   ```

## Tooling
- Astro CLI commands are exposed through the package scripts in `package.json` (`dev`, `build`, `preview`, `astro`).
- Image optimisation relies on [`sharp`](https://sharp.pixelplumbing.com/), installed as a dependency for Astro image transformations.

## Styling Guidance
Visual direction, component spacing, and typography rules are documented in [`brandbook.md`](brandbook.md). Apply any new styling changes according to that reference.
