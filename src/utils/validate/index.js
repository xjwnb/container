/*
 * @Author: your name
 * @Date: 2021-07-15 23:46:35
 * @LastEditTime: 2021-07-18 15:27:14
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

/**
 * 校验传入的是否为函数，返回布尔值
 * @param {function} fun 
 */
export function isFunc(fun) {
  return typeof fun === "function";
}