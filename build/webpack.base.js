/*
 * @Author: your name
 * @Date: 2021-07-12 11:21:50
 * @LastEditTime: 2021-07-18 21:43:07
 * @LastEditors: Please set LastEditors
 * @Description: webpack 基本公共配置
 * @FilePath: \containerjs\build\webpack.base.js
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const rootDir = process.cwd();

module.exports = {
  entry: path.resolve(rootDir, "src/index.js"),
  output: {
    path: path.resolve(rootDir, "dist"),
    filename: "bundle.[contenthash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: "babel-loader",
        include: path.resolve(rootDir, "src"),
        exclude: /node_modules/,
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            /* options: {
              modules: {
                compileType: "module",
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
            }, */
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: function () {
                  return [require("autoprefixer")()];
                },
              },
            },
          },
          "less-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
              esModule: false,
              name: "[name]_[hash:6].[ext]",
              outputPath: "assets",
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, "public/index.html"),
      inject: "body",
      scriptLoading: "blocking",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(rootDir, "public", "js"),
          to: path.resolve(rootDir, "dist", "js"),
        },
        {
          from: path.resolve(rootDir, "public", "css"),
          to: path.resolve(rootDir, "dist", "css"),
        },
      ],
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new BundleAnalyzerPlugin(),
  ],
};
