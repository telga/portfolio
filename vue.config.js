const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/'
    : '/',
  // Add this configuration
  configureWebpack: {
    output: {
      filename: 'js/[name].[contenthash].js',
      chunkFilename: 'js/[name].[contenthash].js'
    },
    devtool: 'source-map'  // Add this line for better debugging
  },
  css: {
    extract: {
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css'
    }
  },
  productionSourceMap: true,  // Add this line to enable source maps in production
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      const env = args[0]
      env['import.meta.env.BASE_URL'] = JSON.stringify(process.env.NODE_ENV === 'production' ? '/portfolio/' : '/')
      return args
    })
  }
})
