<template>
  <div class="helloword">
    <div class="text-event">
      <vue-draggable-resizable
        :w="150"
        :h="150"
        :x="50"
        :y="50"
        :min-width="50"
        :min-height="50"
        :parent="true"
        :grid="[10,10]"
        class-name="dragging1"
        @dragging="onDrag"
        @resizing="onResize"
        @click.native="onClick"
        drag-handle=".drag"
        :active="true"
        :handles="['tm','bm','ml','mr']"
        :prevent-deactivation ="true"
      >
        <p class="drag">
          你好！ 我是一个灵活的组件。 你可以拖我四处，你可以调整我的大小。
          <br />
          X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}
        </p>
      </vue-draggable-resizable>
    </div>
 
  </div>
</template>

<script>
export default {
    name: "DraggableResizable",
    data() {
        return {
            width: 0,
            height: 0,
            x: 0,
            y: 0
        }
    },
    methods: {
        onResize: function(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        },
        onDrag: function(x, y) {
            this.x = x;
            this.y = y;
        },
        onClick: function(e) {
            console.log(e)
        }
    }
}
</script>

<style scoped>
.helloword {
  overflow: hidden;
}
.text-event {
  float: left;
  height: 500px;
  width: 500px;
  border: 1px solid red;
  position: relative;
}
.p-event {
  float: left;
  height: 300px;
  width: 300px;
  border: 1px solid blue;
  position: relative;
  margin-left: 20px;
}
 
.dragging1 {
  border: 1px solid #000;
  color: #000;
}
</style>