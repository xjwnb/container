/*
 * @Author: your name
 * @Date: 2021-07-15 23:46:35
 * @LastEditTime: 2021-07-15 23:50:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \containerjs\src\validate\index.js
 */

/**
 * 校验是否为对象 Object，返回布尔值
 * @param {any} obj
 */
export function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
