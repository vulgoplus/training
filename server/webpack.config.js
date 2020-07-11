const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const NodemonPlugin = require('nodemon-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env, argv) => {
  const copy = [
    { from: 'views/*' },
    { from: resolve('server/uploads/dont_delete_me.txt'), to: resolve('dist/uploads') }
  ]

  return {
    mode: argv.mode,
    target: 'node',
    devtool: 'source-map',
    context: path.resolve(__dirname),
    entry: { server: './app.ts' },
    output: {
      path: path.resolve(__dirname, '../dist/server'),
      filename: '[name].js',
      libraryTarget: 'commonjs2',
      pathinfo: false,
      devtoolModuleFilenameTemplate: '[absolute-resource-path]'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
          options: { transpileOnly: true, experimentalWatchApi: true }
        }
      ]
    },
    externals: [nodeExternals({ modulesFromFile: true })],
    plugins: [
      new FriendlyErrorsWebpackPlugin(),
      new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
      new CopyWebpackPlugin(copy),
      new NodemonPlugin({ nodeArgs: ['--inspect=5859'] }),
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV) })
    ],
    resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx'],
      alias: {
        '@': path.resolve(__dirname)
      }
    },
    node: {
      __filename: false,
      __dirname: false
    },
    cache: true,
    stats: {
      modules: false,
      assets: false,
      colors: true
    }
  }
}

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
