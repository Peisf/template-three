import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { App } from 'vue'
import { basicRoutes } from '@/router/routes'

export const router = createRouter({
  history: createWebHistory(),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  // 是否禁止尾部斜杠， 默认为false
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router)
}
