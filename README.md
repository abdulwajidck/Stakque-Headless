# Stakque Website - Strapi + Next.js

A modern, high-performance website built with Next.js 15 and Strapi CMS.

## Project Structure

```
stakque-website/
├── frontend/          # Next.js application
│   ├── app/          # Next.js App Router pages
│   ├── components/   # React components
│   └── lib/          # Utilities and API client
└── backend/          # Strapi CMS (to be initialized)
```

## Getting Started

### Frontend (Next.js)

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```
   Update `NEXT_PUBLIC_STRAPI_URL` if your Strapi is running on a different port.

4. **Run development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend (Strapi)

See [STRAPI_SETUP.md](./STRAPI_SETUP.md) for detailed setup instructions.

**Quick start:**
1. Ensure you're using Node.js 20-24 (use `nvm use 20` if needed)
2. Initialize Strapi:
   ```bash
   npx create-strapi-app@latest backend --quickstart
   ```
3. Follow the setup wizard to create your admin user
4. Create content types as described in STRAPI_SETUP.md
5. Configure permissions for public API access

## Features

- ✅ **Blog Posts** - Dynamic blog with SEO optimization
- ✅ **Case Studies** - Showcase client results
- ✅ **Location Pages** - SEO-friendly location-based pages
- ✅ **Custom Post Types** - Flexible content management via Strapi
- ✅ **Static Generation** - Fast, SEO-optimized pages
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Dark Theme** - Modern glassmorphism design

## Content Types

### Blog Post
- Title, slug, excerpt, content
- Category (Engineering, Strategy, Data)
- Featured image
- SEO metadata

### Case Study
- Client information
- Challenge, approach, results
- Performance metrics
- Testimonials
- SEO metadata

### Location
- Address and coordinates
- Description
- Images
- SEO metadata for local SEO

## Development

### Adding New Pages

1. Create a new file in `app/` directory
2. Export a default React component
3. Use shared components (Navigation, Footer, BackgroundGradients)

### Adding New Content Types

1. Create content type in Strapi admin
2. Add TypeScript interface in `lib/strapi.ts`
3. Create API functions in `lib/strapi.ts`
4. Create pages in `app/` directory

## Deployment

### Frontend (Vercel Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Backend (Strapi Cloud or Self-hosted)

**Strapi Cloud:**
- Sign up at [strapi.cloud](https://strapi.cloud)
- Connect your repository
- Deploy

**Self-hosted:**
- Deploy to Railway, Render, or your own server
- Configure database (PostgreSQL recommended)
- Set up environment variables
- Update `NEXT_PUBLIC_STRAPI_URL` in frontend

## Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

### Backend (.env)
```
HOST=0.0.0.0
PORT=1337
DATABASE_CLIENT=sqlite
# ... other Strapi config
```

## Tech Stack

- **Frontend:** Next.js 15, React, TypeScript, Tailwind CSS
- **Backend:** Strapi CMS
- **Icons:** Lucide React
- **Fonts:** Inter, Manrope, JetBrains Mono

## License

© 2024 Stakque Performance Agency. All rights reserved.

