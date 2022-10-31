module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs/getting-started',
        permanent: false,
      },
      {
        source: '/docs/',
        destination: '/docs/getting-started',
        permanent: false,
      },
      {
        source: '/admin',
        destination: '/admin/index.html',
        permanent: false,
      },
    ]
  },
  trailingSlash: true,
}
