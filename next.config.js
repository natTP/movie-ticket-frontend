/** @type {import('next').NextConfig} */

const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess({
  lessVarsFilePath: './styles/variables.less',
  lessVarsFilePathAppendToEndOfContent: false,
  cssLoaderOptions: {},

  webpack(config) {
    return config
  },
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['movie.thaiware.com'],
  },
}

module.exports = nextConfig
