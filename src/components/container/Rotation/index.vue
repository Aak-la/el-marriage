<template>
  <div class="index-container" >
    <el-carousel :interval="5000" arrow="always" :height="`${heigth}px`" >
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img :src="item.bigImg" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { getImg } from "@/api/index.js";

export default {
  data() {
    return {
      imgList: [],
    };
  },
  
  computed: {
    heigth: () => {
      return document.documentElement.clientHeight - 60;
    },
  },
  async created() {
    this.imgList = await getImg();

  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/container/Rotation.less";

</style>