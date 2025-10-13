import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "arghyav.vercel.app",
          },
        ],
        destination: "https://arghyavyas.ca/:path*",
        permanent: true,
      },

      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.arghyavyas.ca",
          },
        ],
        destination: "https://arghyavyas.ca/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
