/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["web"] // Разрешенные домены для изображений
  }
};

module.exports = nextConfig;
