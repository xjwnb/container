/*
 * @Author: your name
 * @Date: 2021-07-12 10:32:44
 * @LastEditTime: 2021-07-18 22:41:21
 * @LastEditors: Please set LastEditors
 * @Description: 入口文件
 * @FilePath: \containerjs\src\index.js
 */

import "./test.less";
import {
  validateOptions,
  mergeOptions,
  initContainerStyle,
  initChildDomStyle,
} from "./options";
import { isObject } from "./utils/validate";
import { initChildDom } from "./childDom";
import { initContainerDom } from "./container";
import { throwError } from "./utils/error";
import { initCycle } from "./utils/lifeCycle";

class ContainerJS {
  container = null;
  child = [];
  options = {};
  // beforeCreateCallback = [];

  constructor(dom, childDom) {
    this.init(dom, childDom);
  }

  /**
   * 初始化
   * @param {HTMLElement} dom 容器 dom
   * @param {HTMLElement} childDom  容器节点下需要被控制的 dom
   */
  init(dom, childDom = []) {
    !(dom instanceof HTMLElement) &&
      throwError(
        `TypeError: the parameter type of the init method is HTMLElement, but the type passed is ${typeof dom}`
      );

    !(childDom instanceof HTMLCollection) &&
      throwError(
        `TypeError: the parameter type of the init method is HTMLCollection, but the type passed is ${typeof childDom}`
      );

    this.container = initContainerDom(dom);
    this.child = initChildDom(childDom, dom);
    // this.child = childDom;
  }

  /**
   * 设置选项
   * @param {Object} options 选项
   */
  setOptions(options = {}) {
    // 校验 options
    isObject(options) && validateOptions(options);
    // 合并传入 option 和 默认 option
    const resultOptions = mergeOptions(options);

    // beforeCreate lifeCycle
    initCycle.call(this, resultOptions, "beforeCreate");

    // 初始化样式
    initContainerStyle(resultOptions, this.container);
    initChildDomStyle(resultOptions, this.child);
  }

  /**
   * 初始化之前执行 - life cycle
   */
  /* beforeCreate(callback) {
    if (!callback) return;
    !(typeof callback === "function") &&
      throwError(
        "The argument to the beforeCreate method should be of type function"
      );
    beforeCreate(callback);
    this.beforeCreateCallback.push(callback);
  } */
}

// test
const container = new ContainerJS(
  document.getElementById("container"),
  document.getElementsByClassName("child")
);

container.setOptions({
  containerOptions: {},
  childOptions: {},
  lifeCycle: {
    beforeCreate() {
      console.log("哈哈哈哈，beforeCreate");
    },
  },
});
