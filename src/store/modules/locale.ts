import { defineStore } from 'pinia'
import pina from '@/store'
import type { LocaleSetting, LocaleType } from '#/config'
import { LOCALE_KEY } from '@/enums/cacheEnum'
import { createLocalStorage } from '@/utils/cache'
import { localeSetting } from '@/settings/localeSetting'

interface LocaleState {
  localInfo: LocaleSetting;
}
const ls = createLocalStorage()

const lsLocaleSetting = (ls.get(LOCALE_KEY) || localeSetting) as LocaleSetting

export const useLocaleStore = defineStore({
  id: 'hm-locale',
  state: (): LocaleState => ({
    localInfo: lsLocaleSetting
  }),
  getters: {
    getShowPicker (): boolean {
      return !!this.localInfo?.showPicker
    },
    getLocale (): LocaleType {
      return this.localInfo?.locale ?? 'zh_CN'
    }
  },
  actions: {
    /**
     * Set up multilingual information and cache
     * @param info multilingual info
     */
    setLocaleInfo (info: Partial<LocaleSetting>) {
      this.localInfo = { ...this.localInfo, ...info }
      ls.set(LOCALE_KEY, this.localInfo)
    },
    /**
     * Initialize multilingual information and load the existing configuration from the local cache
     */
    initLocale () {
      this.setLocaleInfo({
        ...localeSetting,
        ...this.localInfo
      })
    }
  },
  persist: {
    key: 'hm-locale',
    storage: sessionStorage
  }
})

// 在非 setup 时使用
export function useLocaleStoreWithOut () {
  return useLocaleStore(pina)
}
