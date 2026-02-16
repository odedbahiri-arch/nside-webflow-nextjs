/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'uploads-ssl.webflow.com' },
      { protocol: 'https', hostname: 'assets-global.website-files.com' },
    ],
  },
};

module.exports = nextConfig;
