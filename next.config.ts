import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextjs-clean-architecture.s3.sa-east-1.amazonaws.com',
        port: '',
        pathname: '',
        search: '',
      },
    ],
  },
}

export default nextConfig
