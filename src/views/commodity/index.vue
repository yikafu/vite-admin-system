<template>
  <div class="commodity-table">
    <el-table :data="commoditylist" stripe height="94%">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="id" label="ID" width="150" />
      <el-table-column prop="name" label="Name" width="150"/>
      <el-table-column prop="price" label="Price" width="150"/>
      <el-table-column prop="product" label="Product" width="150"/>
      <el-table-column prop="quantity" label="Quantity" width="150"/>
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="small" placeholder="Type to search" />
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
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
</template>

<script setup>
import data from "../../data/commodity.js";
import axios from "axios";
import { reactive, onBeforeMount,computed, ref} from "vue";

const commoditylist = data;

const search = ref('')

const handleEdit = (index, row) => {
  console.log(index, row)
}
const handleDelete = (index, row) => {
  console.log(index, row)
}

</script>

<style scoped>
.commodity-table {
  width: 100%;
  height: 100%;
}
</style>
