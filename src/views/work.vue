<template>
  <el-row>
    <el-card id="hello-card">
      <div class="home">
        <div id="hello-title">{{ greeting }}，管理员，请开始今日的工作吧</div>
        <div class="weather">
          <p>今日天气：晴</p>
          <p>今日温度：20℃ - 25℃</p>
        </div>
      </div>
    </el-card>
  </el-row>
  <el-row :gutter="15">
    <el-col :span="15">
      <el-card id="work-card">
        <el-table :data="shopData" height="280">
          <el-table-column prop="name" label="商品名称" />
          <el-table-column prop="d-sale" label="今日销售" sortable />
          <el-table-column prop="m-sale" label="本月销售" sortable />
          <el-table-column prop="all-sale" label="总销售" sortable />
        </el-table>
      </el-card>
    </el-col>
    <!-- 待办 -->
    <el-col :span="9">
      <el-card id="work-card">
        <div id="title">待办事项</div>
        <div class="demo-progress">
          <el-row v-for="(item, key) in progressList" :key="key">
            <span>{{ item.progress }}</span>
            <el-tooltip
              effect="dark"
              :content="'剩余' + item.count + '个未完成'"
              placement="left-end"
            >
              <el-progress
                :percentage="item.percentage"
                :status="setStatus(item.percentage)"
              ></el-progress>
            </el-tooltip>
          </el-row>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { onMounted, ref } from "vue";
import shopData from "@/data/shop.data.js";

const date = new Date();
const hours = date.getHours();
const greeting = ref("");
const progressList = [
  {
    progress: "待审核商品",
    percentage: 50,
    count: 10,
  },
  {
    progress: "待发货商品",
    percentage: 80,
    count: 20,
  },
  {
    progress: "待退款商品",
    percentage: 20,
    count: 5,
  },
  {
    progress: "待处理投诉",
    percentage: 90,
    count: 2,
  },
  {
    progress: "数据分析",
    percentage: 100,
    count: 0,
  },
  {
    progress: "系统维护",
    percentage: 80,
    count: 12,
  },
];
onMounted(() => {
  getGreeting();
});

const setStatus = (val) => {
  if (val < 50) {
    return "warning";
  } else if (val == 100) {
    return "success";
  }
};

function getGreeting() {
  if (hours < 12) {
    greeting.value = "上午好";
  } else if (hours < 18) {
    greeting.value = "下午好";
  } else {
    greeting.value = "晚上好";
  }
}
</script>

<style scoped>
#hello-card {
  width: 100%;
  height: 16rem;
}
#work-card {
  width: 100%;
  height: 20rem;
}
.el-row {
  margin-bottom: 10px;
}
.el-col {
  border-radius: 4px;
}
.home {
  height: 100%;
  padding: 20px;
}
#hello-title {
  font-size: 24px;
  margin-bottom: 20px;
}
#title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
  margin-bottom: 10px;
}
.weather {
  font-size: 16px;
  color: var(--gray-color);
}
.demo-progress {
  padding: 10px 15px;
}
.demo-progress .el-row {
  justify-content: space-between;
  margin-bottom: 15px;
}
.demo-progress span {
  font-size: 14px;
}
.demo-progress .el-progress--line {
  width: 50%;
}
</style>
