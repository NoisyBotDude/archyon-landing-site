# Futuristic Construction Services Website (Static) — Cursor Context

> **Goal:** Build a futuristic, construction-themed **static** marketing site using **React + TailwindCSS + Framer Motion** (and optional small helpers) to present services clearly and look premium.

---

## 1) Brand + Theme Direction

### 1.1 Visual vibe

* **Construction × Future-tech**: concrete + steel textures, blueprint grids, neon accents, holographic UI, clean typography.
* UI inspiration keywords: **"blueprint HUD"**, **"neon edge glow"**, **"glassmorphism"**, **"construction wireframe"**, **"industrial minimal"**.

### 1.2 Color palette (Tailwind tokens)

Use dark futuristic base with warm safety/construction highlights.

* Background: near-black / charcoal
* Primary accent: construction amber / orange
* Secondary accent: electric cyan / teal
* Optional tertiary: violet for depth

Suggested Tailwind usage:

* `bg-zinc-950`, `bg-black/60`, `text-zinc-100`
* highlights: `text-amber-400`, `bg-amber-500/10`, `border-amber-500/30`
* tech accent: `text-cyan-300`, `border-cyan-400/30`, `shadow-cyan-400/20`

### 1.3 Typography

* Headings: **Space Grotesk** / **Sora** / **Orbitron** (Orbitron for brand-only; keep body readable)
* Body: **Inter** / **Manrope**

### 1.4 Visual motifs

* Blueprint grid background (subtle): repeating linear gradients
* Animated scanning line / HUD dots
* Card borders with soft glow
* "Section dividers" like slanted beams / steel plates
* Tiny icons: blueprint / compass / beam / rebar / building / shield

---

## 2) Tech Stack (Static)

### 2.1 Core

* **React (Vite)**
* **TailwindCSS**
* **Framer Motion**

### 2.2 Optional (recommended)

* **react-router-dom** (multi-page feel in SPA; still static hosting)
* **lucide-react** (icons)
* **clsx + tailwind-merge** (class composition)

### 2.3 Deliverable

* Static site deployable to any static host (Netlify, Vercel static, S3, etc.)

---

## 3) Site Map (Pages + Sections)

### Pages

1. **Home** (`/`)
2. **Services** (`/services`)
3. **Service Detail** (optional) (`/services/:slug`) — can be static list-driven
4. **Projects / Portfolio** (`/projects`) — can be placeholder if not ready
5. **About** (`/about`)
6. **Contact** (`/contact`)
7. **Privacy / Terms** (optional) (`/privacy`, `/terms`)

### Global layout

* **Sticky Navbar** with animated underline + CTA button
* **Footer** with quick links + contact + social
* Consistent **section spacing**, **max-width container**, and **background texture**

---

## 4) Information Architecture

### 4.1 Services Data Model (single source of truth)

Create a `services.ts` or `services.json` and render everywhere.

**Service Groups (3):**

* Architectural Design Services
* Structural Engineering Services
* Combined / Support Services

---

## 5) Services (Exact Content)

### 5.1 Architectural Design Services

* Concept & schematic design
* Architectural planning & layouts
* Residential building design (villas, houses, apartments)
* Commercial building design (offices, retail, mixed-use)
* Interior space planning & design coordination
* 3D modeling & architectural visualizations
* Building façade design
* Sustainable & green building design
* Renovation, remodeling & adaptive reuse
* Design development & construction drawings
* Authority approval drawings & documentation

### 5.2 Structural Engineering Services

* Structural analysis & design
* RCC structure design
* Steel structure design
* Load calculations & structural optimization
* Foundation design
* Seismic / earthquake-resistant design
* Retrofitting & structural strengthening
* Structural drawings & detailing
* Structural review & design verification
* Value engineering & cost optimization

### 5.3 Combined / Support Services

* Architectural & structural coordination
* BIM modeling & clash detection
* Construction documentation & shop drawings
* Site supervision & technical support
* As-built drawings
* Design consultation & feasibility studies

---

## 6) Page-by-Page Requirements

### 6.1 Home

**Hero section**

* Headline: futuristic construction + trust
* Subtext: architecture + structure + coordination
* CTAs: `Explore Services` + `Get Consultation`
* Animated elements: floating blueprint grid, subtle parallax, shimmer CTA border

**Highlights / USPs** (3–6 cards)

* Fast approvals-ready drawings
* Seismic-ready structural safety
* BIM coordination
* Modern visualization (3D)
* Cost optimization / value engineering

**Services preview**

