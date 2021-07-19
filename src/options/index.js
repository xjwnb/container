/*
 * @Author: your name
 * @Date: 2021-07-15 22:45:39
 * @LastEditTime: 2021-07-18 22:26:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \containerjs\src\options\index.js
 */
import { validate } from "schema-utils";
import shema from "./shema.json";
import { isObject, isFunc } from "../utils/validate";
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
}

/**
 * 合并默认选项和传入选项，并且返回合并后的选项
 * @param {*} options 选项
 */
export function mergeOptions(options = {}) {
  let opt = {};
  for (let key in defaultOption) {
    opt[key] = isObject(defaultOption[key])
      ? options[key]
        ? { ...defaultOption[key], ...options[key] }
        : { ...defaultOption[key] }
      : options[key] || defaultOption[key];
  }
  return opt;
}

/**
 * 初始化 container 容器样式
 * @param {object} options
 * @param {HTMLElement} containerDom
 */
export function initContainerStyle(options, containerDom) {
  const { style } = options.containerOptions;
  for (let key in style) {
    containerDom.style[key] = style[key];
  }
}

/**
 * 初始化 container 容器样式
 * @param {object} options
 * @param {HTMLCollection} childDom
 */
export function initChildDomStyle(options, childDom) {
  const { style } = options.childOptions;
  for (let l = 0; l < childDom.length; l++) {
    for (let key in style) {
      childDom[l].style[key] = style[key];
    }
  }
}
