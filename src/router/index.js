import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../views/dashboard/index.vue'),
    meta: { title: '仪表盘', icon: 'dashboard' }
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('../views/work/index.vue'),
    meta: { title: '工作台', icon: 'icon-gongneng' }
  },
  {
    path: '/metarial',
    name: 'metarial',
    component: () => import('../views/metarial/index.vue'),
    meta: { title: '素材管理', icon: 'icon-sucaiku' }
  },
  {
    path: '/permissions',
    name: 'permissions',
    meta: { title: '权限设置', icon: 'icon-quanxianshezhi' },
    children: [
      {
        path: 'quanxiang',
        component: () => import('../views/permissions/quanxiang.vue'),
        meta: { title: '权限管理', icon: 'icon-zhanghaoquanxianguanli' }
      },
      {
        path: 'role',
        component: () => import('../views/permissions/role.vue'),
        meta: { title: '角色管理', icon: 'icon-user' }
      }
    ]
  },
  {
    path: '/system',
    name: 'system',
    meta: { title: '系统', icon: 'icon-shezhi' },
    children: [
      {
        path: 'setting',
        component: () => import('../views/system/setting.vue'),
        meta: { title: '系统设置', icon: 'icon-shezhi' }
      },
      {
        path: 'log',
        component: () => import('../views/system/log.vue'),
        meta: { title: '系统日志', icon: 'icon-rizhi' }
      }
    ]
  },{
    path: '/about',
    name: 'about',
    component: () => import('../views/about/index.vue'),
    meta: { title: '关于', icon: 'icon-guanyu' }
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
