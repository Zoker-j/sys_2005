import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [

  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../pages/Login")
  },
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../pages/Home")
  }
];

const router = new VueRouter({
  routes
});

export default router;
