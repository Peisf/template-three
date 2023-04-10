import { Router } from 'vue-router'

export function setupRouterGuard(router: Router) {
  createPageGuard(router)
}

function createPageGuard(router: Router) {
  const loadedPageMap = new Map<string, boolean>()
  router.beforeEach(async (to) => {
    to.meta.loaded = !!loadedPageMap.get(to.path)
    console.log(to)
    return true
  })

  router.afterEach((to) => {
    loadedPageMap.set(to.path, true)
  })
}
