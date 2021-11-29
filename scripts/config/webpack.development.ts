import webpack, { Configuration } from 'webpack'
import { merge } from 'webpack-merge'
import common from './webpack.common.js'
import { SERVER_HOST, SERVER_PORT } from './config'

import proxySetting from '../../src/proxy'

const developConfig = merge(
  common as Configuration,
  {
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
      historyApiFallback: true,
      proxy: { ...proxySetting },
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  } as Configuration,
)

export default developConfig
