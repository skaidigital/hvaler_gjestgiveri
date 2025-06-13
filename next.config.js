module.exports = {
  swcMinify: true, // Enable SWC minification for better performance
  images: {
    // Using remotePatterns instead of domains for better security and Next.js 13+ compatibility
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: `/${process.env.NEXT_CONTENTFUL_SPACE_ID}/**`,
      },
    ],
  },
  trailingSlash: true,
};
