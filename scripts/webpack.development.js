const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { SERVER_HOST, SERVER_PORT } = require('./config')

const proxySetting = require('../src/proxy.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  stats: 'errors-only', // 终端仅打印 error
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT, // 默认是8080
    // clientLogLevel: 'silent', // 日志等级
    compress: true, // 是否启用 gzip 压缩
    open: true, // 打开默认浏览器
    hot: true, // 热更新
    proxy: { ...proxySetting },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})
