# Avanti × Vibeflow — Combined Design Plan

## Source Skills Analysis

### 1. Baoyu-Infographic — Layout × Style System
The 21 layouts × 21 styles framework provides a vocabulary for information design. Key layouts applicable to the Avanti proposal:

| Layout | Use Case |
|--------|----------|
| `winding-roadmap` | 90-day phase overview — journey with milestones |
| `hub-spoke` | Each phase's core service with connected sub-items |
| `bento-grid` | Mixed content (stats, workflow items, metrics) |
| `dashboard` | KPI/metric display for retention rates |
| `circular-flow` | Customer lifecycle (discover → order → return) |
| `linear-progression` | Day-by-day breakdown within each phase |

**Key insight**: Since no AI image generation tool is available, implement these layout patterns directly in HTML/CSS as infographic sections within the proposal pages. Glass cards with icons, stats, and tags achieve the same visual density as image-based infographics.

### 2. Pretext — Bangla/English Font Test
- **Confirmed**: Bangla (Noto Sans Bengali) and English (Inter) fonts CAN be changed per text block by passing different font strings to `prepareWithSegments(text, font)`.
- For mixed Bangla+English text, using Noto Sans Bengali alone covers Latin characters well enough, but for best visual quality, segment texts by language.
- Canvas-based kinetic typography is feasible for future hero animations.
- **Caveat**: CDN/esm.sh loading can fail in some environments; always preload fonts via `<link>` tags.

### 3. Claude-Design + Popular-Web-Designs — Combined Design Direction

**Recommended hybrid direction: Notion warmth + Airbnb photographic touch**

| Aspect | Source | Why |
|--------|--------|-----|
| **Card rhythm, layout structure** | Notion | Whisper-thin borders, warm neutrals, generous vertical spacing |
| **Color atmosphere** | Current (warm dark) + Airbnb | Keep warm dark base `#0A090B`, use accent red `#C4332E` sparingly |
| **Typography** | Notion (modified Inter) | Playfair Display for headings (current), Inter for body |
| **Photography/infographic treatment** | Airbnb | Full-width screenshots with generous radius |
| **Motion** | Framer inspiration | Subtle scroll reveals, not aggressive animations |
| **Dark surface treatment** | Current (glass/glass-s) | Keep glassmorphism — it works well with the warm dark palette |

**Structure borrow**: Notion's `whisper border + warm neutral + generous spacing` pattern.
**Mood borrow**: Current warm dark + red accent (already established and proven).

No need to rewrite the existing palette — it's already strong. Instead, apply the infographic layouts to roadmap.html using the existing design token system.

### 4. P5.js Consultation — Motion & Kinetic Elements

Potential p5.js applications for the proposal (future):
- **Hero particle system**: Subtle ambient particles behind the headline (flow field or noise-driven)
- **Kinetic typography**: Bangla text animated letter-by-letter with p5.js
- **Data visualization**: Animated bar/radar charts for the ROI section
- **Interactive timeline**: Clickable phase nodes that expand on the roadmap page

**Recommendation**: Save p5.js for a future enrichment pass. For now, the GSAP animations already in place are sufficient. Adding p5.js now risks visual overload and performance issues on mobile.

---

## Implementation Plan

### Phase A: Expand Roadmap Page with Infographic Content
- Each phase gets a detailed workflow infographic section below the timeline
- Layout: `hub-spoke` (central phase → sub-items) → `bento-grid` (detailed cards)
- Reuse existing glass cards, stat badges, and tag system
- Content: Add 5-6 specific workflow steps per phase

### Phase B: DESIGN.md & MOTION.md
- Create DESIGN.md capturing the current design system
- Create MOTION.md for animation standards
- Place at project root (proposal-folder root)

### Phase C: Folder Organization
- Create `_design/` folder for DESIGN.md, MOTION.md, and design assets
- Keep `working-draft/` clean with only deliverable files
- Add the new infographic sections to roadmap.html
