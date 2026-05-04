/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: '**',
        search:'',
      },
      {
        protocol: "http",
        hostname: "plus.unsplash.com",
      },
    ],
  },
}
export default nextConfig;
