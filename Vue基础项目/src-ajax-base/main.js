import Vue from "vue";
import App from "./app.vue";
import VueResourse from "vue-resource";
Vue.use(VueResourse); //内部会给vm对象和组件对象添加一个属性 $http
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
