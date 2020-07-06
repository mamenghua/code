<template>
  <div>
    {{ msg }}
    <div id="echartsDiv"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "Echarts",
  data() {
    return {
      msg: "Echarts页面"
    };
  },
  mounted() {
    let myChart = echarts.init(document.getElementById("echartsDiv"));
    let option = {
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {},
      legend: {
        data: ["销量"]
      },
      xAxis: {},
      yAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
          backgroundStyle: {
            color: "rgba(220, 220, 220, 0.8)"
          }
        }
      ]
    };
    myChart.setOption(option);
  }
};
</script>

<style scoped>
#echartsDiv {
  width: 600px;
  height: 300px;
}
</style>
