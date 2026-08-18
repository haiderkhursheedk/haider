/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com', 'erzeardsiwrvbavennox.supabase.co', 'pbs.twimg.com', '**.supabase.co', "api.microlink.io"],
  },
};

module.exports = nextConfig;
