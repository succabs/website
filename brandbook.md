# Arttu Portfolio – Brandbook

## 🎨 Color Palette

| Name        | Hex     | Usage                              |
| ----------- | ------- | ---------------------------------- |
| Background  | #FAF8F4 | Page background                    |
| Text (dark) | #1A1A1A | Headings, main text                |
| Gray        | #BDBDBD | Borders, secondary text            |
| Red         | #E53935 | Primary accent (buttons, titles)   |
| Blue        | #1E88E5 | Secondary accent (hover, links)    |
| Yellow      | #FDD835 | Tertiary accent (graphics, blocks) |

Each page may emphasize one accent color as part of the visual theme.

---

## 🔠 Typography

### Headings

- **Font:** Helvetica Neue / Helvetica / Arial fallback
- **Weight:** 700 (bold) for primary headings, 500 for subheadings
- **Sizes:**
  - H1: `clamp(48px, 6vw, 96px)`
  - H2: 48px
  - H3: 32px

### Body Text

- **Font:** Inter
- **Weight:** 400
- **Size:** 16–18px
- **Line height:** 1.6
- **Max width:** 65ch

---

## 🟦 Layout & Structure

- **Grid:** 12-column, `max-width: 1200px`, `gutter: 64px`
- **Content padding:** `padding-inline: 32px` on mobile, `64px` on desktop
- **Vertical spacing:** `margin-block: 64px` minimum between sections

---

## 🧩 UI Components

### Navigation

- Single row, positioned top-left or top-right
- Link text only (no buttons), uppercase, Helvetica, `font-size: 16px`
- Active link: accent color or underline

### Hamburger Menu

- Custom SVG or canvas drawing
- Three distinct bars (vary in size or weight)
- Animated open/close effect

### Buttons

- Rectangle shape, no shadows, no border-radius
- Uppercase Helvetica bold
- Hover: background switches to accent color, text in high-contrast

### Footer

- Small Helvetica, `font-size: 14px`, color: #BDBDBD
- Text only or minimal link list

---

## 🧭 Page Color Emphasis

| Page       | Theme Color   | Emphasis                          |
| ---------- | ------------- | --------------------------------- |
| Home       | Blue          | Clarity                           |
| Experience | Red           | Structure, intensity              |
| Projects   | Yellow        | Creativity                        |
| Skills     | Gray          | Technical calm                    |
| About      | White/Black   | Professional and personal balance |
| Questbook  | Mixed         | Playful, engaging                 |
| Blog       | Gray + accent | Readability                       |

---

## 📐 Graphic Language

- **Shapes:** Circles, squares, triangles – used in backgrounds, dividers, headers
- **Style:** SVG or drawn by hand (no textures or shadows)
- **Images:** Minimalist, purpose-driven. No stock images.

---

## 🗣️ Tone & Content

- **Tone:** Professional but personal. Clear, human voice.
- **Style:** Direct, information-first. Avoid fluff.
- **Examples:**
  - “I’m a Shopify developer based in Jyväskylä, currently working in consulting.”
- **Grammar:** Clean and precise, not overly formal

---

## ✅ Dev Summary for Codex & Astro

- **Fonts:** Helvetica (headings), Inter (body)
- **Colors:**
  - Background: `#FAF8F4`
  - Accents: `#E53935`, `#1E88E5`, `#FDD835`
- **Grid:** 12-col, `max-width: 1200px`, `gutter: 64px`
- **Spacing:** `margin-block: 64px` minimum between blocks
- **Components:**
  - Buttons: uppercase, bold, no shadow, accent hover
  - Navigation: text-only, all caps
  - Hamburger: custom graphic, three unique bars
- **No shadows, no border radius**, no UI libraries
