// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import customSitemap from "./custom-sitemap.mjs";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://arttu.net/",
  trailingSlash: "always",
  integrations: [
    mdx(),
    [customSitemap("https://arttu.net", "dist", new Date("2025-08-02"))],
    icon(),
  ],
});
