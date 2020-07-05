<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* 滚动条样式更改 */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border: 2px solid #fff;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
::-webkit-scrollbar-corner {
  background: #fff;
}
/* 兼容IE浏览器 */
body {
  scrollbar-arrow-color: #cdcdcd; /*三角箭头的颜色*/
  scrollbar-face-color: #cdcdcd; /*立体滚动条的颜色*/
  scrollbar-3dlight-color: #fff; /*立体滚动条亮边的颜色*/
  scrollbar-highlight-color: #fff; /*滚动条空白部分的颜色*/
  scrollbar-shadow-color: #fff; /*立体滚动条阴影的颜色*/
  scrollbar-darkshadow-color: #fff; /*立体滚动条强阴影的颜色*/
  scrollbar-track-color: #fff; /*立体滚动条背景颜色*/
}
</style>
