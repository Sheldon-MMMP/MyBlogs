const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const path = require('path');

module.exports = {
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  "plugins": ["styled-jsx/babel"]
}
