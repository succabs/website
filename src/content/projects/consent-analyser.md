---
id: consent
title: "Sentinel"
summary: "Chrome DevTools Extension for checking Shopify analytics and consent setups."
description: |
  Sentinel gives quick insight into a Shopify store’s setup. It displays core store details, shows all dataLayer pushes including those from custom pixels, and tracks consent states from the Shopify Customer Privacy API and common cookie banners.  
  I built it because nothing in the Chrome Web Store covered this workflow, and checking custom pixel dataLayer events for custom GTM setups on Shopify takes way too long without a tool like this.  
  The extension also reports the default consent status and verifies that consent mode is wired correctly.
category: "Work Lab"
chapterIndex: 1
status: private
date: 2024-03-12
tags: ["JavaScript", "Chrome API", "HTML", "CSS"]
stack: ["TypeScript", "Rollup", "Chrome Extensions"]
role: "Tech Lead & Developer"
outcomes:
  - "Reduced time spent validating custom pixel and GTM setups."
  - "Made consent and dataLayer checks predictable across storefront builds."
panelSize: m
sticker: "SELECTED"
funFact: "Sentinel turned my usual hour of pixel-checking into something I could do in a few minutes."
links: {}
images:
  - src: "../../assets/consent_analyser_screenshot.png"
    alt: "Screenshot of the Sentinel Chrome extension overlay showing consent and dataLayer details"
---