* 3 category cards with item counts
* Click to Services page

**Process timeline**

* Discover → Concept → Design → Structural → Documentation → Support

**Testimonials** (optional)

* 3 cards with placeholder text

**Final CTA band**

* Strong CTA to Contact

### 6.2 Services

* Header: category tabs or segmented controls
* Each category shows:

  * short intro paragraph
  * grid list of services (chips/cards)
* Optional: each service card expands (accordion) with short explanation

### 6.3 Projects / Portfolio

* If no real projects, use **placeholder** blocks with:

  * Project type (Residential / Commercial)
  * Services provided (chips)
  * Year (optional)
* Use a futuristic “project card” design.

### 6.4 About

* Mission: blending design, safety, and buildability
* What you do: architecture + structural + coordination
* Values: safety, sustainability, quality, transparency
* Skills/tools mention (optional): AutoCAD/Revit/BIM/ETABS/SAP (only if applicable)

### 6.5 Contact

* Contact form (static): Name, Email, Phone, Project Type, Message
* Since static: either

  * mailto integration OR
  * dummy submit UI with toast OR
  * integrate form service later (Netlify Forms / Formspree)
* Show business details cards:

  * Phone
  * Email
  * Location
  * Working hours

---

## 7) Component Requirements

### 7.1 Global UI Components

* `Navbar` (sticky, blur, animated active link)
* `Footer`
* `Section` wrapper (consistent spacing)
* `GlowCard` (reusable)
* `Button` variants: primary (amber glow), secondary (cyan outline), ghost
* `Badge/Chip`

### 7.2 Animated Components (Framer Motion)

* `RevealOnScroll` (fade + slide up)
* `StaggerList` for service items
* `HoverTiltCard` (tiny 3D transform)
* `GradientBeam` / `Scanline` background accent
* `PageTransition` (route transitions)

---

## 8) Animation Style Guide

Keep motion premium and not distracting:

* Use **small distances** (y: 12–24px)
* Use **spring** for hover + **easeOut** for entrance
* Stagger lists: 0.05–0.1s per item
* Background motion: very subtle, low opacity

Suggested patterns:

* Hero text: staggered fade-in
* Cards: scale 1.02 on hover + glow intensifies
* Section headers: underline sweep
* Route change: quick fade + slight slide

---

## 9) Layout + Responsiveness

* Mobile-first
* Use:

  * hero: stacked on mobile, split on desktop
  * services: 1 col (mobile) → 2 col (md) → 3 col (lg)
* Maintain readable line length: `max-w-2xl` for text blocks

---

## 10) Assets + Graphics (No heavy images required)

Prefer lightweight visual design:

* CSS grid backgrounds
* SVG icons
* Optional: 1–2 hero illustrations (wireframe building / blueprint)

If adding images later:

* Use WebP
* Add `loading="lazy"`

---

## 11) Content Placeholders Needed (Fill Later)

Add placeholders for:

* Company name/logo
* Phone, email, address
* About story (1–2 paragraphs)
* Projects (at least 6 entries)
* Testimonials (optional)

---

## 12) Suggested Folder Structure

```
src/
  assets/
  components/
    layout/
    ui/
    motion/
  data/
    services.ts
    projects.ts
  pages/
    Home.tsx
    Services.tsx
    ServiceDetail.tsx (optional)
    Projects.tsx
    About.tsx
    Contact.tsx
  styles/
  App.tsx
  main.tsx
```

---

## 13) Data File Spec (services.ts)

Create a typed structure like:

* `categoryId`, `title`, `subtitle`
* `items`: `{ id, title, shortDesc (optional), icon (optional) }`

Make sure the exact service titles match the list in **Section 5**.

---

## 14) Acceptance Criteria

* Consistent theme across all pages
* Attractive futuristic-construction UI
* Smooth Framer Motion animations (scroll + hover)
* Services rendered from a single data source
* Fully responsive
* Static-friendly (no backend required)

---

## 15) Quick Copy (Optional Text)

### Hero headline ideas

* “Future-Ready Design. Buildable by Nature.”
* “Blueprint-to-Built Engineering, Designed for Tomorrow.”

### Subheadline ideas

* “Architectural design, structural engineering, and coordination—delivered with clarity, precision, and modern visualization.”

### CTA labels

* “Explore Services”
* “Request a Consultation”

---

## 16) Notes for Cursor

* Implement with clean, reusable components.
* Avoid heavy image dependencies; achieve the futuristic look using Tailwind + subtle gradients + overlays.
* Keep animations performant (no giant shadows on large moving elements).
