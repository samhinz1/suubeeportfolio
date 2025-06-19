/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'suubeeportfolio.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'suubeeportfolios.com',
      },
    ],
  },
}

export default nextConfig
