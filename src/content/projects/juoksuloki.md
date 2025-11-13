---
id: juoksuloki
title: "Juoksuloki"
summary: "CLI that turns Suunto iOS workout exports into a clean Excel log."
description: |
  Juoksuloki is a small Python script for pulling your Suunto run exports into a local Excel file.  
  Drop the JSON files into your Mac’s Downloads folder with Airdrop, run the command, and the script moves them into a tidy directory, parses key metrics, and updates a long-term log (juoksuloki.xlsx) sorted by date.  
  Made for iPhone + macOS users who want their run history stored locally without relying on any cloud service.
category: "Personal Tools"
chapterIndex: 2
status: released
date: 2023-11-05
tags: ["Python", "Pandas", "CLI"]
stack: ["Python", "Pandas", "Rich", "OpenPyXL"]
role: "Solo Builder"
outcomes:
  - "Made weekly run reviews quick instead of a manual copy-paste job."
  - "Keeps years of Suunto data in a single local Excel file without vendor lock-in."
panelSize: s
funFact: "Built after realising Suunto had no simple way to export a clean history."
links:
  code: "https://github.com/succabs/juoksuloki"
images:
  - src: "../../assets/juoksuloki_screenshot.png"
    alt: "Terminal screenshot of Juoksuloki exporting runs into an Excel file"
---
