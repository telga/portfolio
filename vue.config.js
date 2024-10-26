const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // If you want the site at the root of your domain (brianguyen.works), use:
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  configureWebpack: {
    output: {
      filename: 'js/[name].[contenthash].js',
      chunkFilename: 'js/[name].[contenthash].js'
    },
    devtool: 'source-map'
  },
  css: {
    extract: {
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css'
    }
  },
  productionSourceMap: true,
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      const env = args[0]
      env['import.meta.env.BASE_URL'] = JSON.stringify(process.env.NODE_ENV === 'production' ? '/' : '/')
      return args
    })
  }
})