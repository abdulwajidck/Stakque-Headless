# Stakque Frontend (Headless)

This project is a [Next.js](https://nextjs.org) application using the App Router, integrated with [HeadstartWP](https://headstartwp.10up.com/) to fetch content from a WordPress backend.

## WordPress Connection

The connection to the WordPress backend is configured in the `headstartwp.config.js` file at the root of the `frontend` directory.

### Current Configuration

- **Source URL**: `http://headless.stakque.site`
- **Plugin Enabled**: `true`

### Setup Requirements (WordPress Side)

To ensure full functionality (including previews, cache invalidation, and advanced content handling), you should install the **HeadstartWP** plugin on your WordPress site.

1.  **Install Plugin**: Download and install the [HeadstartWP Plugin](https://github.com/10up/headstartwp) on your WordPress backend (`http://headless.stakque.site`).
2.  **Permalinks**: Ensure your WordPress permalinks are set to something other than "Plain" (e.g., "Post name").

### Environment Variables (Optional)

For features like **Previewing Drafts**, you need to set up environment variables in Netlify:

- `HEADSTARTWP_PREVIEW_SECRET`: A secret string that matches the one configured in your WordPress HeadstartWP settings.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This site is deployed on **Netlify**.

- **Build Command**: `npm run build`
- **Publish Directory**: `.next`
- **Base Directory**: `frontend`
