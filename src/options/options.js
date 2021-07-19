/*
 * @Author: your name
 * @Date: 2021-07-16 22:18:16
 * @LastEditTime: 2021-07-18 22:40:21
 * @LastEditors: Please set LastEditors
 * @Description: 默认值
 * @FilePath: \containerjs\src\options\options.js
 */

export const defaultOption = {
  containerOptions: {
    style: {
      width: "100%",
      padding: "10px",
      background: "rgba(0, 0, 0, .6)",
      border: "",
      borderRadius: "10px",
      boxSizing: "border-box",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridAutoFlow: "row dense",
      gridGap: "20px 20px",
    },
  },
  childOptions: {
    style: {
      background: "#ffffff",
      border: "",
      borderRadius: "10px",
      boxSizing: "border-box",
    },
    draggable: true,
    animation: true,
  },
  lifeCycle: {
    beforeCreate() {},
  },
};
