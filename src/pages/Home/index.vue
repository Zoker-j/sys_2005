<template>
  <div class="home-page">
    <el-container>
      
      <!-- 侧边栏 -->
      <el-aside ref="elaside" width="200px">
        <div class="logo">
          <h1 style="font-size:30px">英雄联盟</h1>
        </div>
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          background-color=" rgb(19, 19, 29)"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">管理首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">学员管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">学员项目管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">我的中心</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 顶部栏 -->
        <el-header>
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6"
              ><div class="grid-content">
                <el-radio-group
                  v-model="isCollapse"
                  style="margin-bottom: 20px;"
                  
                >
                  <el-radio-button :label="false" @click.native="open">展开</el-radio-button>
                  <el-radio-button :label="true"  @click.native="close">收起</el-radio-button>
                </el-radio-group>
              </div></el-col
            >
            <el-col :span="6"
              ><div class="grid-content">
                  <h1 style="font-size:30px;color:rgb(40, 175, 233)">League of Legends</h1>
                </div
            ></el-col>
            <el-col :span="6"
              ><div class="grid-content">
                  <div class="user">
                    <el-avatar :size="40" src=""></el-avatar>
                    <span>欢迎你:</span>
                    <span class="nickname">{{userInfo.nickname}}</span>
                    <button class="quit" @click="quit">退</button>
                  </div>
              </div
            ></el-col>
          </el-row>
        </el-header>
        <!-- 主体 -->
        <el-main></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import {mapState} from "vuex"
import { getLoginLog } from "@/api"
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    handleOpen() {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    open(){
        this.$refs.elaside.$el.style="width:200px;transition:all .3s cubic-bezier(.645,.045,.355,1);"
    },
    close(){
        this.$refs.elaside.$el.style="width:64px;transition:all .3s cubic-bezier(.645,.045,.355,1);"  
    },
    quit(){
      //退出登入
        //1.清除token和userInfo
        //2.跳转到登入页
        localStorage.removeItem("qf-token")
        localStorage.removeItem("qf-userInfo")
        this.$router.push("/login")
    }
  }
};
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.el-col .grid-content .user{
  display: flex;
  color: #fff;
  line-height: 40px;
  justify-content: space-around;
  align-items: center;
}
/* 退出按钮 */
.quit{
  height: 35px;
  width: 35px;
  border-radius: 100%;
  background-color:  rgb(19, 19, 29);
  border: none;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  background-color:  rgb(19, 19, 29);
}

.el-aside {
  background-color:  rgb(19, 19, 29);
  color: #333;
  text-align: center;
  line-height: 200px;
  border-right: 1px solid  rgb(19, 19, 29);
}

.el-main {
  background: url("../../assets/imgs/bg.jpg") no-repeat;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-row{
  height: 100%;
}
.el-col{
  height: 100%;
}
.row-bg{
  background-color:  rgb(19, 19, 29);
}
.logo{
  width: 100%;
  background-color:  rgb(19, 19, 29);
}
.logo h1{
  height: 80px;
  width: 100%;
  line-height:80px;
  font-size:25px;
  color:rgb(40, 175, 233)
}

.el-menu-vertical-demo:not(.el-menu--collapse){
  width: 200px;
  min-height: 500px
}
.el-menu-item:focus,.el-menu-item:hover{
  background-color: aquamarine!important;
}

.el-col h1{
  /* color:!important; */
  line-height: 40px;
}

</style>