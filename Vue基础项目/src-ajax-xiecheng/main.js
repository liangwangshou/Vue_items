import Vue from "vue";
import App from "./app.vue";
import VueResource from "vue-resource";
Vue.use(VueResource);
new Vue({
  el: "#app",
  components: {
    App
  },
  template: "<App/>"
});
