import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(HomeView as unknown as string),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/digitalclock",
      name: "digitalclock",
      component: () => import("../views/DigitalClock.vue"),
    },
    {
      path: "/radicalmenu",
      name: "radicalmenu",
      component: () => import("../views/RadicalMenu.vue"),
    },
  ],
});

export default router;
