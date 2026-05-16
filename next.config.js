/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',

  trailingSlash: true, // ✅ Forces all URLs to end with /

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },

  async redirects() {
    return [
      // 🔥 MUST HAVE (fixes indexing issue)
      { source: '/index.html', destination: '/', permanent: true },

      // Main pages
      { source: '/reviews.html', destination: '/reviews/', permanent: true },
      { source: '/rigid-boxes.html', destination: '/products/rigid-boxes/', permanent: true },
      { source: '/get-quote.html', destination: '/get-quote/', permanent: true },
      { source: '/how-to-order.html', destination: '/how-to-order/', permanent: true },
      { source: '/Magnetic-closure.html', destination: '/products/magnetic-closure/', permanent: true },
      { source: '/Dispenser-Boxes.html', destination: '/products/dispenser-boxes/', permanent: true },
      { source: '/blog.html', destination: '/blog/', permanent: true },
      { source: '/privacy.html', destination: '/privacy/', permanent: true },
      { source: '/refund-returns.html', destination: '/refund-returns/', permanent: true },
      { source: '/Cosmetic-Boxes.html', destination: '/products/cosmetic-boxes/', permanent: true },

      // Wildcard fix for product .html URLs
      { source: '/products/:path*.html', destination: '/products/:path*/', permanent: true },
    ];
  },
};

module.exports = nextConfig;