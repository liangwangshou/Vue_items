import Vue from "vue";
import App from "./app.vue";
import store from "./store";
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  store
});
