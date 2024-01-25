<template>
  <div class="dropdown">
    <el-dropdown>
      <span class="el-dropdown-link">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
</script>

<style scoped>
.dropdown{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.el-dropdown-link:focus-visible{
  outline: none;
}
</style>
