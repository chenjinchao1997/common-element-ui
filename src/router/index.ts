import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/table",
    name: "Table",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Table.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
