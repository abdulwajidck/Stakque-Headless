# Vercel Deployment Guide

## Prerequisites
- A Vercel account (sign up at https://vercel.com)
- Git repository (GitHub, GitLab, or Bitbucket)

## Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import Project on Vercel**
   - Go to https://vercel.com/new
   - Import your Git repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Project Settings → Environment Variables
   - Add: `NEXT_PUBLIC_STRAPI_URL` with your Strapi API URL
     - For production: `https://your-strapi-domain.com`
     - Leave empty if using mock data

4. **Configure Build Settings**
   - Root Directory: `frontend` (if deploying from monorepo root)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live!

## Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

4. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - For production: `vercel --prod`

5. **Set Environment Variables**
   ```bash
   vercel env add NEXT_PUBLIC_STRAPI_URL
   ```
   - Enter your Strapi URL when prompted

## Environment Variables

Make sure to set these in Vercel Dashboard → Settings → Environment Variables:

- `NEXT_PUBLIC_STRAPI_URL`: Your Strapi backend URL (optional if using mock data)

## Post-Deployment

1. **Custom Domain** (optional)
   - Go to Project Settings → Domains
   - Add your custom domain

2. **Monitor Deployments**
   - Check deployment logs in Vercel dashboard
   - Set up deployment notifications

## Troubleshooting

- **Build fails**: Check build logs in Vercel dashboard
- **Environment variables not working**: Make sure they're set for Production, Preview, and Development
- **Images not loading**: Verify `next.config.ts` remote patterns include your image domains

