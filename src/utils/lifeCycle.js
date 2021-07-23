/*
 * @Author: your name
 * @Date: 2021-07-18 12:07:18
 * @LastEditTime: 2021-07-19 11:56:14
 * @LastEditors: Please set LastEditors
 * @Description: 生命周期
 * @FilePath: \containerjs\src\utils\lifeCycle.js
 */

export function initCycle(options, type) {
  const { lifeCycle } = options;
  switch (type) {
    case "beforeCreate":
      beforeCreate(lifeCycle[type]);
      break;
    default:
      break;
  }
}

/**
 * 初始化之前执行
 * @param {Function} callback
 */
export function beforeCreate(callback) {
  if (!callback) return;
  !(typeof callback === "function") &&
    throwError(
      "The argument to the beforeCreate method should be of type function"
    );
  // beforeCreate(callback);
  // this.beforeCreateCallback.push(callback);
  callback();
}
