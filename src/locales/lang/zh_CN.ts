import { genMessage } from '../helper'
import langLocale from 'element-plus/dist/locale/zh-cn.mjs'

const modules = import.meta.glob('./zh-CN/**/*.ts', { eager: true })
export default {
  message: {
    ...genMessage(modules, 'zh-CN'),
    langLocale
  }
}
