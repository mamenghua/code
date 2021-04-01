import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Test from "@/views/Test";
import Echarts from "@/views/Echarts";
import Highcharts from "@/views/Highcharts";
import Fabric from "@/views/fabric";
import Ztree from "@/views/ztree";
import Aes from "@/views/aes";
import EchartsTooltip from "@/views/echartsTooltip";
import Scroll from "@/views/scroll";

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
    },
    {
      path: "/highcharts",
      name: "Highcharts",
      component: Highcharts
    },
    {
      path: "/fabric",
      name: "Fabric",
      component: Fabric
    },
    {
      path: "/ztree",
      name: "Ztree",
      component: Ztree
    },
    {
      path: "/aes",
      name: "Aes",
      component: Aes
    },
    {
      path: "/echartsTooltip",
      name: "EchartsTooltip",
      component: EchartsTooltip
    },{
      path: "/scroll",
      name: "Scroll",
      component: Scroll
    }
  ]
});
