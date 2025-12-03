# Quick Start Guide

## 🚀 Next.js Frontend is Running!

Your Next.js application is now running at:
**http://localhost:3000**

## ✅ What's Been Built

### Pages Created:
- ✅ **Homepage** (`/`) - Full E3 Model showcase with interactive chart
- ✅ **About** (`/about`) - Team and company story
- ✅ **Solutions** (`/solutions`) - 6 solution offerings
- ✅ **Case Studies** (`/case-studies`) - Listing and detail pages (Strapi-powered)
- ✅ **Blog** (`/blog`) - Listing and detail pages (Strapi-powered)
- ✅ **Locations** (`/locations/[slug]`) - SEO-friendly location pages (Strapi-powered)
- ✅ **Engagement** (`/engagement`) - Partnership tiers
- ✅ **Contact** (`/contact`) - Contact form and info
- ✅ **Open Positions** (`/open-positions`) - Careers page
- ✅ **Manifesto** (`/manifesto`) - Company principles

### Features:
- ✅ All pages converted from HTML to Next.js
- ✅ Unified Navigation and Footer across all pages
- ✅ Strapi API client ready for content management
- ✅ TypeScript for type safety
- ✅ Tailwind CSS with custom design system
- ✅ Chart.js integration for homepage dashboard
- ✅ Responsive design
- ✅ SEO metadata generation

## 📝 Next Steps

### 1. Add Your Logo
Place your logo file as `logo.svg` in:
```
frontend/public/logo.svg
```

### 2. Set Up Strapi Backend
Follow the instructions in `STRAPI_SETUP.md`:
- Use Node.js 20-24 (run `nvm use 20` if needed)
- Initialize Strapi: `npx create-strapi-app@latest backend --quickstart`
- Create content types: Blog Post, Case Study, Location
- Configure public API permissions

### 3. Environment Variables
Create `frontend/.env.local`:
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

### 4. Start Adding Content
Once Strapi is running:
- Add blog posts via Strapi admin
- Create case studies
- Add location pages for SEO

## 🎨 Design System

All pages maintain the same design:
- Dark theme (#050505 background)
- Glassmorphism panels
- Emerald/Blue gradient accents
- Custom fonts (Manrope, Inter, JetBrains Mono)
- Smooth animations

## 📁 Project Structure

```
frontend/
├── app/              # Next.js pages
│   ├── page.tsx      # Homepage
│   ├── blog/         # Blog system
│   ├── case-studies/ # Case studies
│   ├── locations/    # Location pages
│   └── ...
├── components/        # Shared components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── BackgroundGradients.tsx
└── lib/
    └── strapi.ts      # API client
```

## 🔗 Available Routes

- `/` - Homepage
- `/about` - About page
- `/solutions` - Solutions
- `/case-studies` - Case studies listing
- `/case-studies/[slug]` - Case study detail
- `/blog` - Blog listing
- `/blog/[slug]` - Blog post detail
- `/locations/[slug]` - Location pages
- `/engagement` - Engagement models
- `/contact` - Contact page
- `/open-positions` - Careers
- `/manifesto` - Manifesto

## 🛠 Development

```bash
cd frontend
npm run dev
```

Visit: http://localhost:3000

## 📦 Build for Production

```bash
cd frontend
npm run build
npm start
```

## 🎯 Strapi Integration

Once Strapi is set up, the following will automatically work:
- Blog posts will appear at `/blog`
- Case studies at `/case-studies`
- Location pages at `/locations/[city-name]`

All pages include proper SEO metadata and static generation for performance!

