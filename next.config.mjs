/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Generate static HTML/CSS/JS files
  distDir: 'dist',   // Build directory (easier to reference in workflows)
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
  // Root level deployment - no basePath needed
  // Prevents trailing slash issues
  trailingSlash: true,
  // Ensure CSS is properly generated
  webpack: (config) => {
    return config;
  },
  // For better static deployment
  experimental: {
    // This is experimental but helps with CSS in static exports
    optimizeCss: true,
  },
};

export default nextConfig; 