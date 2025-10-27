/** @type {import('next').NextConfig} */
const isVercel = process.env.VERCEL === '1';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // ✅ Disable ESLint only when deploying on Vercel
    ignoreDuringBuilds: isVercel,
  },
};

module.exports = nextConfig;
