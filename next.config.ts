import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow loading images from external domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
