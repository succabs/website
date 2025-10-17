---
title: "My Go-To Tools and Workflow for Shopify Theme Development (And What to Avoid)"
description: "The tools I actually use to develop Shopify themes - from Shopify CLI to Cursor and Copilot, plus lessons learned from tools that slowed me down."
pubDate: 2025-10-17
tags: ["development", "tech"]
heroImage: "../../assets/shopify-developer-tools.jpg"
heroImageAlt: "Laptop with Shopify website on screen"
excerpt: "These are the tools I trust for Shopify theme work - and a few I've learned to avoid."
---

## Introduction: What This Is and Why

I work on Shopify front-end projects daily, and over time I've found a workflow that actually makes sense. Some tools speed me up, others look great but get in the way. Here's what I use, and what I don't anymore - plus a few principles I try to stick to so my code stays clean and sustainable.

## ✅ Tools I Actually Use (And Why)

### Shopify CLI

The only tool I use to connect themes to live stores. It handles hot reload, previews, and code syncing reliably. ThemeKit is deprecated. This is the way.

### VSCode + Copilot (With Limits)

Copilot is great for autocompletion. It helps speed up repetitive Liquid structures and loops. But it still doesn't understand context all the time - more on that below.

### Extra: VSCode Extensions I Rely On

In addition to Copilot, there are two extensions I always install when working on Shopify themes:

- Shopify Liquid Template Snippets (by Shopify) - Official extension that adds syntax highlighting, autocompletion, and validation for Liquid.
- Liquid Rich Snippets - Enhances Liquid development with snippets for loops, filters, and common patterns. With AI autocompletion, this might become obsolete in the future.
  Combined, these help speed up repetitive tasks and catch small mistakes early.

### Visual Style: Spinel Theme (for VSCode + iTerm2)

I used to love with light themes (call me a psychopath if you want), but after trying out Spinel - a color scheme that comes with Shopify's Ruby tooling - I was pleased. It's the only dark theme I've actually enjoyed using. I've even adapted the colors to my iTerm2 setup for consistency across my entire dev environment. It just looks so clean and clear.

### Cursor / ChatGPT

I start most tasks with a prompt. If I know I need more than one line of code change, it might help me move faster to the goal. You lose nothing by writing your thoughts and specs on a note and then giving that note to GenAI. With experience, you usually spot right away if AI is using deprecated features or unneeded JavaScript. If it does the job, or even some part of it right, it speeds you up. If it doesn't, at least you have written down what you need to do which speeds up the development. And that is supposed to be done either way: there is no reason to jump straight into coding. You need careful planning and good specs for the task first.

The key is: **use GenAI tools as collaborators, not decision-makers**. You still have to think.

- They don't know your store's theme and customisations.
- They don't know your App Stack.
- They don't know what CSS classes are in use.
- They don't know what's already in your `sections` folder.
- And lastly, they are missing the industry-specific data: some features may work well with D2C fashion industry, but not on niche B2B stores.

Often, the code they generate _works_ - but that doesn't mean it's smart. Don't reinvent the wheel if the theme already does it. Reusing existing sections or modifying them is almost always better than rebuilding from scratch.

Same goes for styles: GenAI tools love writing custom CSS, even when the theme already has styles for the exact same thing. That bloats your code and breaks visual consistency - which usually goes against brand guidelines.

### Example: Button Styles

Instead of this code, which GenAI could easily create:

```html
<button
  class="primary-button"
  style="background-color: #ff0000; padding: 12px 24px; color: white; border-radius: 6px;"
>
  Buy Now
</button>
```

Use the theme's existing utility class:

```html
<button class="button button--primary">Buy Now</button>
```

This ensures your buttons look consistent with the rest of the site, and you avoid adding unnecessary CSS that breaks the visual language of the theme and brand guidelines.

### Chrome Extensions That Help

- **ColorZilla** - Instantly grab any color from the screen.
- **WhatFont** - Shows the font used on hover.

Yes, both of these can be found in DevTools - but having them in your browser bar is significantly faster during theme tweaking and QA, and a lot easier concept to grasp when used quickly in a client meeting.

---

## ⚠️ Tools or Habits I've Stopped Using

### ThemeKit

It was good once. But Shopify CLI has surpassed it in every way. No reason to keep using it.

### Copilot for Full Logic

Copilot doesn't understand theme context. It creates deprecated or overly verbose code. I trust it for autocomplete only - not logic or architecture.

### Manual Browser Syncing

Shopify CLI handles hot reloads. No more Cmd+R (or Ctrl+R if you use Windows or Linux) culture. If you're not using live preview, you're working twice as hard.

---

## 🧬 Other Things That Help

- **Code comments with purpose**: Not "// start loop" - but "// featured collection uses settings.image_size to optimize mobile layout".

- **Use Shopify's GitHub Integration**: Version control is essential. I recommend connecting your store to a GitHub repo using Shopify's native integration. Keep `main` connected to the live theme, and use branches for feature development. For example:

  - Create a new branch from `main` for each task
  - Connect that branch to a development theme
  - Let merchants test features directly on a preview
  - Always ensure branches are up to date with `main` before merging

This structure allows isolated work and safer testing - and it scales well.

---

## Do's & Don'ts Summary

| ✅ Do this                              | ❌ Avoid this                            |
| --------------------------------------- | ---------------------------------------- |
| Use Shopify CLI                         | Don't use ThemeKit anymore               |
| Prompt with GPT/Cursor to explore ideas | Don't let AI make architecture decisions |
| Reuse existing sections if possible     | Don't rebuild what already exists        |
| Know your theme's CSS classes           | Don't write redundant styles             |
| Use Copilot for autocomplete            | Don't expect AI to understand context    |

---

## 🧱 My Shopify Dev Workflow With New Task (Start to Finish)

1. **Create a new branch from `main`**, name it after the task
2. **Clone the live theme** in the Shopify admin and name the new copy accordingly. Connect to this theme with CLI.
3. **Prompt ChatGPT or Cursor** with the task (e.g. "Create new section based on this X section with Y requirements")
4. **Write or edit code in VSCode** with Copilot, Liquid snippets, and theme structure in mind
5. **Use Shopify CLI** to live-preview the theme and check responsiveness
6. **Test interactions with different browsers and devices**, especially when modifying styles
7. **Commit changes and push to GitHub**, open PR if needed
8. **Notify client or merchant** to preview on the connected theme
9. **Make changes, fix found bugs if any** and once the new functionality is ready, merge it to main

---

## Key Takeaways

- GenAI tools are collaborators, not thinkers. Their output needs review.
- Shopify CLI is the standard. Everything else is legacy.
- Copilot is autocomplete. Not a designer. Not a dev lead.
- Know your theme, know your context, and don't bloat the codebase for no reason.
- The goal is to code faster and ship smarter.
- Use GitHub branches with Shopify's theme integration to manage tasks cleanly and test safely.

---

## What's Next?

I'm keeping an eye on what's next in GenAI tooling - maybe GPT-5 or similar models will become better at understanding context inside Liquid and Shopify schemas.

Also, if there's interest, I'd be happy to write a follow-up post on best practices for implementing and debugging Shopify's analytics setup - especially for stores juggling multiple tracking scripts and consent requirements.
