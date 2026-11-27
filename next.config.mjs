/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // The iPhone app's share card links to /software/offthepage/daily; the game now lives on the main page.
  async redirects() {
    return [{ source: '/software/offthepage/daily', destination: '/software/offthepage#daily-challenge', permanent: false }]
  },
}

export default nextConfig
