# Double Helix Technologies

This is the company website for Double Helix Technologies, built with Next.js.

## Development

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages automatically using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages in your repository settings**:
   - Go to your repository settings
   - Navigate to the "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Create the correct repository**:
   - For root-level deployment, your repository should be named `[username].github.io`
   - This will make your site available at `https://[username].github.io/`

3. **Push to main branch**:
   - The GitHub Actions workflow will automatically build and deploy your site
   - Your site will be available at `https://[username].github.io/`

### Manual Deployment

If you need to deploy manually:

```bash
npm run build
# Deploy the "dist" folder to GitHub Pages
```

### Local Testing

To test the static build locally:

```bash
npm run build     # Build the static site
npm run serve-static  # Serve the static files locally
```

## Project Structure

- `app/`: Next.js application directory
  - `components/`: Reusable UI components
  - `globals.css`: Global styles
  - `layout.tsx`: Main layout component
  - `page.tsx`: Home page component
- `public/`: Static assets
- `next.config.mjs`: Next.js configuration
- `.github/workflows/`: GitHub Actions workflows 