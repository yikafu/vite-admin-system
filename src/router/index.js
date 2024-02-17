import { createRouter, createWebHashHistory } from "vue-router";
const others = [
  {
    path: "/center",
    name: "center",
    isshow: false,
    component: () => import("views/Center.vue"),
    meta: { title: "个人中心" },
  },
];


const routes = [
  {
    path: "/",
    name: "work",
    component: () => import("views/Work.vue"),
    meta: { title: "首页", icon: "Suitcase" },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("views/Dashboard.vue"),
    meta: { title: "仪表盘", icon: "DataAnalysis" },
  },
  {
    path: "/commodity",
    name: "commodity",
    component: () => import("views/Commodity.vue"),
    meta: { title: "商品管理", icon: "Goods" },
  },
  {
    path: "/userlist",
    name: "userlist",
    component: () => import("views/UserList.vue"),
    meta: { title: "用户管理", icon: "User" },
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("views/Setting.vue"),
    meta: { title: "系统设置", icon: "Tools" },
  },
  {
    path: "/more",
    name: "more",
    meta: { title: "更多", icon: "More" },
    children: [
      {
        path: "/log",
        name: "log",
        component: () => import("views/Log.vue"),
        meta: { title: "系统日志", icon: "Document" },
      },
      {
        path: "/about",
        name: "about",
        component: () => import("views/About.vue"),
        meta: { title: "关于", icon: "InfoFilled" },
      },
    ],
  },
  ...others,
];


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
