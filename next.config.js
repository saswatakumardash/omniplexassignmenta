/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',  // For Google profile photos
      'googleusercontent.com',
    ],
  },
}

module.exports = nextConfig 
