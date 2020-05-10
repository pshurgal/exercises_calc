import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/repcount",
    component: () => import("../views/RepCount.vue")
  },
  {
    path: "/onerep",
    component: () => import("../views/OneRepMaximum.vue")
  },
  {
    path: "/targetweight",
    component: () => import("../views/TargetWeight.vue")
  }
];

const router = new VueRouter({
  base: process.env.NODE_ENV === "production" ? "/exercises_calc/" : "/",
  routes
});

export default router;
