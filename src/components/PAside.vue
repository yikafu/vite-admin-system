<template>
  <!-- 遍历路由 -->
  <el-menu router :default-active="activeroute">
    <template v-for="item in router" :key="item.path">
      <!-- 没有子节点的 -->
      <template v-if="!item.children && item.isshow != false">
        <el-menu-item :index="item.path">
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span id="aside-hidden">{{ item.meta.title }}</span>
        </el-menu-item>
      </template>
      <!-- 有子节点的 -->
      <template v-else-if="item.children">
        <el-sub-menu :index="item.name">
          <template #title>
            <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
            <span id="aside-hidden">{{ item.meta.title }}</span>
          </template>
          <el-menu-item-group v-for="child in item.children" :key="child.path">
            <el-menu-item :index="child.path">
              <el-icon>
                <component :is="child.meta.icon"></component>
              </el-icon>
              <span id="aside-hidden">{{ child.meta.title }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </template>
    </template>
  </el-menu>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
// 获取所有路由
const router = useRouter().options.routes;
const route = useRoute();
const activeroute = ref();
onMounted(() => {
  watch(route, () => {
    activeroute.value = route.path;
  });
});
</script>

<style>
.el-menu,
.el-sub-menu,
.el-menu-item-group,
.el-menu-item {
  color: var(--light-color);
  background-color: var(--dark-color);
}
.el-sub-menu__title {
  color: var(--light-color);
}

.el-menu-item:hover {
  background-color: var(--primary-color);
  color: var(--light-color);
}
.el-sub-menu__title:hover {
  background-color: var(--primary-color);
  color: var(--light-color);
}

@media (max-width: 1200px) {
  #aside-hidden {
    display: none;
  }
}

@media (max-width: 900px) {
  #aside-hidden {
    display: inline;
  }
}
</style>
