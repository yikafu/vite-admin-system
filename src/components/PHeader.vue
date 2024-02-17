<template>
  <div class="dropdown">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          id="avatar"
          shape="square"
          :src="userData.avatar"
        />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <router-link to="/center">
            <el-dropdown-item>个人中心</el-dropdown-item>
          </router-link>
          <el-dropdown-item @click="handleExit()">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { LoginStore } from "@/store/LoginStore";
import { ElMessage } from "element-plus";
import userData from "@/data/user.data.js";

const store = LoginStore();
const handleExit = () => {
  ElMessage.error("退出登录");
  setTimeout(() => {
    store.setLogin(false);
    window.location.reload();
  }, 1000);
};
</script>

<style scoped>
.dropdown {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.el-dropdown-link:focus-visible {
  outline: none;
}
</style>
