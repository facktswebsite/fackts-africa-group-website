/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1600, 1920, 2560, 2880],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 86, 88, 90, 92],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
