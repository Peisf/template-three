import type { AppRouteModule, AppRouteRecordRaw } from '@/router/types'
import { t } from '@/hooks/web/useI18n'
import { PageEnum } from '@/enums/pageEnum'
import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from '@/router/routes/basic'

// 引入模块下所有文件
const modules = import.meta.glob('./modules/**/*.ts', { eager: true })
const routeModuleList: AppRouteModule[] = []

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  // @ts-ignore
  const mod = modules[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

export const asyncRoutes = [...routeModuleList]
// 根路由
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root'
  }
}
export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/sys/login/Login.vue'),
  meta: {
    title: t('routes.basic.login')
  }
}

// 基本路由
export const basicRoutes = [
  LoginRoute,
  RootRoute,
  ...asyncRoutes,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE
]
