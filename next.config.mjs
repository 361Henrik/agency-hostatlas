/** @type {import('next').NextConfig} */
// pipeline-test
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
 
}

export default nextConfig