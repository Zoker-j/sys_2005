<template>
  <div class="home-page">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200">
        <div class="logo">
          <h1 style="font-size:30px">英雄联盟</h1>
        </div>
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          background-color=" rgba(19, 19, 29,0.5)"
          text-color="aliceblue"
          active-text-color="#ffd04b"
          :router="true"
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
        <el-header style="">
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="1"
              ><div class="grid-content">
                <i
                  ref="btn"
                  class="iconfont icon-Group-"
                  @click="(isCollapse = !isCollapse), change()"
                ></i></div
            ></el-col>
            <el-col :span="6"
              ><div class="grid-content">
                <h1 style="font-size:30px;color:rgb(40, 175, 233);">
                  League of Legends
                </h1>
              </div></el-col
            >
            <el-col :span="7"
              ><div class="grid-content">
                <div class="user">
                  <el-avatar
                    :size="60"
                    src=""
                    style="background-color:#fff"
                  ></el-avatar>
                  <span style="margin-left:50px;margin-right:10px"
                    >欢迎你 :</span
                  >
                  <span class="nickname">{{ userInfo.nickname }}</span>
                  <button class="quit" @click="quit">退</button>
                </div>
              </div></el-col
            >
          </el-row>
        </el-header>
        <!-- 主体 -->
        <el-main>
          <div class="nav">
            <el-carousel :interval="4000" type="card" height="282px">
              <el-carousel-item v-for="item in vedio" :key="item">
                <h3 class="medium">
                  <video
                    class="ve"
                    :src="item"
                    width="500px"
                    controls
                    preload="auto"
                    loop="loop"
                  ></video>
                </h3>
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- <video
                class="ve"
                src="../../assets/video/bg_video3.mp4"
                width="500px"
                controls
                preload="auto"
                loop="loop"
              ></video> -->

          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { getLoginLog } from "@/api";
export default {
  data() {
    return {
      isCollapse: true,
      vedio: [
        "/media/bg_video.419afe75.mp4",
        "/media/bg_video1.01a41719.mp4",
        "/media/bg_video3.4df4cac9.mp4"
      ]
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  mounted() {
    getLoginLog().then(res => {
      console.log("登录日志", res);
    });
  },
  methods: {
    change() {
      if (!this.isCollapse) {
        this.$refs.btn.className = "iconfont icon-shouqi";
      } else {
        this.$refs.btn.className = "iconfont icon-Group-";
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    quit() {
      //退出登入
      //1.清除token和userInfo
      localStorage.removeItem("qf-token");
      localStorage.removeItem("qf-userInfo");
      //2.跳转到登入页
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
.nav{
  width: 1002px;
  height: 500px;
  overflow: hidden;
  margin: 0 auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.home-page {
  background: url("../../assets/imgs/bg.jpg") no-repeat;
  /* background: url("../../assets/video/bg_video3.mp4"); */
}
.el-main {
  background-color: rgba(126, 126, 139, 0.5);
}
.icon-shouqi,
.icon-Group- {
  font-size: 30px;
  color: aliceblue;
  line-height: 60px;
  cursor: pointer;
}
.el-row {
  margin-bottom: 20px;
}
.row-bg {
  padding: 0 !important;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.el-col .grid-content .user {
  display: flex;
  color: #fff;
  line-height: 60px;
  align-items: center;

  /* justify-content: left; */
}
/* 退出按钮 */
.quit {
  height: 40px;
  width: 40px;
  font-size: 20px;
  border-radius: 100%;
  color: #fff;
  background-image: linear-gradient(90deg, red, blue);
  border: none;
  cursor: pointer;
  position: absolute;
  right: 100px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  /* background-color:  rgb(19, 19, 29); */
  background-color: transparent;
}

.el-aside {
  /* background-color:  rgba(19, 19, 29,0.5); */
  background-color: transparent;
  color: #333;
  text-align: center;
  line-height: 200px;
}
/* main */
.el-main {
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
  min-height: 500px;
}
.el-row {
  height: 100%;
}
.el-col {
  height: 100%;
}
/* header中 子元素 */
.row-bg {
  background-color: rgba(19, 19, 29, 0.5);
}
.logo {
  width: 100%;
  background-color: rgba(19, 19, 29, 0.5);
}
/* logo */
.logo h1 {
  height: 60px;
  width: 100%;
  line-height: 60px;
  font-size: 25px;
  color: rgb(40, 175, 233);
}

.el-menu-item:focus,
.el-menu-item:hover {
  /* background-color:rgb(28, 37, 112)!important; */
  background-image: linear-gradient(90deg, red, blue);
  /* color:aliceblue!important; */
}
.el-menu {
  border: none;
}
.el-col h1 {
  line-height: 60px;
}
</style>