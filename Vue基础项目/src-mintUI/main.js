import Vue from "vue";
import App from "./app.vue";
import { Button } from "mint-ui";
Vue.component(Button.name, Button);
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
