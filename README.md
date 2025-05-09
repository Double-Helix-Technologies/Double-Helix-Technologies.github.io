# Double Helix Technologies

This is the company website for Double Helix Technologies, built with Next.js.

## Development

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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