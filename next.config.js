const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = (phase, { defaultConfig }) => {
  const nextConfig = {
    webpack(config) {
      config.plugins.push(new WindiCSSWebpackPlugin())
      return config
    }
  }
  return nextConfig
}
