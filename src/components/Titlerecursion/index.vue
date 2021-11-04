<template>
  <div class="index-container">
    <ul>
      <li v-for="(item, index) in list" :key="index" >
        <span @click="headclick(item)" :class="{ active: item.isSelect }">{{ item.name }}</span><Title :list="item.children" @select="headclick"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    headclick(item) {
      this.$emit("select", item);
    },
  },
};
</script>

<style scoped lang="less">
.active {
  color: pink;
}
</style>