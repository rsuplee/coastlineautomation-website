import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Ensure trailing slashes match existing URL patterns
  trailingSlash: false,
}

export default nextConfig
