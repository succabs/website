# Arttu.net

Arttu Nikkilä's portfolio, built with Astro 7 and handcrafted CSS. See brandbook.md for the refined poster design system.

## Development

Use Node 22.23.4 or later and npm 10.8.2 or later. .nvmrc pins the CI runtime. A project-local Node dependency allows npm scripts to run without replacing an older system Node installation.

    npm ci
    npm run dev
    npm run build
    npm run preview

## Structure

- src/pages/: Home, Experience, Projects, About, privacy policy and 404.
- src/content/projects/: Markdown project entries validated by src/content.config.ts.
- src/components/: shared navigation, footer, experience and certification components.
- src/styles/global.css: palette, typography and shared controls.
- custom-sitemap.mjs: sitemap dates and the separately hosted browser game URL.
- .github/workflows/astro.yml: GitHub Pages deployment on pushes to main.

The blog, tag routes and RSS feed have been retired. Their content is recoverable from Git history. Removed URLs use the 404 page.

