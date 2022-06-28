/** @type {import('next').NextConfig} */

const withAntdLess = require('next-plugin-antd-less')
module.exports = withAntdLess({
  lessVarsFilePath: './styles/variables.less',
  lessVarsFilePathAppendToEndOfContent: false,
  cssLoaderOptions: {},
  reactStrictMode: true,
  images: {
    domains: ['movie.thaiware.com'],
  },
  webpack(config) {
    return config
  },
})
