import Webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import chalk from 'chalk'
import webpackDevConfig from './config/webpack.development'
import { SERVER_HOST, SERVER_PORT } from './config/config'
import proxySetting from '../src/proxy'

const serverConfig: WebpackDevServer.Configuration = {
  host: SERVER_HOST,
  port: SERVER_PORT, // 默认是8080
  // clientLogLevel: 'silent', // 日志等级
  compress: true, // 是否启用 gzip 压缩
  open: true, // 打开默认浏览器
  // hot: true, // 热更新
  historyApiFallback: true,
  proxy: { ...proxySetting },
}

function start() {
  return new Promise((resolve, reject) => {
    const compiler = Webpack(webpackDevConfig)
    // @ts-ignore
    const server = new WebpackDevServer(serverConfig, compiler)

    server.startCallback(() => {
      console.log(chalk.green(`Successfully started server on http://${SERVER_HOST}:${SERVER_PORT}`))
      resolve(undefined)
    })
  })
}
start()
