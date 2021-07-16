/*
 * @Author: your name
 * @Date: 2021-07-12 11:27:03
 * @LastEditTime: 2021-07-12 11:29:38
 * @LastEditors: Please set LastEditors
 * @Description: webpack 开发模式配置
 * @FilePath: \containerjs\build\webpack.dev.js
 */
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: "3000",
    hot: true,
    stats: "errors-only",
    compress: true,
  },
});
