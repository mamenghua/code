<template>
  <div class="wrap">
      <h1>vue-infinite-scroll</h1>
      <h1>vue-infinite-scroll</h1>
      <h1>vue-infinite-scroll</h1>
      <h1>vue-infinite-scroll</h1>
      <h1>vue-infinite-scroll</h1>
      
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
          ...
          <ul>
              <li v-for="item in data">{{ item.name }}</li>
          </ul>
          <div class="loading" v-show="busy">loading.....</div>
      </div>
  </div>
</template>

<script>
var count = 0;
export default {
    name: "Scroll",
    data() {
        return {
            data: [
                {name: count++},
                {name: count++},
                {name: count++}
            ],
            busy: false
        }
    },
    methods: {
        loadMore(){
            this.busy = true;
            setTimeout(() => {
                for(let i=0,j=10; i<j; i++){
                    this.data.push({name: count++})
                }
                this.busy = false;
            }, 1000)
        }
    }
}
</script>

<style scoped>
.wrap {
    height: 100vh;
    overflow-y: auto;
}
</style>