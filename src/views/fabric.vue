<template>
  <div class="container">
    <canvas id="canvas" width="500" height="300"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    var canvas = new fabric.Canvas("canvas");
    // 以下给canvas加红色矩形实心方块
    var rect = new fabric.Rect({
      top: 50,
      left: 400,
      width: 100,
      height: 70,
      fill: "red",
      angle: 45
    });
    canvas.add(rect);
    rect.set({ strokeWidth: 10, stroke: "rgba(100,200,200,0.5)" });
    rect.set("selectable", false); //使对象不可选择

    // 以下给canvas加绿色圆形和蓝色三角形
    var circle = new fabric.Circle({
      radius: 20,
      fill: "green",
      left: 300,
      top: 100
    });
    var triangle = new fabric.Triangle({
      width: 20,
      height: 30,
      fill: "blue",
      left: 250,
      top: 50
    });
    canvas.add(circle, triangle);
    // 以下给canvas加图片
    fabric.Image.fromURL(require("../assets/learning.jpg"), function(oImg) {
      // scale image down, and flip it, before adding it onto canvas
      oImg.scale(0.8).set("flipX", true);
      canvas.add(oImg);
    });
    // 以下给canvas加路径
    var path = new fabric.Path("M 0 0 L 200 100 L 170 170 z");
    // “ M”表示“移动”命令，并指示隐形笔移动到0、0点。
    // “ L”代表“线”，使笔画线至200、100点。
    // 然后，另一个“ L”创建一条到170、170的线。
    // 最后，“ z”告诉强制绘图笔关闭电流路径并最终确定形状。
    // 结果，我们得到一个三角形。
    path.set({ left: 260, top: 120 });
    canvas.add(path);
  }
};
</script>

<style scoped>
canvas {
  border: 1px dashed black;
}
</style>
