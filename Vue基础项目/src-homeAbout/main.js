import Vue from "vue";
import App from "./app.vue";
import router from "./router/index";

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  router: router
});
