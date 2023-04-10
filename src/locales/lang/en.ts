import { genMessage } from '../helper'
import langLocale from 'element-plus/dist/locale/en.mjs'

const modules = import.meta.glob('./en/**/*.ts', { eager: true })
export default {
  message: {
    ...genMessage(modules, 'en'),
    langLocale
  }
}
