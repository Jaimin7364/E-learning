/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',  // Adjust if necessary based on path requirements
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/**',  // Adjust if necessary based on path requirements
      },
    ],
  },
};

export default nextConfig;
