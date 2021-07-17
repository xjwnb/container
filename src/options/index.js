/*
 * @Author: your name
 * @Date: 2021-07-15 22:45:39
 * @LastEditTime: 2021-07-17 18:06:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \containerjs\src\options\index.js
 */
import { validate } from "schema-utils";
import shema from "./shema.json";
import { isObject } from "../utils/validate";
// 默认选项
import { defaultOption } from "./options";

/**
 * 验证选项
 * @param {Object} options 选项
 */
export function validateOptions(options = {}) {
  // 校验选项
  validate(shema, options, {
    name: "options",
  });
  console.log("okk");

  mergeOptions({
    childOptions: {
      animation: false,
    },
  });
}

/**
 * 合并默认选项和传入选项，并且返回合并后的选项
 * @param {*} options 选项
 */
export function mergeOptions(options = {}) {
  // 最总选项
  // const resultOption = Object.assign({}, defaultOption, options);
  // console.log(resultOption);

  let opt = {};
  for (let key in defaultOption) {
    opt[key] = isObject(defaultOption[key])
      ? options[key]
        ? { ...defaultOption[key], ...options[key] }
        : { ...defaultOption[key] }
      : options[key] || defaultOption[key];
  }
  console.log(opt);
}
