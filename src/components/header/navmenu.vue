<template>
  <div class="header">
    
    <div class="header__el">
     <img :src="Imgsrc" alt="log" width="40px" height="40px">
      <el-input
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="input2">
  </el-input>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#fff"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="3">婚礼场地</el-menu-item>
        <el-menu-item index="4">礼服预定</el-menu-item>
        <el-menu-item index="5">联系我们</el-menu-item>
        <el-submenu index="2">
          <template slot="title">婚纱相片墙</template>
          <el-menu-item index="2-1">中式婚礼</el-menu-item>
          <el-menu-item index="2-2">欧式婚礼</el-menu-item>
          <el-menu-item index="2-3">复古婚礼</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
import Imgsrc from '@/assets/img/log.png'
export default {
  data() {
    return {
      input2:'',
      Imgsrc,
      activeIndex: "1",
      activeIndex2: "1",
    
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
 
    },
  },
};
</script>

<style lang="less" >
@import "~@/assets/css/header/navmenu.less";


</style>