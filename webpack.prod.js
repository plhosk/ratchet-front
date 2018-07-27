const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  mode: 'production',
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
    filename: '[name].[chunkhash:4].js',
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /(node_modules)/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   options: {
      //     emitWarning: true,
      //   },
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
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
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash:4].css',
      chunkFilename: '[name].[chunkhash:4].css',
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    //   reportFilename: 'bundle.report.html',
    //   openAnalyzer: true,
    // }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  performance: {
    hints: false, // disable "entrypoint too large" warning
  },
  stats: {
    colors: true,
    children: false,
    modules: false,
  },
}
