import Vue from "vue";
import Router from "vue-router";
import Home from "./views/index.vue";
import Transaction from "./views/Transaction";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home,
    },

    {
      path: "/transactions/:id",
      component: Transaction,
    },
  ],
});

export default router;
