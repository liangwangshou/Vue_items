<template>
  <div>
    <ul>
      <li v-for="(oneNews, index) in newsArr" :key="index">{{ oneNews }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsArr: ["001News", "002News", "003News"],
    };
  },
};
</script>
<style lang="">
</style>