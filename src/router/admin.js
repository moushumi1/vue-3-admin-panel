import Admin from "../views/admin/admin-home.vue";


const adminRoutes = [
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];
export default adminRoutes;
