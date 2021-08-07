import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/login"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/search/search"),
    meta: {
      needAuthorize: true,
    },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
