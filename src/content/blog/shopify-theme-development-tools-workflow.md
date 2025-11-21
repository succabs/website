---
title: "My Shopify Theme Development Workflow: Tools I Trust (And What to Avoid)"
description: "A practical breakdown of the Shopify theme development workflow I use every day, including the tools that help and the ones that slow you down."
pubDate: 2025-10-17
updateDate: 2025-11-21
tags: ["development", "tech"]
heroImage: "../../assets/shopify-developer-tools.jpg"
heroImageAlt: "Laptop with Shopify website on screen"
excerpt: "These are the tools and habits that actually help when developing Shopify themes — and a few I’ve learned to avoid along the way."
featured: true
keywords:
  [
    "Shopify theme development workflow",
    "Shopify developer tools",
    "Shopify CLI workflow",
    "Liquid development tips",
    "AI tools for Shopify development",
  ]
---

## Why I’m Sharing My Shopify Theme Development Workflow

I work on Shopify front-end projects daily, and over time I’ve narrowed down a set of tools and habits that consistently make development smoother. Some tools genuinely help, others look impressive but slow you down, and a few should be avoided entirely in 2025.

This post goes through the workflow I use for Shopify theme development — the tools that actually work, what I’ve stopped using, and the principles that keep my output clean and maintainable.

---

## Tools I Actually Use for Shopify Theme Development

### Shopify CLI

The core of my workflow.  
It handles:

- hot reload
- previews
- reliable code syncing

ThemeKit is long past its time. Shopify CLI is the correct tool, and everything else is legacy.

### VSCode + GitHub Copilot (Used Smartly)

Copilot is helpful for:

- repetitive Liquid structures
- loops
- small utility snippets

But it doesn’t know your theme, your CSS, or your store’s customizations. It’s autocomplete — not architecture.

### Essential VSCode Extensions

These two save time every single day:

- **Shopify Liquid Template Snippets (Official)**  
  Syntax highlighting, validation, and autocomplete.

- **Liquid Rich Snippets**  
  More snippets for common Liquid patterns. This may become less necessary with AI tools, but for now it’s still handy.

Together they reduce typos and help keep Liquid code consistent.

### Visual Theme: Spinel for VSCode + iTerm2

I never liked dark themes until I tried **Spinel**, which comes with Shopify’s Ruby tools.  
It’s clean, readable, and I ended up matching the same color palette in iTerm2 for a cohesive environment.

### Cursor / ChatGPT (As Idea Partners)

If a task requires more than a quick change, I start with a prompt. I write down the idea, list the requirements, and let GenAI suggest an approach.

Used correctly, this saves time because:

- you think through the spec before coding
- you catch outdated ideas immediately
- you avoid jumping into code too fast

But you still have to think. AI doesn’t know:

- your theme file structure
- your store’s custom sections
- your existing CSS utilities
- your app stack
- your industry context (D2C fashion ≠ B2B wholesale)

AI can produce code that _works_, but not necessarily code that _belongs_ in your theme.

#### Example: Button Styles

What AI creates:

```html
<button
  class="primary-button"
  style="background-color: #ff0000; padding: 12px 24px; color: white; border-radius: 6px;"
>
  Buy Now >
</button>
```

What you should do:

```html
<button class="button button--primary">Buy Now</button>
```

Themes already have styles. Reusing them keeps everything consistent and prevents bloat.

### Chrome Extensions I Actually Use

- **ColorZilla** — grab any color instantly
- **WhatFont** — identify fonts at a glance

Both exist in DevTools, but the extensions are faster for quick checks, especially in client calls.

---

## Tools and Habits I’ve Stopped Using

### ThemeKit

Once great. Now outdated. Shopify CLI replaced it completely.

### Copilot for Full Logic

Copilot has no context of:

- theme schema
- metafields
- CSS structure
- section hierarchy

It’s excellent for autocomplete. It’s not a senior developer.

### Manual Browser Refreshing

If you’re still Cmd+R’ing your way through development, you’re wasting time.  
Shopify CLI’s hot reload solves this problem entirely.

---

## Other Practices That Make Shopify Theme Work Easier

### Write Comments With Intent

Use comments that explain _why_, not _what_.

Example:  
Featured collection uses settings.image_size to optimize mobile layout.

Not:  
start loop

### Use Shopify’s GitHub Integration

A clean workflow looks like this:

1. **Create a new branch from `main`**
2. **Duplicate the live theme** and name it for the task
3. Connect the new theme to the branch using Shopify CLI
4. Develop in VSCode
5. Live-preview via CLI
6. Commit → push → open PR
7. Let the merchant preview the connected theme
8. Fix issues → merge to `main`

This structure prevents messy live edits and makes testing safe and transparent.

---

## Do’s and Don'ts for Shopify Theme Development

| Do                              | Don’t                             |
| ------------------------------- | --------------------------------- |
| Use Shopify CLI                 | Use ThemeKit                      |
| Reuse existing sections         | Build everything from scratch     |
| Know your theme’s CSS utilities | Add unnecessary custom CSS        |
| Use Copilot for autocomplete    | Let AI design your architecture   |
| Plan tasks before coding        | Jump straight into Liquid blindly |

---

## My Shopify Theme Development Workflow (Step-by-Step)

1. **Create a new branch from `main`**, named after the task
2. **Duplicate the live theme** in the admin and link it via CLI
3. **Write the task as a short brief**, then give it to Cursor/ChatGPT
4. **Work in VSCode** with Copilot + Liquid snippets
5. **Use Shopify CLI** for live preview
6. **Test responsiveness and browser differences**
7. **Commit and push**, then open a PR
8. **Share preview theme** for client review
9. **Refine, fix, and merge** when ready

---

## Key Takeaways

- AI can help you move faster, but you still make the decisions.
- Shopify CLI is the current standard — nothing else compares.
- Clean code comes from understanding your theme, not guessing.
- Reuse existing components before creating new ones.
- A proper Git workflow prevents chaos and makes collaboration easier.

---

## What’s Next?

I’m planning to write more deeply about:

- best practices in web development
- how to debug analytics issues in multi-script environments
- how to work around Shopify stores
- web development in general

If you want something specific covered, let me know — I want to make this a recurring series for Shopify developers.
