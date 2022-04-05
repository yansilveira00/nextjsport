/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  nextConfig,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
};