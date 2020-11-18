<template>
  <div>
    <div>{{ msgDetails.id }}</div>
    <div>{{ msgDetails.title }}</div>
    <div>{{ msgDetails.content }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msgDetails: {},
    };
  },
  mounted() {
    setTimeout(() => {
      const detailsMsg = [
        {
          id: 4,
          title: "message004",
          content: "content444444",
        },
        {
          id: 5,
          title: "message005",
          content: "content555555",
        },
        {
          id: 6,
          title: "message004",
          content: "content666666",
        },
      ];
      this.detailsMsg = detailsMsg;
      const paramsId = this.$route.params.id * 1;
      this.msgDetails = detailsMsg.find((detail) => {
        return detail.id === paramsId;
      });
    }, 500);
  },
  watch: {
    $route: function (value) {
      //路由发生了变化（params发生了变化）
      const paramsId = this.$route.params.id * 1;
      this.msgDetails = this.detailsMsg.find(
        (detail) => detail.id === paramsId
      );
    },
  },
};
</script>
<style lang="">
</style>