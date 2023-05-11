/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "image.tmdb.org", //facebook
      "platform-lookaside.fbsbx.com", //facebook
      "firebasestorage.googleapis.com", //firebase-storage
      "scontent-atl3-2.xx.fbcdn.net", //facebook
      "pbs.twimg.com", //twitter
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
