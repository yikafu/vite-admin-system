<template>
  <template v-if="!isLogin">
    <PLogin />
  </template>

  <template v-else>
    <el-container>
      <el-aside width="200px">
        <PAside />
      </el-aside>
      <el-container>
        <el-header><PHeader /></el-header>
        <div class="tag-area"><PTag /></div>
        <el-main>
          <PMain />
        </el-main>
      </el-container>
    </el-container>
  </template>
</template>

<script setup>
import { watch, onMounted, ref } from "vue";
import PHeader from "./components/PHeader.vue";
import PAside from "./components/PAside.vue";
import PMain from "./components/PMain.vue";
import PTag from "./components/PTag.vue";
import PLogin from "./components/PLogin.vue";

import { LoginStore } from "@/store/LoginStore";
const store = LoginStore();
const isLogin = ref(store.isLogin);

</script>

<style>
.el-container {
  height: 100%;
}

.el-header {
  height: 50px;
  background-color: var(--white-color);
}

.el-aside {
  background-color: #1e2732;
  line-height: 200px;
  text-align: center;
}
.tag-area {
  background-color: var(--white-color);
}
.el-main {
  background-color: var(--gary-color);
  color: #333;
}
</style>
