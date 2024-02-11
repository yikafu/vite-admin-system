<template>
  <el-card class="card">
    <div class="title">
      <h2>登录</h2>
    </div>
    <div class="form-area">
      <el-form :model="form" size="large">
        <el-form-item>
          <el-input
            v-model="form.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="handleClick()"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script setup>
import { reactive } from "vue";
import { ElMessage } from "element-plus";
import { LoginStore } from "@/store/LoginStore";

const userList = {
  admin: "admin",
};

const form = reactive({
  username: "admin",
  password: "admin",
});

const store = LoginStore();

const handleClick = () => {
  //   判断用户是否存在
  if (!userList[form.username]) {
    ElMessage.error("用户不存在");
  } else if (userList[form.username] !== form.password) {
    ElMessage.error("密码错误");
  } else {
    ElMessage.success("登录成功");
    setTimeout(() => {
      store.setLogin(true);
      window.location.reload();
    }, 1000);
  }
};
</script>

<style scoped>
.card {
  width: 500px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}
.title {
  text-align: center;
  margin-bottom: 20px;
}
.form-area {
  width: 80%;
  margin: 10%;
}
.el-from-item {
  margin-bottom: 20px;
}
</style>
