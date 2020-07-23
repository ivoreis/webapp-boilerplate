const path = require('path')
const withPWA = require('next-pwa')

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

  if (!process.env.BUNDLE_AWS_SDK) {
    newConfig.externals = config.externals || [];
    newConfig.externals.push({
      "aws-sdk": "aws-sdk"
    });
  } else {
    // eslint-disable-next-line
    console.warn("Bundling aws-sdk. Only doing this in development mode");
  }

  newConfig.resolve.alias.rosetta = dev ? 'rosetta/debug' : 'rosetta'
  newConfig.resolve.alias['~'] = path.resolve(__dirname, './src')
  return newConfig
}

const config = {
  poweredByHeader: false,
  webpack: webpackConfig,
  experimental: {
    trailingSlash: false,
  },
  pwa: {
    dest: 'public'
  }
}

module.exports = withPWA(config)
