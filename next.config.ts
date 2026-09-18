import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/#research", permanent: true },
      { source: "/engineering", destination: "/#engineering", permanent: true },
      { source: "/technologies", destination: "/#technologies", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
