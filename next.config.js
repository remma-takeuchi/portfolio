/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // カスタムドメインの場合はbasePathを空にする
  basePath: process.env.CUSTOM_DOMAIN ? '' : (process.env.NODE_ENV === 'production' ? '/portfolio' : ''),
  assetPrefix: process.env.CUSTOM_DOMAIN ? '' : (process.env.NODE_ENV === 'production' ? '/portfolio/' : '')
}

module.exports = nextConfig 