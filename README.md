# PropSoch Landing Page — UI/UX & Performance Improvement

An improved version of the [PropSoch](https://www.propsoch.com/) landing page, built as part of a frontend assignment.

The objective was to improve the **UX, visual consistency, accessibility, SEO, responsiveness, and performance** while maintaining the core purpose and content of the original website.

---

## 1. Assignment Overview

### Objective

Analyze the existing PropSoch landing page and build an improved version with:

* Redesigned Hero section
* Improved sections from the original website
* Responsive desktop and mobile experience
* Optimized image delivery
* Better accessibility
* Improved SEO
* Reduced user interaction friction
* More consistent visual design

### Tech Stack

* Next.js
* TypeScript
* React
* Tailwind CSS
* Next.js Image Optimization

---

# 2. Lighthouse Analysis

The original and improved versions were evaluated using Google Lighthouse.

| Category       | Original | Improved |
| -------------- | -------: | -------: |
| Performance    |       61 |       85 |
| Accessibility  |       80 |      100 |
| Best Practices |       96 |       96 |
| SEO            |       83 |       92 |

> Lighthouse scores can vary depending on network conditions, device configuration, browser version, and testing environment.

---

# 3. UX/UI Issues Identified & Improvements

## 3.1 Hero Search Experience

### Issue

The original Hero experience required additional interaction before users could effectively start searching for a property.

This increased interaction friction at the most important point of the landing page.

### Improvement

Redesigned the Hero section and brought the primary property-search filters directly into the initial experience:

* Location
* Property Type
* Budget

Also added credibility points to establish trust earlier in the user journey.

### Result

Users can understand the product, establish initial trust, and start their property search with fewer interactions.

---

## 3.2 CTA Consistency & Accessibility

### Issue

The landing page used inconsistent CTA styling. In particular, the final banner CTA used a white button while the primary CTA pattern elsewhere used the brand's orange color.

This created inconsistent visual hierarchy and reduced clarity around the primary action.

Some CTA color combinations also required improvement from an accessibility perspective.

### Improvement

* Standardized primary CTA styling across the page
* Changed the final banner CTA to match the primary CTA system
* Reviewed CTA contrast against **WCAG 2.2 AA** requirements
* Improved button interaction feedback with appropriate pointer cursors

### Result

CTAs now have a more consistent visual language while providing clearer interaction feedback and improved accessibility.

---

## 3.3 Property Comparison Interaction

### Section

> **"Brokers show you the brochure. We show the reality."**

### Issue

The original before/after comparison drag interaction could move too aggressively and was difficult to control precisely.

### Improvement

Reworked the drag interaction with controlled movement and clearer interaction boundaries.

### Result

The comparison is now:

* Easier to control
* More predictable
* Easier to understand
* Better suited for touch interaction

---

## 3.4 Sticky Scroll Experience

### Section

> **"Buying a property should not take you forever"**

### Issue

The original implementation could interrupt the natural page scroll.

The right-side content could become stuck, while the left-side sticky content did not behave correctly throughout the intended scroll range.

### Improvement

Reworked the scroll behavior so that:

* The left panel remains sticky while relevant content is being consumed
* The right-side content scrolls naturally
* Sticky behavior ends when the section content is completed
* Normal page scrolling resumes afterward

### Result

The section no longer traps the user's scroll and provides a more natural browsing experience.

---

# 4. Design Improvements

## 4.1 Hero Section

The Hero section was completely redesigned to improve the first impression and reduce interaction friction.

### Improvements

* Clearer visual hierarchy
* Integrated property search
* Location, Property Type and Budget filters
* Added credibility points
* Improved CTA hierarchy
* Improved spacing and typography
* Responsive layout
* Improved CTA contrast

### Design Goal

The Hero should immediately communicate:

1. What PropSoch does
2. Why users should trust it
3. What they can do next

---

## 4.2 Stats Section

The statistics section was redesigned to make important numbers easier to scan.

### Improvements

* Improved visual hierarchy
* More prominent statistics
* Better spacing
* Improved number presentation
* Responsive layout

The goal was to make the statistics feel more meaningful and easier to consume.

---

## 4.3 Developer Section

The developer-focused section was refined to improve its visual hierarchy and consistency with the redesigned Hero.

### Improvements

* Improved layout
* Better spacing
* Improved typography
* Consistent visual treatment
* Responsive behavior

---

# 5. Accessibility

Accessibility improvements were implemented across the landing page.

### Improvements

#### WCAG 2.2 AA Contrast

Reviewed important interactive elements, particularly CTAs, and adjusted color combinations to provide better contrast.

#### Accessible Names

Added descriptive accessible names to interactive elements.

#### ARIA Labels

Added appropriate `aria-label` attributes where additional context was required for assistive technologies.

#### Image Alt Text

Added descriptive `alt` attributes to images to improve both accessibility and image SEO.

#### Interactive Feedback

Added appropriate pointer cursor behavior to clearly communicate clickable elements.

---

# 6. SEO Improvements

## FAQ Structured Data

Added **Schema.org FAQ structured data** to help search engines better understand the FAQ content.

This improves the semantic structure of the page and can make the FAQ content eligible for enhanced search features when supported by search engines.

## Image SEO

Added descriptive image `alt` text to provide meaningful context for search engines and screen readers.

---

# 7. Performance Improvements

## Image Optimization

The original implementation primarily used PNG images, which can result in larger image payloads for photographic and complex visual content.

Configured Next.js image optimization to support modern formats:

```ts
formats: ["image/avif", "image/webp"]
```

### Benefits

* Smaller image payloads
* Faster image loading
* Reduced bandwidth usage
* Better mobile performance

## Resource Preconnect

Added `preconnect` for important external resources.

This allows the browser to establish required connections earlier and can reduce connection overhead during initial page loading.

---

# 8. Responsive Design

The landing page was optimized for both desktop and mobile devices.

### Desktop

* Improved section layouts
* Better content hierarchy
* Sticky scroll behavior
* Controlled comparison interaction
* Optimized spacing

### Mobile

* Responsive Hero layout
* Responsive search filters
* Improved content stacking
* Touch-friendly interactions
* Responsive typography
* Mobile-optimized spacing
* Corrected scrolling behavior

The implementation adapts the layout and interactions for smaller screens rather than simply scaling down the desktop version.

---

# 9. Improvements at a Glance

| Area          | Improvement                              |
| ------------- | ---------------------------------------- |
| Hero          | Complete redesign                        |
| Search UX     | Location, Property Type & Budget filters |
| Credibility   | Added trust-focused information          |
| CTA           | Consistent primary CTA styling           |
| Accessibility | WCAG 2.2 AA contrast improvements        |
| Accessibility | ARIA labels and accessible names         |
| Interaction   | Improved clickable element feedback      |
| Stats         | Redesigned statistics presentation       |
| Comparison    | Controlled before/after drag interaction |
| Scrolling     | Fixed sticky and scroll behavior         |
| SEO           | Added FAQ Schema.org structured data     |
| SEO           | Added descriptive image alt text         |
| Performance   | AVIF/WebP image delivery                 |
| Performance   | Added resource preconnect                |
| Responsive    | Improved desktop and mobile layouts      |

---

# 10. Technical Implementation

## Next.js

Used for:

* Application architecture
* Image optimization
* SEO configuration
* Performance optimization
* React component architecture

## TypeScript

Used for:

* Type safety
* Component props
* Maintainable code
* Better developer experience

## Tailwind CSS

Used for:

* Responsive layouts
* Spacing
* Typography
* Component styling
* Responsive breakpoints

---

# 11. Getting Started

## Prerequisites

* Node.js 18+
* npm, pnpm, or yarn

## Installation

```bash
git clone <your-github-repository-url>

cd <project-directory>

npm install
```

## Development

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# 12. Production Build

```bash
npm run build
```

```bash
npm run start
```

---

# 15. Submission

### GitHub Repository



### Live Website



---

# 15. Conclusion

The redesign focused on improving both the **user-facing experience and the technical quality** of the landing page.

The key improvements include:

* A redesigned Hero with integrated property search
* Reduced interaction friction
* Consistent and accessible CTAs
* Improved before/after comparison interaction
* Fixed sticky and scroll behavior
* Improved responsive experience
* FAQ structured data for SEO
* Descriptive image alt text
* Modern image formats using AVIF/WebP
* Resource preconnect for improved loading
* Improved accessibility across interactive elements

The result is a more **consistent, accessible, responsive, and performant** PropSoch landing page.
