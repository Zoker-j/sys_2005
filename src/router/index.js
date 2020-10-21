import Vue from "vue";
import VueRouter from "vue-router";

import allRoutes from "./allRoutes"
Vue.use(VueRouter);

const routes = [

  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../pages/Login")
  },
  {
     path: '*', component: ()=>import(/* webpackChunkName:"page404" */ "../pages/Page404") 
  },
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../pages/Home"),
    children:[]
  }

];

const router = new VueRouter({
  routes
});

export default router;
