/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['mongoose'],
  },
};

const removeImports = require('next-remove-imports')();
module.exports = removeImports({});

module.exports = nextConfig;
