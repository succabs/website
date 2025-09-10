# Arttu Portfolio – Brandbook

# Poster Wave UI — Style Guide

- A bold, poster-inspired UI that blends Japanese woodblock color (blue + cream + vermilion) with arcade/fighter-select shapes (thick outlines, stamps, flags). Typography does the heavy lifting; components are simple and graphic.
  Brand traits:
- Brave: strong blocks of color, oversized type, visible edges.
- Readable: body on calm surfaces (cream), generous spacing.
- Playful-serious: arcade hover states, but no gimmicks.

## Usage

Blue is the stage (page background).
Cream is the paper (cards, long text).
Black outlines frame almost everything.
Red is the punch: buttons, stamps, small bars.

## Typography

Headings: Anton, uppercase, tight tracking, heavy.
Sizes:
h1: clamp(2rem, 5vw, 4rem)
h2: clamp(1.5rem, 4vw, 2.5rem) + short underline bar (see Dividers)
h3: clamp(1.1rem, 4vw, 2rem)
Body: Inter 400–500, line-height 1.6–1.75.
On blue: text is cream.
On cream: text is black (--color-outlines).

## Spacing

Page gutters: 64px desktop, 16–32px mobile.
Vertical rhythm between major sections: ~3–4rem.
Card padding: 1.25–1.5rem.

## Iconography

Solid, single-color, sized to text (usually 1em in chips, 32px in footer).
fill: currentColor so color changes cascade.

## Interaction

Links
On blue: cream text with a muted ink underline, offset for comfort.
On cream: black text with black underline.
Hover: underline turns red; text color usually stays.

## Motion

Subtle: small translateY on hover (2–4px).
Respect prefers-reduced-motion.

## Dividers (HRs)

Three variants carry the “poster bar” motif. Use as structural rhythm, not decoration.

## Footer

Full-bleed vermilion (--accent), white text/icons, black 6px top rule.
Content constrained inside .inner.

## Imagery

Prefer duotone or desaturated images to fit the palette.
Always framed with a black border in cards.
Aspect ratios: 16:10 or 16:9.

## Do / Don’t

### Do

Use cream cards for any long copy.
Keep outlines visible and consistent (3px).
Use red sparingly: actions, stamps, small bars.

### Don’t

Put long paragraphs directly on blue.
Use soft drop shadows; rely on borders and motion.
Overuse gradients; the brand is flat and graphic.

## Accessibility notes

Contrast: cream on blue and black on cream both pass comfortably.
Focus rings: always visible; swap to black on cream surfaces.
Touch targets: 44px min for buttons/chips.

## Blog post tags

- tech // teknologia, laitteet, AI
- development // koodi, dev-flow, työ
- learning // kieli, uudet taidot, reflektiot
- personal // omat ajatukset, terveys, arki
- hobbies // DJ, kalastus, muut kiinnostuksen kohteet
