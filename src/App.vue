<template>
  <el-container>
    <el-aside width="200px">
      <PAside />
    </el-aside>
    <el-container>
      <el-header><PHeader /></el-header>
      <el-main>
        <PMain />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import PHeader from "./components/PHeader.vue";
import PAside from "./components/PAside.vue";
import PMain from "./components/PMain.vue";
</script>

<style>
.el-container {
  height: 100%;
}

.el-header {
  height:50px;
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  line-height: 200px;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  text-align: center;
}
</style>
