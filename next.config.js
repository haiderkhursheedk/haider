/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com', 'erzeardsiwrvbavennox.supabase.co', 'pbs.twimg.com', '**.supabase.co', "api.microlink.io"],
  },
  async redirects() {
    return [
      {
        source: '/essays',
        destination: '/writing',
        permanent: true,
      },
      {
        source: '/essays/:slug*',
        destination: '/writing/:slug*',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/',
        permanent: true,
      },
      {
        source: '/projects/:slug*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
