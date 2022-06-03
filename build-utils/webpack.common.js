const webpack = require('webpack')
const commonPaths = require('./common-paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = {
  entry: './src/index.js',
  output: {
    path: commonPaths.outputPath,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    moduleIds: 'deterministic',
    // runtimeChunks: 'single',
    splitChunks: {
      // maxSize: 1,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 1,
        },
        // styles: {
        // 	name: 'styles',
        // 	test: /\.css$/,
        // 	chunks: 'all',
        // 	enforce: true,
        // },
        // vendor: {
        // 	chunks: 'all',
        // 	test: /[\\/]node_modules[\\/]/,
        // 	name: 'vendors',
        // },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      // favicon: 'public/favicon.ico',
    }),
  ],
}
module.exports = config
