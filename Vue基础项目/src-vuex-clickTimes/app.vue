<template>
  <div>
    <p>click {{ this.$store.state.count }} times,count is {{ oddOrEven }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">incremntAsync</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    // oddOrEven() {
    //   return this.$store.getters.oddOrEven;
    // },
    ...mapState(["count"]), //mapState() 返回值:{count(){return this.$store.state['count']}}
    ...mapGetters({ oddOrEven: "oddOrEven2" }), //mapGetters() 返回值:{oddOrEven(){return this.$store.state['oddOrEven2']}}
  },
  methods: {
    // increment() {
    //   this.$store.dispatch("increment");
    // },
    // decrement() {
    //   this.$store.dispatch("decrement");
    // },
    // incrementIfOdd() {
    //   this.$store.dispatch("incrementIfOdd");
    // },
    // incremntAsync() {
    //   this.$store.dispatch("incremntAsync");
    // },
    ...mapActions([
      "increment",
      "decrement",
      "incrementIfOdd",
      "incrementAsync",
    ]),
  },
};
</script><style lang="">
</style>