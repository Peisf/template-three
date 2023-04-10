import { AppRouteModule } from '@/router/types'
import { LAYOUT } from '@/router/constant'

const threes: AppRouteModule = {
  path: '/scene',
  name: 'Three',
  component: LAYOUT,
  redirect: '/scene/jdxx',
  meta: {
    orderNo: 10,
    title: '粮仓'
  },
  children: [
    {
      path: 'jdxx',
      name: 'Jdxx',
      component: () => import('@/views/dashboard/jdxx/index.vue'),
      meta: {
        orderNo: 10,
        title: '机电学校'
      }
    }
  ]
}

export default threes
