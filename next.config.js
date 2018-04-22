const webpack = require('webpack')
require('now-env')

module.exports = {
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env)
      })
    )
    return config
  }
}
