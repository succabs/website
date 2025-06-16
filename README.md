# Arttu Portfolio

This project is built with [Astro](https://astro.build) and follows the design rules in `brandbook.md`.

## Style Guide

- **Fonts:** Helvetica for headings and Inter for body text.
- **Colors:** Background `#FAF8F4`, text `#1A1A1A`, gray `#BDBDBD` with accent colors `#E53935`, `#1E88E5` and `#FDD835`.
- **Layout:** A simple 12 column grid with a maximum width of `1200px`. Content is padded `64px` on desktop and `32px` on smaller screens with at least `64px` vertical spacing between sections.
- **UI elements:** No shadows or border radius. Buttons use uppercase text and change to the accent color on hover.

These rules are implemented in `src/styles/global.css`.

## Technology

The code base uses Astro with MDX content, TypeScript configuration and no UI libraries. Styling is handcrafted in CSS following the rules above.

## Running locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

The site will be available at `http://localhost:4321` when running `npm run dev`.
