/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'], // Use modern formats for best performance
    minimumCacheTTL: 31536000, // Cache images for 1 year
    deviceSizes: [320, 420, 768, 1024, 1200, 1920], // Responsive breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [], // Add external domains if needed
    unoptimized: false // Enable Next.js image optimization
  },
  experimental: {
    optimizeCss: true // Optimize CSS delivery
  },
};

module.exports = nextConfig;
