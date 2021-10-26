module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs/getting-started',
        permanent: true,
      },
      {
        source: '/docs/',
        destination: '/docs/getting-started',
        permanent: true,
      },
    ]
  },
  trailingSlash: true,
}
