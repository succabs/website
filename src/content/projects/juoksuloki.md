---
id: juoksuloki
title: "Juoksuloki"
summary: "CLI that exports Suunto iOS workouts into tidy Excel sheets for long-form analysis."
description: |
  Weekend tool that scratches a personal itch: keeping a local archive of every run without vendor lock-in. Juoksuloki
  pulls GPX data via the Suunto App API, normalises it with Pandas, and spits out structured Excel workbooks with pace,
  heart rate and temperature splits ready for pivot tables.
category: "Personal Tools"
chapterIndex: 2
status: released
date: 2023-11-05
tags: ["Python", "Pandas", "CLI"]
stack: ["Python", "Pandas", "Rich", "OpenPyXL"]
role: "Solo Builder"
outcomes:
  - "Turned weekly log reviews into a repeatable 5 minute ritual."
  - "Shared template adopted by three running buddies."
panelSize: s
funFact: "Named after the Finnish word for run log."
links:
  repo: "https://github.com/succabs/juoksuloki"
images:
  - src: "../../assets/juoksuloki_screenshot.png"
    alt: "Terminal screenshot of Juoksuloki exporting runs into an Excel file"
---
