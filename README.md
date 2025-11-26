# Arttu.net Portfolio / Website

A personal portfolio and blog for Arttu Nikkilä, built with [Astro](https://astro.build) 5, MDX content, and handcrafted CSS. Layout, typography, and colour usage follow the rules defined in [`brandbook.md`](brandbook.md). Based on Astro's blog tutorial.

## Features

### Custom features

- Scroll to top -button
- Read time estimate
- Custom sitemap to get lastmod -entries
- RSS Feed
- Collection for projects
- Hamburger menu
- SEO optimizations
- JSON+LD structure for blog posts, projects and front page
- Reusable components
- Display latest & most read posts on front page
- Tag filtering, sorting and pagination on blog
- Automatic pages for tags on blog posts

Feel free to copy, modify or reuse the code I have here. Some of the customizations are found from internet, some are heavily modified to suit my needs and some are made by me. If you need help in implementing them, drop me a message :)

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
