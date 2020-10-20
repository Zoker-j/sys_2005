import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

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
