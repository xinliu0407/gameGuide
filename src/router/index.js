/*
 * @description:
 * @Author: xinliu
 * @Date: 2022-12-26 10:33:07
 * @LastEditors: xinliu
 * @LastEditTime: 2022-12-26 11:53:40
 */
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
