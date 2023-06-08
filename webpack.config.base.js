const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'PCK',
      template: 'src/assets/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        loader: 'file-loader'
      },
      {
        test: /\.styl$/i,
        loader: [
          "style-loader",
          "css-loader",
          "stylus-loader"
        ]
      },
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require('dart-sass')
            }
          }
        ]
      }
    ]
  }
};
