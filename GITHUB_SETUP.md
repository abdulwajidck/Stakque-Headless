# GitHub Setup Instructions

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `stakque-website` (or your preferred name)
3. Description: "Stakque Digital - Next.js Performance Marketing Agency Website"
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 2: Connect and Push

After creating the repository, GitHub will show you commands. Use these:

```bash
cd "/Users/abdulwajidck/Stakque New"
git remote add origin https://github.com/YOUR_USERNAME/stakque-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Alternative: Using SSH

If you prefer SSH:

```bash
git remote add origin git@github.com:YOUR_USERNAME/stakque-website.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel from GitHub

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Vercel will auto-detect Next.js
4. Configure:
   - Root Directory: `frontend`
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
5. Add Environment Variables (if using Strapi):
   - `NEXT_PUBLIC_STRAPI_URL` = your Strapi URL
6. Click "Deploy"

Your site will be live in minutes!

