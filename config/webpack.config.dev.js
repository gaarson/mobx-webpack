process.env.BABEL_ENV = 'development';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const 

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../public/js'),
    publicPath: path.join(__dirname, '../public'),
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        loader: 'babel-loader',
        options: {
          presets: ['react-app'],
        },
      },
    ],
  },
  devServer: {
    port: 3000,
    hot: true,
    contentBase: path.join(__dirname, '../public'),
    headers: {'Access-control-allow-origin': '*'},
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', 'css', '.json'],
  },
};
