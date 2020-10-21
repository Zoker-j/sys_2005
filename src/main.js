import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles/base.css";
import "@/assets/styles/el-reset.css";

import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

import './assets/iconfont/iconfont.css'

// import "./utils/recursionRouter"
Vue.config.productionTip = false;

Vue.use(ElementUI);

//路由前置钩子(导航守卫)
//通过查询导航栏中地址，防止用户随便输入路径访问
// router.beforeEach((to,from,next)=>{
//     //console.log("to---",to);//想要去的地方
//     //console.log("from---",from);//从哪里来
//   //判断localstorage中是否有token
//   let token=localStorage.getItem("qf-token")
//   if(token){//有token放行
//     next()//放行
//   }else{//没有token
//     if(to.path==="/login"){//如果是登录页面 放行
//       next()
//     }else{//访问的不是登录页 跳转到登录页
//       next({path:"/login"})
//     }
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
