// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ckazakov.github.io',
  assetPrefix: '/ckazakov.github.io/',
  images: {
    unoptimized: true,
  }
}
 
module.exports = nextConfig