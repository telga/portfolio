const { defineConfig } = require('@vue/cli-service')
const { name: packageName } = require('./package.json')

// GitHub Project Pages: site is https://<user>.github.io/<repo>/ — publicPath must be "/<repo>/".
// Must match the GitHub repo name (here: same as package.json "name"). Root deploy: GITHUB_PAGES_BASE=/
const productionBase =
  process.env.GITHUB_PAGES_BASE ??
  (process.env.NODE_ENV === 'production' ? `/${packageName}/` : '/')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: productionBase,
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
      env['import.meta.env.BASE_URL'] = JSON.stringify(productionBase)
      return args
    })
  }
})