<template>
  <div>
    <input v-model="str" />
    <p>{{ str }}加密之后{{ encryptStr }}</p>
  </div>
</template>

<script>
import { encrypt, decrypt } from "@/utils/mUtils";
export default {
  data() {
    return {
      str: "enms",
      encryptStr: ""
    };
  },
  created() {
    this.encryptStr = encrypt(this.str);
    console.log("加密后" + this.encryptStr);
    console.log("解密后" + decrypt(this.encryptStr));
  }
};
</script>

<style></style>
