const { withPayload } = require("@payloadcms/next/withPayload");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tapcreative.ie",
      },
    ],
  },
};

module.exports = withPayload(
  withPayload(withPayload(withPayload(withPayload(nextConfig))))
);
