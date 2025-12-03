# Strapi Backend Setup Guide

## Prerequisites

Strapi requires Node.js version 20.x - 24.x. If you're using Node.js 25+, you'll need to use a version manager.

### Using nvm (Node Version Manager)

```bash
# Install nvm if you don't have it
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use Node.js 20
nvm install 20
nvm use 20

# Verify version
node --version  # Should show v20.x.x
```

## Initialize Strapi

```bash
cd "/Users/abdulwajidck/Stakque New"
npx create-strapi-app@latest backend --quickstart
```

This will:
1. Create a `backend` directory
2. Install dependencies
3. Start Strapi on http://localhost:1337
4. Open the admin panel where you'll create your first admin user

## Create Content Types

After logging into Strapi Admin (http://localhost:1337/admin), create the following content types:

### 1. Blog Post

**Fields:**
- `title` - Text (Short text) - Required
- `slug` - UID - Required (based on title)
- `excerpt` - Text (Long text)
- `content` - Rich text - Required
- `category` - Enumeration (Engineering, Strategy, Data)
- `featuredImage` - Media (Single media)
- `publishedAt` - Date
- `seo` - Component (SEO Component - see below)

### 2. Case Study

**Fields:**
- `title` - Text (Short text) - Required
- `slug` - UID - Required (based on title)
- `clientName` - Text (Short text)
- `industry` - Text (Short text)
- `challenge` - Rich text
- `approach` - Rich text
- `results` - Rich text
- `metrics` - JSON
- `testimonial` - Component (Testimonial Component - see below)
- `featuredImage` - Media (Single media)
- `publishedAt` - Date
- `seo` - Component (SEO Component)

### 3. Location

**Fields:**
- `name` - Text (Short text) - Required
- `slug` - UID - Required (based on name)
- `city` - Text (Short text)
- `state` - Text (Short text)
- `country` - Text (Short text)
- `address` - Text (Long text)
- `description` - Rich text
- `image` - Media (Single media)
- `coordinates` - JSON (with lat and lng fields)
- `seo` - Component (SEO Component)

### 4. SEO Component (Reusable)

Create as a Component (not Content Type):

**Fields:**
- `metaTitle` - Text (Short text)
- `metaDescription` - Text (Long text)
- `keywords` - Text (Short text)
- `ogImage` - Media (Single media)

### 5. Testimonial Component (Reusable)

Create as a Component:

**Fields:**
- `quote` - Text (Long text)
- `author` - Component (Author Component)

### 6. Author Component (Reusable)

Create as a Component:

**Fields:**
- `name` - Text (Short text)
- `role` - Text (Short text)
- `company` - Text (Short text)

## Configure Permissions

1. Go to **Settings** → **Users & Permissions plugin** → **Roles** → **Public**
2. Enable the following permissions:
   - **Blog Post**: `find`, `findOne`
   - **Case Study**: `find`, `findOne`
   - **Location**: `find`, `findOne`

## API Endpoints

Once configured, your Strapi API will be available at:

- Blog Posts: `http://localhost:1337/api/blog-posts`
- Case Studies: `http://localhost:1337/api/case-studies`
- Locations: `http://localhost:1337/api/locations`

## Environment Variables

Create a `.env` file in the `backend` directory:

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys-here
API_TOKEN_SALT=your-token-salt-here
ADMIN_JWT_SECRET=your-admin-secret-here
JWT_SECRET=your-jwt-secret-here
```

These will be auto-generated when you run `create-strapi-app`.

## Production Deployment

For production, you'll need to:
1. Set `NODE_ENV=production`
2. Configure database (PostgreSQL recommended)
3. Set up proper CORS settings
4. Configure image upload provider (AWS S3, Cloudinary, etc.)

