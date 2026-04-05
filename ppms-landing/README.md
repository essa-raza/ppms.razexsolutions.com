# PPMS Landing Page — ppms.razexsolutions.com

> Built with **Next.js 14** · **Tailwind CSS** · **Framer Motion**
> Owned by **Razex Solutions**

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Deploy to GitHub + Vercel

### Step 1: Push to GitHub

```bash
# In this folder (ppms-landing/)
git init
git add .
git commit -m "feat: initial PPMS landing page"

# Create a new repo on GitHub named: ppms-landing
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/ppms-landing.git
git branch -M main
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import `ppms-landing` from GitHub
3. Framework preset will auto-detect as **Next.js**
4. Click **Deploy**

### Step 3: Set Custom Domain

1. In Vercel project → **Settings → Domains**
2. Add `ppms.razexsolutions.com`
3. In your DNS provider, add a **CNAME record**:
   - Name: `ppms`
   - Value: `cname.vercel-dns.com`
4. Wait for propagation (usually 5–15 minutes)

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS v3**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Project Structure

```
ppms-landing/
├── app/
│   ├── layout.tsx       # Root layout + metadata + fonts
│   ├── page.tsx         # Main landing page
│   ├── globals.css      # Global styles + utilities
│   ├── privacy/         # Privacy policy page
│   └── terms/           # Terms of service page
├── components/
│   ├── Navbar.tsx       # Sticky navbar with mobile menu
│   ├── Hero.tsx         # Hero section with dashboard mockup
│   ├── Stats.tsx        # Animated stats counters
│   ├── Features.tsx     # 8-feature cards grid
│   ├── HowItWorks.tsx   # 3-step onboarding flow
│   ├── Pricing.tsx      # 3-tier pricing with toggle
│   ├── Testimonials.tsx # 3 customer testimonials
│   ├── CTABanner.tsx    # Final conversion section
│   └── Footer.tsx       # Footer with links
├── next.config.ts
├── tailwind.config.ts
├── vercel.json
└── package.json
```

---

## Contact

**Razex Solutions** — info@razexsolutions.com
