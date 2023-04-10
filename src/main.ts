import { createApp } from 'vue'
import App from './App.vue'
import { router, setupRouter } from '@/router'
import { setupRouterGuard } from '@/router/guard'
import pinia from '@/store'
import { setupI18n } from '@/locales/setupI18n'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './scss/index.scss'

// import '@/router/guard/index'

const env = import.meta.env
console.log(env)

async function setupApp () {
  const app = createApp(App)

  // 注册element-plus图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

  // 配置路由
  setupRouter(app)
  // 路由守卫
  setupRouterGuard(router)
  app.use(pinia)
  /// 需要异步读取
  await setupI18n(app)
  app.use(ElementPlus)
  app.mount('#app')
}

setupApp()
