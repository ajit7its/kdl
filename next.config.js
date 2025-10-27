/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
     // ✅ Ignore ESLint errors during builds (useful for deployment)
    ignoreDuringBuilds: true,
    eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
