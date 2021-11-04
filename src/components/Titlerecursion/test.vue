<template>
  <div class="test-container">
    <Title :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import Title from "./";
export default {
  components: {
    Title,
  },
  data() {
    return {
      list: [
        { name: "A", isSelect: false },
        { name: "B", isSelect: false },
        { name: "C", isSelect: false },
        {
          name: "D",
          isSelect: false,
          children: [
            { name: "A-1", isSelect: false },
            { name: "A-1", isSelect: false },
          ],
        },
      ],
    };
  },
  methods: {
    handleSelect(item) {
      item.isSelect = true;
      console.log(item)
    },
  },
};
</script>

<style>
</style>