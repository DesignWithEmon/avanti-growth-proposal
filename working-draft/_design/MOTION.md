# Avanti × Vibeflow — Motion System

## Motion Philosophy
Motion in this proposal is **cinematic but restrained** — like the slow deliberate movements of a fine dining server. Every animation should feel intentional and premium, never gimmicky or distracting.

## Duration Scale
| Token | Duration | Use |
|-------|----------|-----|
| `fast` | 200–400ms | Micro-interactions (hover, button press) |
| `normal` | 600–800ms | Scroll reveals, card entrances |
| `slow` | 1000–1500ms | Hero entrance, phase transitions |
| `cinematic` | 2000–8000ms | GSAP scrub phases (scroll-driven) |

## Easing Presets
All animations use `power3.out` or `power2.inOut` for natural-feeling motion.

| Token | Curve | Use |
|-------|-------|-----|
| `ease-out` | `power3.out` | Element entrances — overshoot slightly then settle |
| `ease-in-out` | `power2.inOut` | Transitions between sections |
| `ease-none` | `linear` | Scroll-linked parallax only |
| `spring` | Not used | Keep physics-free for consistent scroll experience |

## Scroll-Reveal Pattern (GSAP + ScrollTrigger)

### Standard Section Reveal
```javascript
gsap.utils.toArray('.info-card, .service-card, .pricing-card, .timeline-item').forEach(function(el, i) {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: 'top 88%' },
    y: 40,
    opacity: 0,
    duration: 0.7,
    delay: i * 0.08,
    ease: 'power3.out'
  });
});
```
- Starts at `top 88%` — reveals before element enters viewport
- Stagger: 80ms between consecutive items
- Duration: 700ms

### Hero Entrance
```javascript
gsap.from('.hero-section .hero-one-liner', { opacity: 0, y: 30, duration: 0.8, delay: 0.2 });
gsap.from('.hero-section .hero-headline', { opacity: 0, y: 30, duration: 0.8, delay: 0.4 });
gsap.from('.hero-section .hero-sub', { opacity: 0, y: 30, duration: 0.8, delay: 0.6 });
gsap.from('.hero-section .hero-actions', { opacity: 0, y: 30, duration: 0.8, delay: 0.8 });
```
- Sequential entrance: tag → headline → description → buttons
- 200ms delay between each element
- 800ms duration per element

### Orb Parallax
```javascript
gsap.to('.glow-orb', {
  scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 },
  y: 120,
  rotation: 25,
  ease: 'none'
});
```
- Links to full page scroll
- Subtle y-offset + rotation
- `scrub: 2` for smooth iOS-style tracking

## Interactive States

### Button Hover
- `transform: translateY(-3px)` — subtle lift
- `box-shadow` intensifies on primary buttons
- Transition: `all 0.2s duration`

### Card Hover
- Border increases brightness: `rgba(255,255,255,0.05)` → `rgba(255,255,255,0.12)`
- No scale transform — keep cards stable to avoid layout reflow

### Theme Toggle
- `scale(1.1)` on hover
- `position: fixed` — no motion on click, just `location.reload()`

## Scroll-Linked Elements

### Progress Bar
```css
.progress-bar {
  position: fixed; top: 0; left: 0; z-index: 9999;
  height: 2px;
  background: linear-gradient(90deg, #C4332E, #e8613a);
  width: 0%;
  transition: width 80ms linear;
}
```
- Updates every scroll event
- Fast transition (80ms) avoids laggy bar

### GSAP 3-Phase Scroll Hero (if used)
- 850vh tall section with `position: sticky`
- Timeline layout: poly hero (0–16%) → phase 1 (24–46%) → phase 2 (46–68%) → phase 3 (68–90%)
- `scrub: 2` on master timeline
- Card entrance: fly-in (y + rotation) for overview, fade-up for details

## Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
- All GSAP and CSS animations respect this
- Fallback: static layout, no scroll-driven effects
- Keep manual-trigger interactions (theme toggle, CTA) working

## Do's
- Use `power3.out` for natural-feeling entrances
- Link scroll reveals to GSAP ScrollTrigger for performance
- Keep delays short (80ms staggered) — never >200ms between items
- Use `scrub` for parallax elements only (orbs, backgrounds)
- Respect `prefers-reduced-motion`

## Don'ts
- No continuous autoplay animations (spinners, loops)
- No spring physics in scroll context — use CSS transitions instead
- No `gsap.to` on style attributes that trigger layout (width, height, margin)
- No animation on cards that would shift other elements
- No GSAP timelines that depend on external state (resize, orientation)
