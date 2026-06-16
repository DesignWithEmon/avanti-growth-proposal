# Avanti × Vibeflow — Design System

## Visual Thesis
A warm dark hospitality proposal system that feels **premium but approachable** — like a candlelit restaurant table where the owner himself explains the plan. Not a cold fintech deck, not a generic agency proposal.

## Brand Colors

### Primary Palette
| Token | Value | Role |
|-------|-------|------|
| `--bg-dark` | `#0A090B` | Page background — deep, warm near-black |
| `--surface-dark` | `#121013` | Card/secondary surface — slightly lifted |
| `--text-light` | `#F6F1E8` | Primary text — warm cream |
| `--text-muted` | `#D2C4B5` | Muted descriptions |
| `--text-dim` | `rgba(255,255,255,0.5)` | Body text |
| `--text-faint` | `rgba(255,255,255,0.35)` | Captions, badges |

### Accent System
| Token | Value | Role |
|-------|-------|------|
| `--accent-red` | `#C4332E` | Primary accent — urgency, action, phase 1 |
| `--accent-red-dark` | `#8E231F` | Pressed state |
| `--accent-gold` | `#D7B25F` | Secondary accent — warmth, phase 2 |
| `--accent-gold-hover` | `#fbbf24` | Hover state |
| `--accent-gold-dark` | `#9A6C3C` | Muted gold |
| `--accent-emerald` | `#22c55e` | Success — phase 3, metrics, ROI |

### Glass System
| Token | Value | Role |
|-------|-------|------|
| `--glass-1` | `rgba(255,255,255,0.03)` | Subtle glass |
| `--glass-2` | `rgba(255,255,255,0.06)` | Medium glass |
| `--glass-3` | `rgba(255,255,255,0.08)` | Strong glass |
| `--glass-4` | `rgba(255,255,255,0.12)` | Border glass |

### Gradient Text
- `t-grad`: `linear-gradient(135deg, #fff, #fca5a5, #C4332E)` — white → pink → red
- `t-gold`: `linear-gradient(135deg, #fff, #fbbf24, #9A6C3C)` — white → gold → dark gold
- `t-emerald`: `linear-gradient(135deg, #fff, #22c55e, #059669)` — white → green → dark green

## Typography

| Role | Font | Size | Weight | Line Height |
|------|------|------|--------|-------------|
| Display/Headline | Playfair Display | `clamp(2rem, 5vw, 4.5rem)` | 700 | 1.08 |
| Section Title | Playfair Display | `clamp(1.8rem, 4vw, 3.2rem)` | 700 | 1.15 |
| Sub-heading | Inter | 0.95–1.0rem | 700 | 1.3 |
| Body | Inter | 0.85rem | 400 | 1.6 |
| Small/Caption | Inter | 0.65–0.78rem | 400–600 | 1.5 |
| Badge | Inter | 9–10px | 600 | 1.1 |
| Label/Uppercase | Inter | 11–12px | 600 | — |

### Font Loading
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.8/400.css"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.8/600.css"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.8/700.css"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.8/800.css"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap"/>
```

### Bangla Text Rules
- No **সাধু ভাষা** (formal/archaic). Use **চলিত** (conversational) Bangla throughout.
- Acceptable mixed English: brand names (Avanti, Vibeflow, Google, WhatsApp, Facebook, Instagram)
- Replace mixed words: `সার্ভিস→সেবা`, `রিভিউ→পর্যালোচনা`, `ডেটা→তথ্য`, `রিটেনশন→ধরে রাখা`
- Keep `SEO`, `ROI`, `CRM` as acronyms only when space is tight

## Spacing Scale
Base unit: 8px
- Section padding: 80px (desktop), 60px (tablet), 40px (mobile)
- Card padding: 20–24px
- Stack gaps: 12–14px
- Timeline padding-left: 32px

## Border Radius Scale
- Buttons: 9999px (pill)
- Cards: 14–18px
- Hub cards: 20px
- Tags: 6px
- Icons: 10–12px
- Image containers: 8–12px

## Glass System
All cards and containers use `.glass` (subtle) or `.glass-s` (strong) classes:
```css
.glass { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.08); }
.glass-s { background: rgba(255,255,255,0.06); backdrop-filter: blur(30px); border: 1px solid rgba(255,255,255,0.12); }
```

## Component Rules

### Navigation
- Bottom pill nav: fixed, centered, glass-blur, active state uses red-tinted background
- Dot indicator on brand link: 5px red circle with pulse animation
- Nav links: white at 45% opacity, active at 100% with red-tinted bg

### Hero
- Min-height: 90vh
- Background: dark with radial gradient (warm brown → black)
- Gradient orbs: blurred circles at 20% opacity, parallax via GSAP
- "Secret Blueprint" tag: red pill with subtle red border
- Headline: gradient text (t-grad) with emphasis line via `<span class="text-[#ef4444]">`
- CTA buttons: red gradient pill (primary), glass pill (secondary)

### Service Cards
- Glass surface, 18px radius
- Large number in top-right at 6% opacity (decorative)
- Icon in tinted background box (44×44px, 12px radius)
- Description at 0.82rem, 50% opacity
- Study stat section: green tinted box with stat number + source

### Pricing Cards
- Max-width: 4xl (448px)
- Glass surface, 20px radius
- Popular tier: 2px red border, subtle red glow
- Popular badge: absolute top-right, red gradient
- Check marks: emerald green

### Timeline
- Vertical line: gradient from red → gold → emerald
- Dots: 20px circles with tinted bg + colored border
- Content: glass card with period badge, heading, description, tags

### Infographic Hubs (new)
- Hub card: flex layout with colored marker line on left (4px wide)
- Stats row: 3 stat blocks with number + label
- Workflow cards (bento grid): 1→2→3 column responsive
- Deliverable tag at bottom of each card: subtle glass tag with colored dot

### Lifecycle Grid
- 3-column responsive grid
- Each stage card: centered with stage number badge, icon, title, description
- Arrow indicators between cards
- Return banner spans full width

### Metrics Dashboard
- 3-column grid
- Large metric value with gradient or color
- Metric label and source attribution below

## Do's
- Use gradient text (t-grad, t-gold) sparingly — only on key headlines
- Keep glass effect subtle — blur with low opacity backgrounds
- Use colored side markers on hub cards for phase distinction
- Red → Gold → Emerald phase progression for visual narrative
- Tag lists on content cards for quick scanning
- Deliverable badges on workflow cards

## Don'ts
- No pure black backgrounds — always `#0A090B` (warm)
- No bright/neon colors — stay in the warm dark + accent palette
- No pure white text — always cream `#F6F1E8` or tinted white
- No heavy shadows — use glass borders instead
- No injected stock photos or decorative illustrations
- No metric aggregation from internal client data

## File Structure
```
working-draft/
├── index.html          — Landing page (hero, services, ROI calculator)
├── roadmap.html        — 90-day plan (timeline + infographic workflow)
├── pricing.html        — Investment packages
├── discussion.html     — Public Q&A + lead capture
├── css/
│   └── style.css       — Shared design system
├── js/
│   └── script.js       — Language toggle, theme, ROI calc, GSAP
└── _design/
    ├── DESIGN.md       — This file
    └── MOTION.md       — Motion standards
```
