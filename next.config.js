/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //add hostname "raw.githubusercontent.com"
  images: {
    domains: ['raw.githubusercontent.com'],
  },
}

module.exports = nextConfig
