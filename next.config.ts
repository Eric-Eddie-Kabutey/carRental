import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.easycarrentals.gm',
      },
    ],
  },
};

export default nextConfig;
