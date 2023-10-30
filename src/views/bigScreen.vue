<template>
  <div>
    大屏无缝衔接滚动
    <div class="alarmBox"
        >
        <div class="alarmListBox"
          id="alarmListBox"
          :style="{
            'transform': `translate(${scrollWidth}px,0)`,
            'transition': isAnim ? 'all 1s linear' : 'none'
          }">
          <div v-for="item in alarmList"
            class="alarmItem">
            <span class="alarmText">{{ item.title }}</span>
          </div>
          <!-- 放置两份 实现滚动 无缝衔接 -->
          <div v-for="item in alarmList"
            class="alarmItem">
            <span class="alarmText">{{ item.title }}</span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null, // 滚动的定时器
      scrollWidth: 0, // 滚动的距离
      isAnim: false, // 滚动是否带有动画
      alarmList: [
        {
          title: '1号线人民广场至南京东路上行区间K33+465处水位监测报警'
        },
        {
          title: '2号线人民广场至南京东路上行区间K33+465处水位监测报警'
        }
      ]
    }
  },
  mounted() {
    this.scrollInit()
  },
  methods: {
    scrollInit() {
      let _this = this
      // 获取滚动dom
      const alarmListBox = document.getElementById("alarmListBox")
      if(!alarmListBox) {
        return
      }
      
      function start() {
        _this.timer = setInterval(() => {
          if(alarmListBox) {
            let alarmScrollWidth = alarmListBox.scrollWidth
            if(_this.scrollWidth <= (-alarmScrollWidth/2) ) {
              _this.isAnim = false
              _this.scrollWidth += (alarmScrollWidth/2)
              setTimeout(() => {
                _this.isAnim = true
                _this.scrollWidth = _this.scrollWidth - 50
              }, 50)
            } else {
              _this.isAnim = true
              _this.scrollWidth = _this.scrollWidth - 50
            }
          }
        }, 1000)
      }
      start()
      // 鼠标悬浮时停止滚动
      alarmListBox.addEventListener("mouseenter", () => {
        clearInterval(this.timer)
      })
      // 鼠标移开时继续滚动
      alarmListBox.addEventListener("mouseleave", start);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style>
.alarmBox {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 24vw;
  height: 36px;
  line-height: 36px;
  background-size: 100% 100%;
  color: #FA6464;
  overflow: hidden;
  .alarmListBox {
    display: flex;
  }
  .alarmItem {
    flex-shrink: 0;
    padding: 0 10px;
    .alarmText {
      vertical-align: middle;
    }
  }
}
</style>