<template>
  <div class="login-page">
    <div class="login">
      <h1>Z,j的系统</h1>
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        label-width="100px"
        class="demo-loginForm"
      >
        <el-form-item label="QQ号" prop="username">
          <el-input
            type="text"
            v-model="loginForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" ref="btn" @click="submitForm('loginForm')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <video
      src="../../assets/video/bg_video1.mp4"
      autoplay="autoplay"
      preload="auto"
      loop="loop"
      poster="../../assets/imgs/login.png"
    ></video>
  </div>
</template>
<script>
export default {
  data() {
    // jsDoc
    /**
     * @param {Object} rule 就是一个表单验证对象
     * @param {String} value 输入值
     * @param {Function} callback 校验通过传参
     */
    var validateUsername = (rule, value, callback) => {
      // var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
      // if(!uPattern.test(value)){
      //   callback("4到16位（字母，数字，下划线，减号）")
      // }else{
      //   callback()
      // }
      if (!value) {
        callback("请输入用户名");
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }]
      }
    };
  },
  mounted() {
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //本地校验通过
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  }
};
</script>
<style scoped>
.login-page {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
/* 登录圆框 */
.login-page .login {
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 24%;
  left: 58%;
  width: 470px;
  height: 470px;
  border-radius: 100%;
  z-index: 9;
}
/* 标题 */
.login-page .login h1 {
  color: aliceblue;
  text-align: center;
  margin-top: 100px;
}
.login-page .login:first-letter {
  font-size: 50px;
  color: gold;
}

/* 表单 */
.el-form {
  width: 400px;
  margin-top: 50px;
  text-align: center;
}

/* 提交按钮 */
.el-button {
  color: aliceblue;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: gold;
}
.el-button:first-letter {
  font-size: 35px;
}
</style>