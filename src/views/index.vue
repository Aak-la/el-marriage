<template>
  <div class="home-conatiner">
   
    <el-container >
      <el-header><Mynavmenu /></el-header>
      <el-main > 
        <Rotation />
        <About/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Mynavmenu from "@/components/header/navmenu.vue";
import Rotation from "@/components/container/Rotation/index.vue";
import About from "@/components/container/content/about.vue";

export default {
  name: "Home",
  components: {
  
    Mynavmenu,
    Rotation,
    About
  },
  data(){
    return{
     isLoading:true
    }
  }
  ,
  methods: {
    
  },
};
</script>

<style lang="less">
.el-header {
  padding: 0 !important;
}
.el-main {
  padding: 0 !important;
  background-color: #EAEAEA;
}
</style>
