<template>
  <el-tag
    v-for="tag in tags"
    disable-transitions="true"
    :key="tag.name"
    :effect="tag.name === route.meta.title ? 'dark' : 'plain'"
    :closable="tag.name !== '首页'"
    :type="tag.type"
    @click="handleClick(tag)"
    @close="handleClose(tag)"
  >
    {{ tag.name }}
  </el-tag>
</template>

<script setup>
import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTagdataStore } from "../store/useTagdata";

const route = useRoute();
const router = useRouter();
// 使用pinia
const store = useTagdataStore();
const tags = store.tags;

// 监听路由变化
watch(
  () => route.path,
  (path) => {
    const tag = tags.find((tag) => tag.name === route.meta.title);
    if (!tag) {
      store.setTagdata({
        name: route.meta.title,
        path: path,
      });
    }
  }
);
// 删除标签
function handleClose(e) {
  let index = tags.indexOf(e);
  tags.splice(index, 1);
  // 判断是否跳转路由
  if (e.path == route.path) {
    router.push(tags[index - 1].path);
  } else {
    return;
  }
}

// 点击标签跳转路由
function handleClick(e) {
  router.push(e.path);
}
</script>

<style scoped>
.el-tag {
  margin: 10px 5px;
}
.el-tag:hover {
  cursor: pointer;
}
</style>
