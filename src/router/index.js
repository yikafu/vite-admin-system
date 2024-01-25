import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../views/dashboard/index.vue'),
    meta: { title: '仪表盘', icon: 'DataAnalysis' }
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('../views/work/index.vue'),
    meta: { title: '工作台', icon: 'Suitcase' }
  },
  {
    path: '/metarial',
    name: 'metarial',
    component: () => import('../views/metarial/index.vue'),
    meta: { title: '素材管理', icon: 'Picture' }
  },
  {
    path: '/commodity',
    name: 'commodity',
    component: () => import('../views/commodity/index.vue'),
    meta: { title: '商品管理', icon: 'Goods' }
  },
  {
    path: '/permissions',
    name: 'permissions',
    meta: { title: '权限设置', icon: 'SetUp' },
    children: [
      {
        path: 'quanxiang',
        component: () => import('../views/permissions/quanxiang.vue'),
        meta: { title: '权限管理', icon: 'Medal' }
      },
      {
        path: 'role',
        component: () => import('../views/permissions/role.vue'),
        meta: { title: '角色管理', icon: 'User' }
      }
    ]
  },
  {
    path: '/system',
    name: 'system',
    meta: { title: '更多', icon: 'More' },
    children: [
      {
        path: 'setting',
        component: () => import('../views/system/setting.vue'),
        meta: { title: '系统设置', icon: 'Tools' }
      },
      {
        path: 'log',
        component: () => import('../views/system/log.vue'),
        meta: { title: '系统日志', icon: 'Document' }
      }
    ]
  },{
    path: '/about',
    name: 'about',
    component: () => import('../views/about/index.vue'),
    meta: { title: '关于', icon: 'InfoFilled' }
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
