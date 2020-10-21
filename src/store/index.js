import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//获取localstorage中userInfo 没有就创建一个空集合
let userInfo=JSON.parse(localStorage.getItem("qf-userInfo"))||{}

export default new Vuex.Store({
  state: {
      // userInfo:userInfo
      userInfo,
  },
  mutations: {
    //更改userInfo
    SET_USERINFO(state,payload){
      state.userInfo=payload
    }
  },
  actions: {},
  modules: {}
});
