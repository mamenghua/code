<template>
  <div>
    <div class="scrollDiv">
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ex
          quia ab aliquid facere architecto culpa dolorum fugit corrupti harum
          accusantium quisquam inventore et magnam itaque minima hic! Impedit
          error.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          incidunt quia ipsam totam tenetur maxime repellendus possimus debitis
          molestiae velit vel fugiat ullam excepturi est quisquam quo fugit
          culpa amet.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          facilis ipsam iste repellat sint numquam explicabo voluptatum
          voluptate corporis fugit adipisci qui exercitationem corrupti debitis
          tempore omnis maxime at quidem!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          voluptatem dolores ab dolorem est itaque ut sit deserunt qui
          laudantium eaque vitae perspiciatis amet quasi unde inventore dolor
          quis. Natus!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quia
          doloremque blanditiis quas unde nostrum a voluptatibus quam
          perspiciatis non quaerat enim neque quos rerum quo dolor expedita
          error deserunt!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      msg: "Test页面，滚动条"
    };
  },
  mounted() {
    // 测试?. ??
    // '@babel/plugin-proposal-optional-chaining',  //可选链 ?.
    // '@babel/plugin-proposal-nullish-coalescing-operator'  //空值合并 ??
    let a = {
      b: 'xx',
      c: 'ddd'
    }
    if(a?.b){
      console.log(a.b)
    }else{
      console.log(a.c)
    }
  }
};
</script>

<style scoped>
.scrollDiv {
  width: 200px;
  height: 200px;
  overflow: auto;
  border: 10px solid red;
}
.scrollDiv div {
  width: 400px;
}
</style>
