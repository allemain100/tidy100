const withMDX = require("@next/mdx")();
// import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  reactStrictMode: false,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? 'https://pcr.allemain.com/' : '',
  basePath: isProd ? '' : '',
  output: 'export',
};

// module.exports = nextConfig
//const withMDX = createMDX({
//});
// export default withMDX(nextConfig);

module.exports = withMDX(nextConfig);
