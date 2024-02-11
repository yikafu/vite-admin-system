<template>
  <el-card>
    <el-row>
      <!-- 添加按钮 -->
      <el-button type="primary" :icon="Plus" @click="showAdd()" />
      <!-- 搜索区域 -->
      <div class="search-area">
        <el-input
          v-model="search"
          placeholder="Please input"
          class="input-with-select"
        >
          <template #prepend>
            <el-select v-model="select" style="width: 115px">
              <el-option label="姓名" value="name" />
              <el-option label="性别" value="gender" />
              <el-option label="年龄" value="age" />
              <el-option label="地区" value="area" />
              <el-option label="邮箱" value="email" />
            </el-select>
          </template>
          <template #append>
            <el-button :icon="Search" @click="handleSearch()" />
          </template>
        </el-input>
      </div>
    </el-row>
    <div class="role-table">
      <el-table :data="data" height="100%" stripe>
        <el-table-column type="index" label="序号" width="70" />
        <el-table-column prop="name" label="姓名" width="150" />
        <el-table-column prop="gender" label="性别" width="100" />
        <el-table-column prop="age" label="年龄" width="150" />
        <el-table-column prop="area" label="地区" width="180" />
        <el-table-column prop="email" label="邮箱" />
        <el-table-column align="right">
          <template #default="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)"
            >
              Edit
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
  <!-- 编辑页面 -->
  <el-dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form v-model="from" label-width="100px">
      <el-form-item label="姓名">
        <el-input v-model="from.data.name" />
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="from.data.gender" />
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="from.data.age" />
      </el-form-item>
      <el-form-item label="地区">
        <el-input v-model="from.data.area" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="from.data.email" />
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button
        type="primary"
        v-if="dialogTitle == '添加用户'"
        @click="handleAdd()"
        >确 定</el-button
      >
      <el-button type="primary" v-else @click="handleConfirm()"
        >确 定</el-button
      >
      <el-button @click="handleCancel()">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script setup>
import user from "@/data/user.data.js";
import { onMounted, watch, reactive, ref } from "vue";
import { Plus, Search, Delete } from "@element-plus/icons-vue";

const data = ref(user);

const dialogTitle = ref("添加用户");
const dialogVisible = ref(false);
const from = reactive({
  index: 0,
  data: {},
});
const search = ref("");
const select = ref("name");

onMounted(() => {
  // 监听dialogVisible的变化, 当dialogVisible为false时, 清空from.data
  watch(dialogVisible, (newVal) => {
    if (!newVal) {
      from.data = {};
    }
  });
});

// 展示添加窗口
const showAdd = () => {
  console.log("add");
  dialogTitle.value = "添加用户";
  dialogVisible.value = true;
};
// 确定添加
const handleAdd = () => {
  data.value.push({ ...from.data }); // 尾行插入
  dialogVisible.value = false;
};
// 搜索函数
const handleSearch = () => {
  const key = select.value;
  const searchString = search.value.toString();
  // 使用filter方法过滤源数据
  data.value = user.filter((item) => {
    return item[key].toString().includes(searchString);
  });
};
// 编辑窗口
const handleEdit = (index, row) => {
  dialogTitle.value = "编辑";
  dialogVisible.value = true;
  from.index = index;
  from.data = { ...row };
};
// 删除按钮
const handleDelete = (index, row) => {
  console.log(index, row);
  data.value.splice(index, 1);
};
// 取消按钮
const handleCancel = () => {
  dialogVisible.value = false;
};
// 确认修改
const handleConfirm = () => {
  data.value[from.index] = { ...from.data }; // 根据index来更新数据
  dialogVisible.value = false;
};
</script>

<style scoped>
.role-table {
  width: 100%;
  max-height: 90%;
}

.el-row {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
</style>
