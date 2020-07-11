const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env, argv) => {
  let devtool = 'cheap-module-eval-source-map'

  const copy = [{ from: 'assets/**/*' }]

  if (['staging', 'production'].includes(env.NODE_ENV)) {
    devtool = false
  }

  const config = {
    mode: argv.mode,
    target: 'web',
    devtool: devtool,
    context: path.resolve(__dirname),
    entry: {
      app: './app/index.ts'
    },
    output: {
      path: path.resolve(__dirname, '../dist/src'),
      filename: '[name].bundle.js',
      pathinfo: false
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
          use: [{ loader: 'cache-loader' }, { loader: 'babel-loader' }]
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules|vue\/src/,
          use: [
            { loader: 'cache-loader' },
            { loader: 'babel-loader' },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                experimentalWatchApi: true,
                appendTsSuffixTo: [/\.vue$/]
              }
            }
          ]
        },
        {
          test: /.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader', options: { url: false } },
            { loader: 'postcss-loader' }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader', options: { url: false } },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  path.resolve(__dirname, 'app/scss/_variables.scss'),
                  path.resolve(__dirname, 'app/scss/_mixin.scss')
                ]
              }
            }
          ]
        },
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: { pretty: true }
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new FriendlyErrorsWebpackPlugin(),
      new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true, vue: true }),
      new CopyWebpackPlugin(copy),
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV) })
    ],
    optimization: {
      splitChunks: { name: 'vendor', chunks: 'initial', minChunks: 3 }
    },
    resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx'],
      alias: {
        '@components': path.resolve(__dirname, 'app/components'),
        '@pages': path.resolve(__dirname, 'app/pages'),
        '@stores': path.resolve(__dirname, 'app/stores'),
        '@utils': path.resolve(__dirname, 'app/utils'),
        '@': path.resolve(__dirname, 'app'),
        vue$: 'vue/dist/vue.esm.js'
      }
    },
    cache: true,
    stats: {
      modules: false,
      assets: false,
      colors: true
    }
  }

  return config
}
