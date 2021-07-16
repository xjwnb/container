/*
 * @Author: your name
 * @Date: 2021-07-12 11:30:24
 * @LastEditTime: 2021-07-13 23:50:24
 * @LastEditors: Please set LastEditors
 * @Description: webpack 生产模式配置
 * @FilePath: \containerjs\build\webpack.pro.js
 */
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const rootDir = process.cwd();

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: "hidden-source-map",
  plugins: [
    
  ],
});
