const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: [
      'babel-polyfill',
      'isomorphic-fetch',
      'webpack-hot-middleware/client',
      './app/Entry',
    ],
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
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
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
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
