/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["app", "components", "data"]
  },
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;