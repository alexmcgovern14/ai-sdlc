# Midnite Design System

<!-- Reference this file before writing any UI or front-end output -->

## Design Tokens

### Colours

- **Green (brand):** `#46FF33` — `fg-brand` from live site. Use for hero backgrounds, accents, CTAs.
- **Green (dim):** `#2ECC1F` — darker green for hover/contrast states.
- **Background (primary):** `#0D0D0D` — primary content background.
- **Background (card):** `#161616` — cards, elevated surfaces.
- **Text (primary):** `#FFFFFF`
- **Text (secondary):** `#A3A3A3`

**CSS variables:**

```css
--midnite-green: #46FF33;
--midnite-green-dim: #2ECC1F;
--midnite-bg-dark: #0D0D0D;
--midnite-bg-card: #161616;
--midnite-text-primary: #FFFFFF;
--midnite-text-secondary: #A3A3A3;
--midnite-font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--midnite-font-heading: 'Gravity', sans-serif;
```

### Typography

- **Heading font:** Gravity — black weight (900), uppercase. Used for hero titles and section headings (matches "WE ARE MIDNITE" on site).
- **Body font:** Inter — all non-heading text.

### Spacing
- Base unit: TBD
- Scale: TBD

### Border Radius
- Cards / content boxes: `18px`

### Shadows / Elevation
- TBD

## Components

### Content Box (`.content-box`)

Standard container for grouped content blocks (e.g. Discovery, Adoption, Build vs Buy).

- **Background:** `#2C2E30`
- **Text:** `#FFFFFF`
- **Border-radius:** `18px`
- **Padding:** `24px` (all sides)
- **Border:** `2px solid transparent` (default)

**Variants:**
- **Default:** no border (transparent)
- **Highlight / recommended:** `.content-box--highlight` — `border-color: var(--midnite-green)`

## Conventions

- Dark theme first, high contrast
- Minimal ornamentation — motion is for clarity, not decoration
- Content prioritises readability and hierarchy
- Source of truth: [midnite.com](https://www.midnite.com) — tokens verified via browser inspect
