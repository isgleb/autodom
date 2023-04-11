import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MasonryBlock from "../components/MasonryBlock.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: MasonryBlock,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
