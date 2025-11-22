---
id: consent
title: "Sentinel"
summary: "Chrome DevTools Extension for checking Shopify analytics and consent setups."
description: |
  Sentinel displays core Shopify store details, shows all dataLayer pushes including those from custom pixels, tracks consent states from the Shopify Customer Privacy API and common cookie banners and allows changing the consent. It also reports the default consent status and verifies that consent mode is wired correctly.
  I built it because nothing in the Chrome Web Store covered this workflow, and checking custom pixel dataLayer events for custom GTM setups on Shopify takes way too long without a tool like this. Being able to check custom pixel dataLayer pushes is crucial to ensure that analytics setups work correctly with Shopify stores.
category: "Work Lab"
chapterIndex: 1
status: private
date: 2024-03-12
tags: ["JavaScript", "Chrome API", "HTML", "CSS"]
stack: ["TypeScript", "Rollup", "Chrome Extensions"]
role: "Tech Lead & Developer"
outcomes:
  - "Reduces time spent validating and debugging custom pixels and GTM setups."
  - "Makes consent and dataLayer checks predictable across storefront builds."
panelSize: m
sticker: "SELECTED"
funFact: "Sentinel turned my usual hour of pixel-checking into something I could do in a few minutes."
links: {}
images:
  - src: "../../assets/consent_analyser_screenshot.png"
    alt: "Screenshot of the Sentinel Chrome extension overlay showing consent and dataLayer details"
---
