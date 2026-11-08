// @ts-check
import { defineConfig } from "astro/config";
import customSitemap from "./custom-sitemap.mjs";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // Preserve visual spaces around inline links in the existing page copy.
  compressHTML: true,
  site: "https://arttu.net/",
  trailingSlash: "always",
  integrations: [
    [customSitemap("https://arttu.net", "dist", new Date("2025-08-02"))],
    icon(),
  ],
});
