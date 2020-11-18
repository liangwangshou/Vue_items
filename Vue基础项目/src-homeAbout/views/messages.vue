<template>
  <div>
    <ul>
      <li v-for="msg in messagesArr" :key="msg.id">
        <router-link :to="`/home/messages/details/${msg.id}`">{{
          msg.title
        }}</router-link>
        <button @click="pushShow(`/home/messages/details/${msg.id}`)">
          push查看
        </button>
        <button @click="replaceShow(msg.id)">replace查看</button>
      </li>
    </ul>
    <div>
      <button @click="$router.back()">回退</button>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    pushShow(url) {
      this.$router.push(url);
    },
    replaceShow(id) {
      this.$router.replace(`/home/messages/details/${id}`);
    },
  },
  data() {
    return {
      messagesArr: [],
    };
  },
  mounted() {
    setTimeout(() => {
      const messages = [
        {
          id: 4,
          title: "message004",
        },
        {
          id: 5,
          title: "message005",
        },
        {
          id: 6,
          title: "message006",
        },
      ];
      this.messagesArr = messages;
    }, 500);
  },
};
</script>
<style lang="">
</style>