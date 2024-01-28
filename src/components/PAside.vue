<template>
  <!-- 遍历路由 -->
  <el-menu router>
    <template v-for="item in router" :key="item.path">
      <!-- 没有子节点的 -->
      <template v-if="!item.children">
        <el-menu-item :index="item.path">
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          {{ item.meta.title }}
        </el-menu-item>
      </template>
      <!-- 有子节点的 -->
      <el-sub-menu v-else-if="item.children.length > 0" :index="item.name">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <el-menu-item-group v-for="child in item.children" :key="child.path">
          <el-menu-item :index="item.path + `/` + child.path">
            <el-icon>
              <component :is="child.meta.icon"></component>
            </el-icon>
            {{ child.meta.title }}
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup>
import { useRouter } from "vue-router";
// 获取所有路由
const router = useRouter().options.routes;
</script>
