/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // keeps React strict mode enabled
  swcMinify: true,       // enables SWC minification
  eslint: {
    // This disables ESLint during production builds
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
