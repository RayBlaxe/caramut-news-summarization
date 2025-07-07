/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove turbopack configuration for better deployment compatibility
  experimental: {
    // Enable if needed for specific features
  },
  // Ensure proper image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig