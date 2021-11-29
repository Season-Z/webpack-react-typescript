import { resolve } from 'path'
import webpack, { Configuration } from 'webpack'
import { merge } from 'webpack-merge'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import glob from 'glob'
import PurgeCSSPlugin from 'purgecss-webpack-plugin'
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import common from './webpack.common'
import { PROJECT_PATH, shouldOpenAnalyzer } from './config'

export default merge(
  common as Configuration,
  {
    mode: 'production',
    devtool: false,
    plugins: [
      new CleanWebpackPlugin(),
      new PurgeCSSPlugin({
        paths: glob.sync(`${resolve(PROJECT_PATH, './src')}/**/*.{tsx,scss,less,css}`, { nodir: true }),
        // whitelist: ['html', 'body'],
      }),
      new webpack.BannerPlugin({
        raw: true,
        banner:
          '/** @preserve Powered by webpack-react-typescript (https://Season-Z.github.io/webpack-react-typescript) */',
      }),
      // shouldOpenAnalyzer &&
      //   new BundleAnalyzerPlugin({
      //     analyzerMode: 'server',
      //     analyzerHost: '127.0.0.1',
      //     analyzerPort: 8888,
      //   }),
    ].filter(Boolean),
  } as Configuration,
)
