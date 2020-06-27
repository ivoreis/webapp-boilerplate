const path = require('path')

const webpackConfig = (config, options) => {
  const {
    dev,
    isServer,
    defaultLoaders
  } = options
  const newConfig = {
    ...config,
  }

  if (!isServer) {
    newConfig.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/@REPLACE_ME/,
      use: [defaultLoaders.babel],
    })
  }
  newConfig.resolve.alias.rosetta = dev ? 'rosetta/debug' : 'rosetta'
  newConfig.resolve.alias['~'] = path.resolve(__dirname, './src')
  return newConfig
}

module.exports = {
  poweredByHeader: false,
  webpack: webpackConfig,
}
