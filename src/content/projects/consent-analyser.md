---
id: consent
title: "Consent Analyser"
summary: "Chrome DevTools helper that inspects CMP ↔ Shopify Customer Privacy API wiring in real time."
description: |
  Built as an internal QA companion for the ecommerce analytics team. The extension exposes the consent signals coming
  from the store front, lets the tester flip consent states on demand, and flags missing dataLayer pushes before they
  become production bugs.
category: "Client Lab"
chapterIndex: 1
status: private
date: 2024-03-12
tags: ["JavaScript", "DevTools", "Shopify"]
stack: ["TypeScript", "Rollup", "Chrome Extensions"]
role: "Tech Lead & Developer"
outcomes:
  - "Cut consent regression triage time from hours to minutes during launches."
  - "Standardised QA scripts across five parallel storefront builds."
panelSize: m
sticker: "SELECTED"
funFact: "Every tester picked a superhero alias before review sessions."
links: {}
images:
  - src: "../../assets/consent_analyser_screenshot.png"
    alt: "Screenshot of the Consent Analyser Chrome extension overlay showing consent flags"
---
