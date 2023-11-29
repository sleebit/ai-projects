/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
experimental: {
  appDir: true,
  topLevelAwait: true
},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
