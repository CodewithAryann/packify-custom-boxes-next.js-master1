/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // adjust for your domain
      },
    ],
    unoptimized: true,
  },
  // Ensure trailing slashes for better static hosting compatibility
  trailingSlash: true,
};

module.exports = nextConfig;
