const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/brain-portfolio/'
    : '/',
  // Add this configuration
  configureWebpack: {
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js'
    }
  }
})
