import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      excerpt: z.string().optional(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      tags: z.array(z.string()).optional(),
      featured: z.boolean().optional().default(false),
      keywords: z.array(z.string()),
    }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,json}" }),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      summary: z.string(),
      description: z.string().optional(),
      category: z.string(),
      chapterIndex: z.number().optional(),
      status: z.string().default("released"),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      stack: z.array(z.string()).optional(),
      role: z.string().optional(),
      outcomes: z.array(z.string()).optional(),
      panelSize: z.enum(["s", "m", "l"]).default("m"),
      sticker: z.enum(["NEW", "WIP", "SELECTED"]).optional(),
      funFact: z.string().optional(),
      teaser: z.string().optional(),
      links: z
        .object({
          demo: z.string().url().optional(),
          code: z.string().url().optional(),
          caseStudy: z.string().url().optional(),
        })
        .optional(),
      images: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
          })
        )
        .min(1),
    }),
});

export const collections = { blog, projects };
