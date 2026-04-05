# PPMS Frontend — Requirements & Specification

> **Product**: Petrol Pump Management System (PPMS)
> **Owner**: Razex Solutions
> **Subdomain**: ppms.razexsolutions.com
> **Deployment**: GitHub → Vercel
> **Last Updated**: April 2026

---

## 1. Product Overview

PPMS is a SaaS platform built by Razex Solutions for managing petrol pump / fuel station operations. It serves:

- **Fuel station owners & operators** (single or multi-station)
- **Head-office teams** managing multiple stations under one organization
- **Accountants & managers** handling finances, payroll, and reports
- **Razex Solutions MasterAdmin** overseeing all tenants on the platform

The frontend landing site at `ppms.razexsolutions.com` is a **marketing & onboarding page** — not the operational dashboard. Its job is to communicate the product's value, list features, show pricing, and drive signups.

---

## 2. Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| UI Components | shadcn/ui |
| Fonts | Inter (Google Fonts) |
| Deployment | Vercel |
| Source Control | GitHub |

---

## 3. Page Sections

### 3.1 Navbar
- Logo (PPMS by Razex Solutions)
- Navigation links: Features, How It Works, Pricing, Contact
- CTA button: "Get Started" → links to demo/signup
- Sticky on scroll with blur backdrop
- Mobile hamburger menu

### 3.2 Hero Section
- Bold headline: "Run Every Pump. Own Every Litre."
- Sub-headline describing PPMS as an all-in-one fuel station management SaaS
- Two CTAs: "Start Free Trial" + "Watch Demo"
- Animated dashboard mockup / stats cards
- Gradient background with subtle animated particles or grid

### 3.3 Stats / Trust Bar
- Key numbers: Stations managed, Litres tracked, Reports generated, Uptime
- Animated counters on scroll

### 3.4 Features Section
- Grid of feature cards (6–8 features)
- Feature 1: Real-Time Dashboard (sales, profit, stock at a glance)
- Feature 2: Sales & Shift Management (cash/credit tracking, nozzle readings)
- Feature 3: Inventory & Tanker Deliveries (tank levels, fuel types)
- Feature 4: Accounting & Ledgers (customer/supplier payments, profit analysis)
- Feature 5: Attendance & Payroll (staff attendance, payroll run)
- Feature 6: Multi-Station & Multi-Org (head-office view across all stations)
- Feature 7: Role-Based Access Control (MasterAdmin → Operator hierarchy)
- Feature 8: Reports & Alerts (daily closing, low-stock alerts, credit limit warnings)

### 3.5 How It Works
- 3-step visual process:
  1. Set Up Your Organization & Stations
  2. Assign Roles & Configure Modules
  3. Go Live — Track Everything in Real Time

### 3.6 Pricing Section
- 3 tiers:
  - **Starter** — 1 station, core modules
  - **Business** — Up to 5 stations, all modules
  - **Enterprise** — Unlimited stations, custom SLA
- Toggle: Monthly / Annual (annual discount)
- "Contact Sales" for Enterprise

### 3.7 Testimonials / Social Proof
- 3 cards with quotes from fictional operators (PSO dealer, Shell franchise, independent)

### 3.8 CTA Banner
- Final conversion section
- "Ready to take control of your fuel station?"
- "Start your free 14-day trial" button

### 3.9 Footer
- Logo + tagline
- Links: Features, Pricing, Docs, Privacy, Terms
- Contact: info@razexsolutions.com
- Copyright: © 2026 Razex Solutions

---

## 4. Design System

### Colors
- Background: `#0a0f1e` (deep navy)
- Surface: `#111827` (dark slate)
- Primary Accent: `#f59e0b` (amber — fuel/energy)
- Secondary Accent: `#3b82f6` (blue — trust/tech)
- Text Primary: `#f9fafb`
- Text Secondary: `#9ca3af`
- Border: `#1f2937`

### Typography
- Font: Inter (Google Fonts)
- Heading scale: 4xl → 6xl (Hero), 3xl (Section), 2xl (Card)
- Body: 16px base, 1.6 line-height

### Animations (Framer Motion)
- Hero text: fade in + slide up on mount
- Section cards: stagger reveal on scroll (viewport trigger)
- Stat counters: animate on scroll into view
- Navbar: blur/shadow appears on scroll
- Hover states: scale + glow on feature cards
- Pricing toggle: smooth cross-fade

---

## 5. Routing Structure

```
/                → Landing page (single page with anchors)
/privacy         → Privacy Policy (static)
/terms           → Terms of Service (static)
```

---

## 6. SEO & Meta
- Title: "PPMS — Petrol Pump Management System | Razex Solutions"
- Description: "Complete SaaS for fuel station management — sales, inventory, accounting, payroll, and multi-station oversight."
- OG image with brand colors
- Canonical URL: https://ppms.razexsolutions.com

---

## 7. Deployment

### GitHub
- Repo: `ppms-landing` (or `ppms-frontend`)
- Branch: `main` → production
- `.gitignore` for `node_modules`, `.next`, `.env.local`

### Vercel
- Import from GitHub
- Framework preset: Next.js
- Domain: `ppms.razexsolutions.com` (custom domain connected)
- Environment variables: none required for static landing page

---

## 8. File Structure

```
ppms-landing/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main landing page
│   ├── privacy/page.tsx    # Privacy policy
│   └── terms/page.tsx      # Terms of service
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── CTABanner.tsx
│   └── Footer.tsx
├── public/
│   └── og-image.png
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── package.json
```

---

## 9. Accessibility
- Semantic HTML (nav, main, section, footer)
- ARIA labels on icon-only buttons
- Focus visible on all interactive elements
- Color contrast ≥ 4.5:1
- Keyboard navigable
- Reduced motion respected via `prefers-reduced-motion`
