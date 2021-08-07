import { createRouter, createWebHistory } from "vue-router";
import { user } from "@/service/userService";

const routes = [
  {
    path: "/",
    redirect: { name: "search" },
  },
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
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  const userAuthenticated = !!user.getToken();
  const isNeedAuthorization = !!to.meta.needAuthorize;
  if (isNeedAuthorization) {
    if (!userAuthenticated) {
      return "/login";
    }
  }
  return true;
});

export default router;
