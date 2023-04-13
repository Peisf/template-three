import { AppRouteModule } from '@/router/types'
import { LAYOUT } from '@/router/constant'
import { t } from '@/hooks/web/useI18n'

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/home',
  meta: {
    orderNo: 10,
    title: t('routes.dashboard.dashboard')
  },
  children: [
    {
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home.vue'),
      meta: {
        title: 'Home'
      }
    },
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('@/views/dashboard/analysis/index.vue'),
      meta: {
        title: t('routes.dashboard.analysis')
      }
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('@/views/dashboard/workbench/index.vue'),
      meta: {
        title: ''
      }
    },
    {
      path: 'lc',
      name: 'LC',
      component: () => import('@/views/dashboard/lc/index.vue'),
      meta: {
        title: ''
      }
    },
    {
      path: 'jdxx',
      name: 'JDXX',
      component: () => import('@/views/dashboard/jdxx/index.vue'),
      meta: {
        title: ''
      }
    }
  ]
}

export default dashboard
