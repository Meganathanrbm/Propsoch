# PropSoch Landing Page - Redesign & Performance Improvement

An improved version of the [PropSoch](https://www.propsoch.com/) landing page, built as a frontend assignment. The goal was to improve **UX, visual consistency, accessibility, SEO, responsiveness, and performance** while keeping the original page's core purpose and content.

- **Live site:** https://propsoch-sandy.vercel.app/
- **GitHub repo:** https://github.com/Meganathanrbm/Propsoch
- **Tech stack:** Next.js, TypeScript, Tailwind CSS

---

## Part 1 - Analysis

### 1.1 Lighthouse Scores

| Category       | Original | Improved |
| -------------- | -------: | -------: |
| Performance    |       61 |       91 |
| Accessibility  |       80 |       97 |
| Best Practices |       96 |      100 |
| SEO            |       83 |      100 |

**Before**

<img width="1477" height="210" alt="Before Lighthouse score" src="https://github.com/user-attachments/assets/3b8c4433-4d11-4672-be07-2ae8cde52f2e" />

**After**

<img width="1479" height="218" alt="After Lighthouse score" src="https://github.com/user-attachments/assets/0d5b5dd8-6154-4e53-b750-2964c490318b" />

> Lighthouse scores can vary depending on network conditions, device configuration, browser version, and testing environment.

### 1.2 UX/UI Issues & Fixes

#### 1. Hero search experience (interaction friction)
**Issue:** The original Hero required extra interaction before a user could start searching for a property, the most important action on the page had unnecessary friction.

**Fix:** Brought the primary search filters (Location, Property Type, Budget) directly into the Hero, and added credibility indicators near the fold to build trust immediately.

#### 2. CTA inconsistency & contrast
**Issue:** CTA styling was inconsistent - the final banner CTA used a white button while the rest of the page used the brand orange, weakening visual hierarchy. Some CTA color pairs also had weak contrast.

**Fix:** Standardized primary CTA styling site-wide, matched the banner CTA to the primary system, and reviewed all CTA color pairs against **WCAG 2.2 AA** contrast requirements. Added pointer-cursor feedback on interactive elements.

#### 3. Property comparison (drag) interaction
**Issue:** In the "Brokers show you the brochure. We show the reality." section, the before/after drag slider moved too aggressively and was hard to control precisely, especially on touch.

**Fix:** Reworked the drag handler with controlled movement and clear boundaries, making the interaction predictable on both mouse and touch.

#### 4. Sticky scroll behavior
**Issue:** In the "Buying a property should not take you forever" section, the sticky left panel didn't track the right-side content correctly and could trap page scroll.

**Fix:** Reworked the scroll logic so the left panel stays sticky only while its related content is in view, then releases normal page scroll once the section completes.

#### 5. Image delivery & mobile performance
**Issue:** The original site served large PNG images with no modern-format fallback, increasing payload size and hurting mobile load time (reflected in the 61 Performance score).

**Fix:** Enabled Next.js image optimization with AVIF/WebP output and responsive `next/image` sizing, and added `preconnect` for key external resources to shorten connection setup time.

---

## Part 2 - Build

### Sections implemented
- **Hero** - fully redesigned with integrated search filters and trust badges (`components/sections/hero/`)
- **Stats** - redesigned for clearer scanning of key numbers (`components/sections/stats/`)
- **Comparison** - reworked drag-to-compare interaction (`components/sections/comparison/`)
- Additional sections carried over and refined: Process/timeline, Trusted-by marquee, Master plan, FAQ (with structured data)

### Responsive design
- **Desktop:** refined section layouts, sticky scroll behavior, controlled comparison interaction, tightened spacing
- **Mobile:** responsive Hero and filter layout, touch-friendly comparison slider, adjusted type scale and stacking — layouts are adapted per breakpoint rather than scaled down from desktop

### Image optimization
- `next/image` with AVIF/WebP output (`formats: ["image/avif", "image/webp"]` in `next.config.ts`)
- Descriptive `alt` text on all images (accessibility + image SEO)

### Accessibility & SEO
- WCAG 2.2 AA contrast pass on interactive elements
- `aria-label`s added where assistive-tech context was needed
- Schema.org **FAQ structured data** added for richer search results

---

## Part 3 - What Changed & Why

| Area          | Improvement                              |
| ------------- | ----------------------------------------- |
| Hero          | Complete redesign with integrated search |
| Search UX     | Location, Property Type & Budget filters in Hero |
| CTA           | Consistent styling + WCAG 2.2 AA contrast |
| Comparison    | Controlled, touch-friendly drag interaction |
| Scrolling     | Fixed sticky-scroll trap in timeline section |
| Performance   | AVIF/WebP images + resource preconnect (Perf 61 → 91) |
| Accessibility | ARIA labels, alt text, contrast fixes (80 → 97) |
| SEO           | FAQ structured data, image alt text (83 → 100) |

The redesign prioritized reducing friction at the point of highest intent (search), fixing broken/uncomfortable interactions (drag comparison, sticky scroll), and closing the performance and accessibility gaps that Lighthouse flagged in the original - rather than a purely visual reskin.

---

## Getting Started

```bash
git clone https://github.com/Meganathanrbm/Propsoch.git
cd Propsoch
npm install
```

**Development**
```bash
npm run dev
```
Open http://localhost:3000

**Production**
```bash
npm run build
npm run start
```

---
