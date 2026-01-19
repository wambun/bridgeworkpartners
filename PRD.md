# Product Requirements Document (PRD)
## BridgeWork Partners Website Redesign

**Version:** 1.0
**Date:** January 19, 2026
**Status:** Phase 1 - Architecture & Planning

---

## 1. Executive Summary

This document outlines the comprehensive redesign of the BridgeWork Partners website, transforming it from the legacy WordPress-based site to a modern, premium Next.js 15 application inspired by the HR Pro Framer template design language.

### Project Goals
- Modernize the website with contemporary UI/UX patterns
- Maintain all existing content and information architecture
- Implement smooth animations and premium interactions (Framer Motion)
- Ensure responsive, mobile-first design
- Optimize for performance and SEO

---

## 2. Sitemap - Derived from Current Site (`client/old`)

### Primary Navigation Structure

```
/                           # Home
├── /about-us               # About Us (Hub)
│   ├── /about-us/core-values       # Core Values (3 C's)
│   ├── /about-us/team              # Executive Leadership Team
│   ├── /about-us/diversity         # Diversity & Inclusion
│   └── /about-us/giveback          # BridgeWorkGIVES Program
│
├── /services               # Services (Hub)
│   ├── /services/bridgeworktech    # IT & Technical Recruiting (BridgeWorkTECH)
│   ├── /services/bridgeworksearch  # Direct Hire Placements (BridgeWorkSEARCH)
│   ├── /services/bridgeworkstaff   # Professional Staffing (BridgeWorkSTAFF)
│   ├── /services/bridgeworkhr      # HR Consulting Services (BridgeWorkHR)
│   ├── /services/bridgeworksled    # State, Local & Education (BridgeWorkSLED)
│   └── /services/bridgeworkrpo     # Recruitment Process Outsourcing (BridgeWorkRPO)
│
├── /awards                 # Awards & Accolades
├── /news                   # News Archive / Newsletter
├── /testimonials           # Client Testimonials
├── /careers                # Jobs / Careers
└── /contact                # Contact Us
```

### Secondary/Utility Pages
```
├── /privacy                # Privacy Policy
├── /terms                  # Terms of Service
└── /sitemap                # HTML Sitemap (optional)
```

---

## 3. Visual Analysis - Design Target (`client/new`)

### 3.1 Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Primary Teal** | `#1B5E5E` / `#1A5A5A` | Headers, buttons, accents |
| **Primary Teal Light** | `#2A7A7A` | Hover states |
| **Background Light** | `#F5F7F7` / `#FAFBFB` | Page backgrounds |
| **Background Cream** | `#F0EDE8` | Section backgrounds |
| **Text Primary** | `#1A1A1A` | Headings |
| **Text Secondary** | `#4A4A4A` | Body text |
| **Text Muted** | `#6B6B6B` | Captions, meta |
| **White** | `#FFFFFF` | Cards, overlays |
| **Gold/Amber** | `#D4A574` | Accent highlights |

### 3.2 Typography

| Element | Font | Weight | Size (Desktop) |
|---------|------|--------|----------------|
| H1 | Serif (Editorial) | 500-600 | 48-64px |
| H2 | Serif (Editorial) | 500 | 36-48px |
| H3 | Serif (Editorial) | 500 | 28-32px |
| H4 | Sans-serif | 600 | 24px |
| H5 | Sans-serif | 600 | 18-20px |
| Body | Sans-serif | 400 | 16-18px |
| Caption | Sans-serif | 400 | 14px |

**Recommended Fonts:**
- Headings: `Playfair Display` or `Libre Baskerville` (Serif)
- Body: `Inter` or `DM Sans` (Sans-serif)

### 3.3 Key UI Components & Patterns

#### Navigation Header
- **Style:** Sticky, transparent-to-solid on scroll
- **Logo:** Left-aligned
- **Links:** Center-aligned with hover underline animation
- **CTA Button:** Right-aligned, pill-shaped with icon
- **Mobile:** Hamburger menu with slide-in panel

