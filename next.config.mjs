/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: '.next',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  experimental: {
    appDir: false
  }
};

export default nextConfig;
