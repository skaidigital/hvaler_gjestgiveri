module.exports = {
  swcMinify: true, //uses SWC instead of Terser for minyfying JavaScript
  images: {
    domains: ["images.ctfassets.net"],
    path: `https://images.ctfassets.net/${process.env.NEXT_CONTENTFUL_SPACE_ID}`,
  },
  trailingSlash: true,
};
