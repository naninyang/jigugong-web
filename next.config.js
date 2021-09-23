const withImages = require('next-images')
const withSass = require('path')
module.exports = withImages({
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config
  },
  images: {
    disableStaticImages: true,
  },
  i18n: {
    locales: ['ko-KR'],
    defaultLocale: 'ko-KR',
    domains: [
      {
        domain: 'jigugong.com',
        defaultLocale: 'ko-KR',
      },
    ],
  },
  sassOptions: {
    includePaths: [withSass.join(__dirname, 'styles')],
  },
})
