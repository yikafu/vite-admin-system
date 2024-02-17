<template>
  <!-- 折线图 -->
  <el-row>
    <el-col :span="24">
      <el-card style="height: 350px">
        <div id="echart1"></div>
      </el-card>
    </el-col>
  </el-row>
  <!-- 图表区域 -->
  <el-row :gutter="15">
    <!-- 饼图 -->
    <el-col :span="8">
      <el-card id="ant-echart">
        <div id="title">销售占比</div>
        <div id="echart2"></div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card id="ant-echart">
        <div id="title">转化统计</div>
        <div id="echart3"></div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card id="ant-echart">
        <div id="title">用户统计</div>
        <div id="echart4"></div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { onMounted } from "vue";
import * as echarts from "echarts";
import {
  dashboardChart,
  conversionChart,
  activeUserChart,
} from "@/data/dashboard.data.js";
// 折线图--销售趋势
const lineEchart = () => {
  const option = {
    title: {
      text: "销售趋势",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      x: "right",
      orient: "vertical",
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 5000,
      interval: 1000,
    },
    series: dashboardChart.map((item) => {
      return {
        name: item.name,
        type: "line",
        data: item.data,
      };
    }),
  };
  echarts.init(document.getElementById("echart1")).setOption(option);
};
// 饼图--销售占比
const pieEchart = () => {
  // 数据处理
  const chartdata = dashboardChart.map((item) => {
    return {
      name: item.name,
      value: item.data.reduce((a, b) => a + b),
    };
  });

  const option = {
    tooltip: {
      trigger: "item",
      confine: true,
    },
    legend: {
      show: true,
      icon: "circle",
      itemWidth: 8,
      top: "bottom",
    },
    series: [
      {
        name: "销售统计",
        label: {
          show: true,
          position: "inside",
          formatter: "{d}%",
          fontSize: 10,
          color: "#fff",
        },
        type: "pie",
        center: ["50%", "38%"],
        radius: "70%",
        data: chartdata,
      },
    ],
  };
  echarts.init(document.getElementById("echart2")).setOption(option);
};
//折线面积图--转化统计
const lineAreaEchart = () => {
  const option = {
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, 0.1],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    series: [
      {
        name: "访问量",
        type: "line",
        smooth: true,
        areaStyle: {},
        data: [].concat(conversionChart.map((item) => item.visits)),
      },
      {
        name: "交易量",
        type: "line",
        smooth: true,
        areaStyle: {},
        data: [].concat(conversionChart.map((item) => item.sales)),
      },
      {
        name: "转化率",
        type: "line",
        data: conversionChart.map((item) => {
          // 转化率=交易量/访问量*100 保留2位小数 加上%
          return ((item.sales / item.visits) * 100).toFixed(2) + "%";
        }),
      },
    ],
  };
  echarts.init(document.getElementById("echart3")).setOption(option);
};
// 条形图--用户活跃度
const barEchart = () => {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, 0.1],
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    series: [
      {
        name: "活跃用户",
        type: "bar",
        data: [].concat(activeUserChart.map((item) => item.num)),
      },
      {
        name: "新增用户",
        type: "bar",
        data: [].concat(activeUserChart.map((item) => item.new)),
      },
    ],
  };
  echarts.init(document.getElementById("echart4")).setOption(option);
};

onMounted(() => {
  lineEchart();
  pieEchart();
  lineAreaEchart();
  barEchart();
});
</script>

<style scoped>
.el-row {
  margin-bottom: 10px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
#title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
  margin-bottom: 10px;
}
#echart {
  height: 350px;
}
#echart1 {
  width: 100%;
  height: 350px;
}
#echart2,
#echart3,
#echart4 {
  width: 100%;
  height: 300px;
  margin-right: 10px;
}
</style>
