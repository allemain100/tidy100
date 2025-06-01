const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  reactStrictMode: false,
  trailingSlash: true,
  assetPrefix: isProd ? '/<your-repository-name>/' : '',
  basePath: isProd ? '/<your-repository-name>' : '',
  output: 'export',
};

// module.exports = nextConfig

module.exports = withMDX(nextConfig);
