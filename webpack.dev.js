const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const history = require('connect-history-api-fallback')
const convert = require('koa-connect')

module.exports = {
  mode: 'development',
  entry: {
    main: [
      'babel-polyfill',
      'isomorphic-fetch',
      // 'webpack-hot-middleware/client',
      './app/Entry',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader?sourceMap',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              // localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['main'],
      filename: 'index.html',
      template: 'template/index.ejs',
    }),
  ],
  // devtool: 'eval', // fast but line numbers don't correspond. no maps from loaders
  devtool: 'cheap-module-eval-source-map', // as below but w/ module source maps
  // devtool: 'cheap-eval-source-map', // lines only. no maps from loaders
  // devtool: 'eval-source-map', // best & slowest. includes column mapping
  serve: { // map SPA requests to index.html
    content: path.join(__dirname, 'dist'),
    add: (app, middleware, options) => { // eslint-disable-line
      const historyOptions = {
        // ... see: https://github.com/bripkens/connect-history-api-fallback#options
      }
      app.use(convert(history(historyOptions)))
    },
  },
}
