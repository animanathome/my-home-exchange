/** @type {import('next').NextConfig} */

// https://nextjs.org/docs/messages/invalid-images-config
// https://nextjs.org/docs/pages/api-reference/components/image#devicesizes
const nextConfig = {
    compiler: {
        styledComponents: true
    },
    images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
}

module.exports = nextConfig
