/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  // GitHub Pages needs to know the repository name for proper path handling
  basePath: process.env.NODE_ENV === 'production' ? '/Resume' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Resume/' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig 