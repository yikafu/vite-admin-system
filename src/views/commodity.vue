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
              <el-option label="商品名称" value="name" />
              <el-option label="商品价格" value="price" />
              <el-option label="商品ID" value="id" />
            </el-select>
          </template>
          <template #append>
            <el-button :icon="Search" @click="handleSearch()" />
          </template>
        </el-input>
      </div>
    </el-row>
    <div class="commodity-table">
      <el-table :data="data" :table-layout="auto" height="100%" stripe>
        <el-table-column type="index" label="序号" width="70" />
        <el-table-column prop="name" label="商品名称" />
        <el-table-column prop="price" label="商品价格" />
        <el-table-column prop="stock" label="商品库存" />
        <el-table-column prop="id" label="商品ID" />
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
      <el-form-item label="商品名称">
        <el-input v-model="from.data.name" />
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="from.data.price" />
      </el-form-item>
      <el-form-item label="商品库存">
        <el-input v-model="from.data.stock" />
      </el-form-item>
      <el-form-item label="商品ID">
        <el-input v-model="from.data.id" />
      </el-form-item>
      <el-form-item label="数据位置" v-if="dialogTitle == '添加商品'">
        <el-radio-group v-model="radio">
          <el-radio label="1">首行添加</el-radio>
          <el-radio label="2">尾行添加</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button
        type="primary"
        v-if="dialogTitle == '添加商品'"
        @click="handleAdd()"
        >确 定</el-button
      >
      <el-button type="primary" v-else @click="handleConfirm()"
        >确 定</el-button
      >
      <el-button @click="handleCancel()">取 消</el-button>
    </div>
  </el-dialog>
  <!-- 分页器 -->
  <el-pagination
    background
    layout="prev,pager,next"
    :total="state.total"
    @current-change="handleSizeChange"
    :page-size="10"
  />
</template>

<script setup>
import commodityData from "@/data/commodity.data.js";
import { onMounted, reactive, ref, watch } from "vue";
import { Plus, Search, Delete } from "@element-plus/icons-vue";

const data = ref();
const state = reactive({
  index: 1,
  limit: 10,
  total: commodityData.length,
});

const dialogTitle = ref("编辑商品");
const dialogVisible = ref(false);
const from = reactive({
  index: 0,
  data: {},
});
const search = ref("");
const select = ref("name");
const radio = ref("1");

onMounted(() => {
  handleSizeChange(1);
  // 监听dialogVisible的变化, 当dialogVisible为false时, 清空from.data
  watch(dialogVisible, (newVal) => {
    if (!newVal) {
      from.data = {};
    }
  });
});

// 页码变化
const handleSizeChange = (val) => {
  data.value = commodityData.slice((val - 1) * state.limit, val * state.limit);
};

// 展示添加窗口
const showAdd = () => {
  console.log("add");
  dialogTitle.value = "添加商品";
  dialogVisible.value = true;
};
// 确定添加
const handleAdd = () => {
  // 判断插入数据方式
  if (radio.value == "1") {
    data.value.unshift({ ...from.data }); // 首行插入
  } else if (radio.value == "2") {
    data.value.push({ ...from.data }); // 尾行插入
  }
  dialogVisible.value = false;
};
// 搜索函数
const handleSearch = () => {
  const key = select.value;
  const searchString = search.value.toString();
  // 使用filter方法过滤源数据
  data.value = commodityData.filter((item) => {
    return item[key].toString().includes(searchString);
  });
};
// 编辑窗口
const handleEdit = (index, row) => {
  dialogTitle.value = "编辑商品";
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
.el-card {
  height: 90%;
  max-height: 90%;
}

.commodity-table {
  width: 100%;
  height: 100%;
}

.el-row {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
</style>
