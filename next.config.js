/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: { ignoreBuildErrors: true },
    eslint: { ignoreDuringBuilds: true },
    transpilePackages: ["sanity", "next-sanity", "@sanity/ui"],
  };
  
  module.exports = nextConfig;