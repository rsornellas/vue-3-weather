import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

export const routerHistory = createWebHistory();
export const router = createRouter({
  history: routerHistory,
  routes: [{ path: "/", component: Home }]
});
