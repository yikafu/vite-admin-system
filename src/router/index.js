import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("views/dashboard.vue"),
    meta: { title: "首页", icon: "DataAnalysis" },
  },
  {
    path: "/work",
    name: "work",
    component: () => import("views/work.vue"),
    meta: { title: "工作台", icon: "Suitcase" },
  },
  {
    path: "/metarial",
    name: "metarial",
    component: () => import("views/metarial.vue"),
    meta: { title: "素材管理", icon: "Picture" },
  },
  {
    path: "/commodity",
    name: "commodity",
    component: () => import("views/commodity.vue"),
    meta: { title: "商品管理", icon: "Goods" },
  },
  {
    path: "/user",
    name: "user",
    component: () => import("views/user.vue"),
    meta: { title: "用户管理", icon: "User" },
  },
  {
    path: "/system",
    name: "system",
    meta: { title: "更多", icon: "More" },
    children: [
      {
        path: "setting",
        component: () => import("views/setting.vue"),
        meta: { title: "系统设置", icon: "Tools" },
      },
      {
        path: "log",
        component: () => import("views/log.vue"),
        meta: { title: "系统日志", icon: "Document" },
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: () => import("views/about.vue"),
    meta: { title: "关于", icon: "InfoFilled" },
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
