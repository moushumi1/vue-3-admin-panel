import { createRouter, createWebHistory } from "vue-router";
import adminRoutes from "./admin.js";
import Home from "../views/Home.vue";

const mainRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

var allRoutes = [];
allRoutes = allRoutes.concat(mainRoutes, adminRoutes);
//var allRoutes = [...mainRoutes, ...employeeRoutes];

const routes = allRoutes;
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  var auth = localStorage.getItem("UserToken");
  if (auth !== null && to.path === "/") {
    next(false);
  } else if (auth === null && to.path === "*") {
    next("/");
  } else {
    next();
  }
});

export default router;
