<template>
  <div>
    {{ msg }}
    <el-switch name="aaa" v-model="switchValue" @change="switchValueChange">
    </el-switch>
    <div id="echartsDiv"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "Echarts",
  data() {
    return {
      msg: "Echarts页面",
      switchValue: false,
      faultByHourTime: null
    };
  },
  mounted() {},
  methods: {
    switchValueChange(newValue) {
      if (newValue) {
        this.AutoTooltip();
      } else {
        this.NoTooltip();
      }
    },
    AutoTooltip() {
      let myChart = echarts.init(document.getElementById("echartsDiv"));
      let option = {
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true
          }
        ]
      };
      myChart.clear();
      myChart.setOption(option);
      // 动态显示tootip
      var faultByHourIndex = 0; //播放所在下标
      this.faultByHourTime = setInterval(function() {
        //使得tootip每隔三秒自动显示
        myChart.dispatchAction({
          type: "showTip", // 根据 tooltip 的配置项显示提示框。
          seriesIndex: 0,
          dataIndex: faultByHourIndex
        });
        faultByHourIndex++;
        // faultRateOption.series[0].data.length 是已报名纵坐标数据的长度
        if (faultByHourIndex >= option.series[0].data.length) {
          faultByHourIndex = 0;
        }
        //   if (faultByHourIndex >= option.series[1].data.length) {
        //     faultByHourIndex = 0;
        //   }
        //   if (faultByHourIndex >= option.series[2].data.length) {
        //     faultByHourIndex = 0;
        //   }
      }, 3000);
    },
    NoTooltip() {
      let myChart = echarts.init(document.getElementById("echartsDiv"));
      let option = {
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true
          }
        ]
      };
      myChart.clear();
      clearInterval(this.faultByHourTime);
      myChart.setOption(option);
    }
  }
};
</script>

<style scoped>
#echartsDiv {
  width: 600px;
  height: 300px;
}
</style>
