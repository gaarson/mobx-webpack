process.env.BABEL_ENV = 'development';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: './js/bundle.js',
    path: path.join(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        include: path.resolve(__dirname, '../src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react-app', 'env'],
            plugins: [
              'transform-decorators-legacy',
              'transform-class-properties',
            ],
          },
        },
      },
    ],
  },
  devServer: {
    port: 8000,
    hot: true,
    contentBase: path.join(__dirname, '../dist'),
    headers: { 'Access-control-allow-origin': '*' },
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', 'css', '.json'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['..dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: './public/img',
        to: './dist',
      },
    ]),
  ],
};
