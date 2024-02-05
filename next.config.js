/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "justdesignfx.com",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import 'styles/_functions';`,
  },
  async rewrites() {
    return [
      {
        source: "/contact",
        destination: "/contact",
      },
      {
        source: "/iletisim",
        destination: "/contact",
      },
    ]
  },
}

module.exports = nextConfig
