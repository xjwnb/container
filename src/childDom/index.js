/*
 * @Author: your name
 * @Date: 2021-07-17 20:14:12
 * @LastEditTime: 2021-07-18 22:24:34
 * @LastEditors: Please set LastEditors
 * @Description: childDom
 * @FilePath: \containerjs\src\childDom\index.js
 */
import { throwError } from "../utils";

// childDom id
let uid = 0;

/**
 * 初始化 childDom
 * @param {HTMLCollection} childDom 子容器
 */
export function initChildDom(childDom, dom) {
  let flag = isChild(childDom, dom);
  if (!flag) {
    throwError("Parameter dom should be the parent of parameter childDom");
  }

  // 添加唯一标识
  const resultChild = setChildDomUID(childDom);
  return resultChild;
}

/**
 * 子dom添加唯一标识 uid
 * @param {HTMLCollection} childDom
 */
export function setChildDomUID(childDom) {
  for (let l = 0; l < childDom.length; l++) {
    childDom[l].uid = uid++;
  }
  return childDom;
}

/**
 * 判断 childDom 是否为 dom 的子节点
 */
export function isChild(childDom, dom) {
  let flag = false;
  for (let l = 0; l < childDom.length; l++) {
    flag = childDom[l].parentNode === dom;
  }
  return flag;
}
