import webpack, { Configuration } from 'webpack'
import { merge } from 'webpack-merge'
import common from './webpack.common'

const developConfig = merge(common as Configuration, {
  mode: 'development',
  devtool: 'eval-source-map',
  stats: 'errors-only', // 终端仅打印 error
  plugins: [new webpack.HotModuleReplacementPlugin()],
})

export default developConfig
