/*
 * @Author: your name
 * @Date: 2021-07-18 11:55:39
 * @LastEditTime: 2021-07-18 12:01:10
 * @LastEditors: Please set LastEditors
 * @Description: error
 * @FilePath: \containerjs\src\utils\error.js
 */

/**
  * 抛出异常
  * @param {String} message 错误提示 
  */
export function throwError(message) {
  throw Error(message);
}