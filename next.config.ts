import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.luxuryrentals.gm',
      },
      {
        protocol: 'https',
        hostname: 'www.ghostrentals.com',
      }
    ],
  },
};

export default nextConfig;
