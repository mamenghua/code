// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import fabric from "fabric";
import infiniteScroll from "vue-infinite-scroll";
Vue.use(fabric);
Vue.use(infiniteScroll);

Vue.config.productionTip = false;
// 引入ztree
import "../plugins/ztree/js/jquery-1.4.4.min.js";
import "../plugins/ztree/js/jquery.ztree.core.min.js";
import "../plugins/ztree/js/jquery.ztree.excheck.min.js";
// 引入ztree的css样式文件
import "../plugins/ztree/css/zTreeStyle/zTreeStyle.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
