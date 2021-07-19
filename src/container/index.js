/*
 * @Author: your name
 * @Date: 2021-07-18 18:01:11
 * @LastEditTime: 2021-07-18 22:14:45
 * @LastEditors: Please set LastEditors
 * @Description: 容器
 * @FilePath: \containerjs\src\container\index.js
 */
import { initContainerStyle } from "../options";
import { defaultOption } from "../options/options";

/**
 * 初始化容器
 * @param {HTMLElement} dom
 */
export function initContainerDom(dom) {
  // initContainerStyle(defaultOption, dom);
  return dom;
}
