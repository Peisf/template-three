import { AppRouteModule } from '@/router/types'
import { LAYOUT } from '@/router/constant'

const threes: AppRouteModule = {
  path: '/three',
  name: 'Three',
  component: LAYOUT,
  redirect: '/three/granary',
  meta: {
    orderNo: 10,
    title: '粮仓'
  },
  children: [
    {
      path: 'granary',
      name: 'Granary',
      component: () => import('@/views/three/granary/index.vue'),
      meta: {
        title: 'granary'
      }
    }
  ]
}

export default threes