#### Hero Sections
- **Pattern:** Split layout with text left, featured image/card right
- **Background:** Subtle grid pattern overlay
- **Stats Pill:** Floating badge (e.g., "250+ trusted partners")
- **CTA Buttons:** Primary (filled) + Secondary (outline) with arrow icons

#### Service Cards
- **Style:** White cards with subtle shadow on hover
- **Layout:** Icon top-right, title, description, bullet features, "Details" link
- **Animation:** Lift on hover with shadow increase

#### Team Cards
- **Style:** Full-bleed image with overlay gradient
- **Info:** Name, title at bottom
- **Hover:** Scale up slightly, reveal more info

#### Testimonial Cards
- **Style:** Quote marks, business type tags
- **Avatar:** Circular with name/title
- **Animation:** Carousel/slider functionality

#### FAQ Accordion
- **Style:** Two-column grid
- **Animation:** Smooth expand/collapse
- **Icon:** Plus/minus rotation

#### Footer
- **Columns:** Navigate, Follow, Contact, Visit
- **Background:** Dark teal (#1B5E5E)
- **Text:** White with hover effects

### 3.4 Micro-interactions & Animations

| Element | Animation | Duration |
|---------|-----------|----------|
| Page Transitions | Fade + Slide up | 300-400ms |
| Button Hover | Scale 1.02 + shadow | 200ms |
| Card Hover | Lift + shadow | 200ms |
| Link Hover | Underline slide | 200ms |
| Section Entry | Fade in + slide up | 400ms (staggered) |
| Logo Marquee | Continuous scroll | 30s |
| Stats Counter | Count up on view | 1000ms |
| Accordion | Height + rotate icon | 300ms |

### 3.5 Layout Spacing System

```css
/* Tailwind Config */
spacing: {
  'section': '80px',      /* py-20 */
  'section-lg': '120px',  /* py-30 */
  'content': '40px',      /* gap-10 */
  'card': '24px',         /* p-6 */
}

container: {
  'max-width': '1400px',  /* max-w-[1400px] */
  'padding': '24px',      /* px-6 */
}
```

---

## 4. Content Mapping - Old to New

### 4.1 Home Page

| Old Content | New Component | Notes |
|-------------|---------------|-------|
| Video Hero (Dallas Drone) | Hero Section with Image/Video | Replace YouTube embed with clean video |
| "At BridgeWork Partners..." | Hero Headline + Subtitle | Rewrite copy to be punchy |
| What We Do (6 pillars) | Services Grid Cards | Use service card component |
| Our Mission | "Who We Are" Section | Bento-style layout |
| Core Values | Feature Cards | 3-C's as icons |
| BridgeWorkGIVES | CTA Banner | Prominent philanthropy callout |
| Awards | Logo Marquee + Stats | "Award winning" banner |
| Recent News | Blog/News Cards | Latest 3 items |
| Connect With Us | CTA Section | Consultation form link |

### 4.2 About Us Hub

| Old Content | New Component | Notes |
|-------------|---------------|-------|
| About Us Header | Page Hero | "Who we are" style |
| 6 Pillars Overview | Visual Feature Grid | Icons + brief descriptions |
| Services Links | Service Cards | Navigate to service pages |
| Core Values | Numbered Steps | 1-2-3 pattern |
| Leadership Links | Team Preview Cards | Link to full team page |
| Diversity Links | Feature Section | Stats + mission |
| Certifications | Logo Grid | Partner/cert badges |

### 4.3 Team Page

| Old Content | New Component | Notes |
|-------------|---------------|-------|
| Team Header | Page Hero | "Meet our team" |
| Team Members | Team Card Grid | Photo, name, title, bio modal |
| Amy Legate | Team Card | Partner |
| Wanda Granier | Team Card (Featured) | CEO - highlighted |
| Samantha Jacoby | Team Card | VP, Marketing & People |
| Jennifer Lewis | Team Card | VP of Talent Acquisition |
| Dennise Gomez | Team Card | Fort Worth Director |
| Shannon Payne | Team Card | Director, Executive Search |
| Paul Granier | Team Card | VP, Finance & IT |
| Lizeth Galvan | Team Card | HR & Payroll Manager |

### 4.4 Services Pages

| Old Service | New Route | Key Content |
|-------------|-----------|-------------|
| BridgeWorkTECH | `/services/bridgeworktech` | IT & Technical Recruiting, cybersecurity focus |
| BridgeWorkSEARCH | `/services/bridgeworksearch` | Direct hire, 21+ years expertise |
| BridgeWorkSTAFF | `/services/bridgeworkstaff` | RPO, MSP, Project Staffing, Payrolling |
| BridgeWorkHR | `/services/bridgeworkhr` | HR Consulting, 20+ years experience |
| BridgeWorkSLED | `/services/bridgeworksled` | State, Local & Education market |
| BridgeWorkRPO | `/services/bridgeworkrpo` | Recruitment Process Outsourcing |

### 4.5 Contact Page

| Old Content | New Component | Notes |
|-------------|---------------|-------|
| Corporate Office | Address Card | 4425 Plano Parkway, Carrollton |
| Fort Worth Office | Address Card | 4500 Mercantile Plaza Drive |
| Houston Office | Address Card | 9595 Six Pines Drive |
| Contact Form | Form Component | Name, Email, Phone, Subject, Message |
| Map | Map Embed (Optional) | Mapbox or static image |
| Phone Numbers | Contact Cards | 214-920-9910, 682-428-9920, 469-758-8398 |
| Email | Contact Link | info@bridgeworkpartners.com |

---

## 5. Technical Implementation Plan

### 5.1 Technology Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 |
| UI Components | Shadcn UI (custom) |
| Animations | Framer Motion |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Deployment | Vercel |

### 5.2 Project Structure

```
/app
├── layout.tsx              # Root layout with header/footer
├── page.tsx                # Home page
├── /about-us
│   ├── page.tsx            # About hub
│   ├── /core-values/page.tsx
│   ├── /team/page.tsx
│   ├── /diversity/page.tsx
│   └── /giveback/page.tsx
├── /services
│   ├── page.tsx            # Services hub
│   ├── /bridgeworktech/page.tsx
│   ├── /bridgeworksearch/page.tsx
│   ├── /bridgeworkstaff/page.tsx
│   ├── /bridgeworkhr/page.tsx
│   ├── /bridgeworksled/page.tsx
│   └── /bridgeworkrpo/page.tsx
├── /awards/page.tsx
├── /news
│   ├── page.tsx            # News listing
│   └── /[slug]/page.tsx    # Individual news article
├── /testimonials/page.tsx
├── /careers/page.tsx
└── /contact/page.tsx

/components
├── /layout
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── MobileNav.tsx
│   └── PageHero.tsx
├── /sections
│   ├── HeroSection.tsx
│   ├── ServicesGrid.tsx
│   ├── TeamSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── StatsSection.tsx
│   ├── FAQSection.tsx
│   └── CTASection.tsx
├── /cards
│   ├── ServiceCard.tsx
│   ├── TeamCard.tsx
│   ├── TestimonialCard.tsx
│   └── NewsCard.tsx
├── /ui                     # Shadcn components
│   ├── button.tsx
│   ├── accordion.tsx
│   ├── card.tsx
│   └── ...
└── /shared
    ├── Logo.tsx
    ├── SectionHeader.tsx
    └── AnimatedSection.tsx

/lib
├── constants.ts            # Site metadata, nav items
├── data
│   ├── team.ts             # Team member data
│   ├── services.ts         # Service definitions
│   ├── testimonials.ts     # Testimonial content
│   └── faq.ts              # FAQ content
└── utils.ts

/public
├── /images
│   ├── /team               # Team headshots
│   ├── /logos              # Partner/cert logos
│   └── /icons              # Custom icons
├── logo.svg
└── favicon.ico
```

### 5.3 Key Components to Build

#### Phase 2A - Global Layout
1. **Header** - Sticky nav with transparent-to-solid transition
2. **Footer** - 4-column layout with dark teal background
3. **PageHero** - Reusable hero with pill badge, title, subtitle
4. **AnimatedSection** - Framer Motion wrapper for scroll animations

#### Phase 2B - Home Page Sections
1. **HeroSection** - Main hero with stats pill, CTA buttons, featured card
2. **LogoMarquee** - Continuous scrolling partner logos
3. **ServicesPreview** - Grid of 6 service cards
4. **AboutPreview** - "Platform designed to simplify..." section
5. **ProcessSteps** - How it works (1-2-3)
6. **TestimonialsCarousel** - Sliding testimonial cards
7. **CTABanner** - "Take the first step..." section

#### Phase 2C - Interior Pages
1. **About Us** - Awards section, team preview, values
2. **Services Hub** - All 6 services with feature cards
3. **Individual Service Pages** - Detail pages with benefits
4. **Team Page** - Grid with modal for full bios
5. **Contact Page** - Form + office locations

### 5.4 Data Management

Content will be stored as TypeScript constants for now:

```typescript
// lib/data/team.ts
export const teamMembers: TeamMember[] = [
  {
    id: 'wanda-granier',
    name: 'Wanda Granier',
    title: 'CEO',
    image: '/images/team/wanda-granier.jpg',
    bio: '...',
    featured: true,
  },
  // ...
];

// lib/data/services.ts
export const services: Service[] = [
  {
    id: 'bridgeworktech',
    name: 'BridgeWorkTECH',
    title: 'IT & Technical Recruiting',
    description: '...',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    icon: 'laptop',
  },
  // ...
];
```

### 5.5 Animation Strategy

```typescript
// Framer Motion variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
```

---

## 6. Assets Required

### From Old Site
- [ ] Logo (SVG format)
- [ ] Favicon
- [ ] Team headshot photos (high-res)
- [ ] Certification/partner logos
- [ ] Award badges
- [ ] 6 Pillars graphic

### To Create/Source
- [ ] Abstract background patterns (teal gradient, grid)
- [ ] Custom icons for services
- [ ] Stock photos for hero sections
- [ ] Video for home page (optional)

---

## 7. Implementation Phases

### Phase 1: Architecture & PRD (Current)
- [x] Fetch old site data
- [x] Fetch new design reference
- [x] Create sitemap
- [x] Visual analysis
- [x] Content mapping
- [x] Technical implementation plan

### Phase 2: Execution
1. **Global Layout** - Header, Footer, base styles
2. **Home Page** - All sections
3. **About Us** - Hub + sub-pages
4. **Services** - Hub + individual pages
5. **Contact** - Form + locations
6. **Remaining Pages** - Awards, News, Testimonials, Careers

### Phase 3: Polish & QA
1. Animation refinement
2. Responsive testing
3. Performance optimization
4. Accessibility audit
5. SEO optimization

---

## 8. Success Criteria

- [ ] All pages from sitemap implemented
- [ ] All content from old site migrated
- [ ] Lighthouse score 90+ across all categories
- [ ] Fully responsive (mobile, tablet, desktop)
- [ ] Smooth animations matching design reference
- [ ] WCAG 2.1 AA compliance
- [ ] Build completes with zero errors

---

## 9. Appendix: Design Reference Screenshots

Screenshots captured from HR Pro Framer Template:
- `.playwright-mcp/client/new/homepage-screenshot.png`
- `.playwright-mcp/client/new/about-screenshot.png`
- `.playwright-mcp/client/new/services-screenshot.png`
- `.playwright-mcp/client/new/contact-screenshot.png`

---

*Document generated for BridgeWork Partners website redesign project.*
