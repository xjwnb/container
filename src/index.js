/*
 * @Author: your name
 * @Date: 2021-07-12 10:32:44
 * @LastEditTime: 2021-07-17 18:06:30
 * @LastEditors: Please set LastEditors
 * @Description: 入口文件
 * @FilePath: \containerjs\src\index.js
 */

import "./test.less";
import { validateOptions } from "./options";
import { isObject } from "./utils/validate";

class ContainerJS {
  container = null;
  child = [];
  options = {};

  constructor(dom, childDom) {
    this.init(dom, childDom);
  }

  /**
   * 初始化
   * @param {HTMLElement} dom 容器 dom
   * @param {HTMLElement} childDom  容器节点下需要被控制的 dom
   */
  init(dom, childDom = []) {
    if (!(dom instanceof HTMLElement) || !(childDom instanceof Array)) {
      throw Error(
        `TypeError: the parameter type of the init method is HTMLElement, the type passed is ${typeof dom}`
      );
    }
    this.container = dom;
    this.child = childDom;
  }

  /**
   * 设置选项
   * @param {Object} options 选项
   */
  setOptions(options = {}) {
    isObject(options) && validateOptions(options);
    this.options = options;
  }
}

const container = new ContainerJS(document.body);
container.setOptions({
  containerOptions: {},
  childOptions: {},
});
