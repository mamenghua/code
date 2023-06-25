<template>
  <div class="container">
    <canvas id="canvas" width="500" height="300"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    var canvas = new fabric.Canvas("canvas");
    // 以下给canvas加换行文字
    const iText = new fabric.IText(
`hello
world`
)
    iText.width = 200
    iText.height = 100
    iText.fill = "blue"
    // 文字的背景色
    // iText.textBackgroundColor = 'red'
    
    // 文字块整个的背景色
    iText.backgroundColor = 'rgba(0,0,0,.2)'

    // 更改透明度
    // iText.opacity = .5

    canvas.add(iText)

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
    fabric.Image.fromURL(require("../assets/logo.png"), function(oImg) {
      // scale image down, and flip it, before adding it onto canvas
      oImg.scale(0.8).set("flipX", true);
      oImg.top = 100;
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

    canvas.setBackgroundImage(
      require("../assets/logo.png"),
      canvas.renderAll.bind(canvas),
    )

    canvas.setBackgroundColor(
      {
        source: require("../assets/logo.png"),
        repeat: 'repeat'
      },
      canvas.renderAll.bind(canvas)
    )

    // 保存画布
    let data = canvas.toJSON()
    console.log(data)
  }
};
</script>

<style scoped>
canvas {
  border: 1px dashed black;
}
</style>
