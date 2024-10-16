/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol:"https",
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;
