import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Test from "@/views/Test";
import Echarts from "@/views/Echarts";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/test",
      name: "Test",
      component: Test
    },
    {
      path: "/echarts",
      name: "Echarts",
      component: Echarts
    }
  ]
});
