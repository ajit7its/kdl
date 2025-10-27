/** @type {import('next').NextConfig} */
const isVercel = process.env.VERCEL === '1';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // ✅ Disable ESLint only during Vercel builds
    ignoreDuringBuilds: isVercel,
  },
};

module.exports = nextConfig;
