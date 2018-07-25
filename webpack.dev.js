const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
      // antd css files don't use CSS Modules
      {
        test: /antd.*\.css$/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader',
        ],
      },
      {
        test: /\.css$/,
        exclude: /antd.*\.css$/,
        loaders: [
          'style-loader?sourceMap',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
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
      template: 'lib/index.ejs',
    }),
  ],
  // devtool: 'eval', // fast but line numbers don't correspond. no maps from loaders
  devtool: 'cheap-module-eval-source-map', // as below but w/ module source maps
  // devtool: 'cheap-eval-source-map', // lines only. no maps from loaders
  // devtool: 'eval-source-map', // best & slowest. includes column mapping
}
