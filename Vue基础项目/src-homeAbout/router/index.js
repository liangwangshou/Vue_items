import Vue from "vue";
import VueRouter from "vue-router";

import About from "../views/about.vue";
import Home from "../views/home.vue";
import News from "../views/news.vue";
import Messages from "../views/messages.vue";
import Details from "../views/messagesDetails.vue";
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "about"
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "/home/news",
          component: News
        },
        {
          path: "/home/messages",
          component: Messages,
          children: [{ path: "/home/messages/details/:id", component: Details }]
        },
        {
          path: "/",
          redirect: "/home/news"
        }
      ]
    }
  ]
});
