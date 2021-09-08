const withImages = require('next-images')
module.exports = withImages(), {
  reactStrictMode: true,
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
}
