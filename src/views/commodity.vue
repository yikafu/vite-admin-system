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
  <el-dialog :title="dialogState.title" v-model="dialogState.visible">
    <el-form
      :model="form.data"
      label-width="100px"
      :rules="rules"
      ref="ruleFormRef"
    >
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="form.data.name" />
      </el-form-item>
      <el-form-item label="商品价格" prop="price">
        <el-input v-model.number="form.data.price" />
      </el-form-item>
      <el-form-item label="商品库存" prop="stock">
        <el-input v-model.number="form.data.stock" />
      </el-form-item>
      <el-form-item label="商品ID" prop="id">
        <el-input v-model="form.data.id" />
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button
        type="primary"
        v-if="dialogState.title == '添加商品'"
        @click="handleAdd(ruleFormRef)"
        >确 定</el-button
      >
      <el-button type="primary" v-else @click="handleConfirm(ruleFormRef)"
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

// data是呈现在页面上的总数据（分页后的数据）
const data = ref();
// 分页器的状态
const state = reactive({
  index: 1,
  limit: 10,
  total: commodityData.length,
});
// 弹窗的状态 title和visible
const dialogState = ref({
  title: "",
  visible: false,
});
//
const form = reactive({
  index: 0,
  data: {},
});
const search = ref("");
const select = ref("name");

const ruleFormRef = ref(null);
const validateNumber = (rule, value, callback) => {
  if (value < 0) {
    callback(new Error("仅可输入不小于0的数字"));
  } else {
    callback();
  }
};
const rules = {
  name: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
  price: [
    { required: true, message: "请输入商品价格", trigger: "blur" },
    { validator: validateNumber, trigger: "blur", type: "number" },
  ],
  stock: [
    { required: true, message: "请输入商品库存", trigger: "blur" },
    { validator: validateNumber, trigger: "blur", type: "number" },
  ],
  id: [{ required: true, message: "请输入商品ID", trigger: "blur" }],
};
onMounted(() => {
  handleSizeChange(1);
  // 监听dialogVisible.visible的变化, 当dialogVisible.visible为false时, 清空form.data
  watch(dialogState.value.visible, (newVal) => {
    if (!newVal) {
      form.data = {};
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
  dialogState.value.title = "添加商品";
  dialogState.value.visible = true;
};
// 确定添加
const handleAdd = () => {
  if (!ruleFormRef.value) return;
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      data.value.unshift({ ...form.data }); // 首行插入
      dialogState.value.visible = false;
    } else {
      console.log("error submit!");
    }
  });
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
  dialogState.value.title = "编辑商品";
  dialogState.value.visible = true;
  form.index = index;
  form.data = { ...row };
};
// 删除按钮
const handleDelete = (index, row) => {
  console.log(index, row);
  data.value.splice(index, 1);
};
// 取消按钮
const handleCancel = () => {
  dialogState.value.visible = false;
};
// 确认修改
const handleConfirm = () => {
  if (!ruleFormRef.value) return;
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      data.value[form.index] = { ...form.data };
      dialogState.value.visible = false;
    } else {
      console.log("error submit!");
    }
  });
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
