<template>
  <div>
    <h2>About 组件内容</h2>

    <input type="text" />
    <p>{{ msg }}</p>
  </div>
</template>
<script>
export default {
  props: {
    msg: String,
  },
};
</script>
<style lang="">
</style>