import type { LocaleType } from '#/config'
import { i18n } from './setupI18n'
import { useLocaleStoreWithOut } from '@/store/modules/locale'
import { unref, computed } from 'vue'
import { loadLocalePool, setHtmlPageLang } from './helper'

interface LangModule {
  message: any;
  dateLocale: any;
  dateLocaleName: string;
}

function setI18nLanguage(locale: LocaleType) {
  const localeStore = useLocaleStoreWithOut()

  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    (i18n.global.locale as any).value = locale
  }
  localeStore.setLocaleInfo({ locale })
  setHtmlPageLang(locale)
}

export function useLocale () {
  const localeStore = useLocaleStoreWithOut()
  const getLocale = computed(() => localeStore.getLocale)

  const getAntdLocale = computed((): any => {
    // @ts-ignore
    return i18n.global.getLocaleMessage(unref(getLocale))?.langLocale ?? {}
  })

  // Switching the language will change the locale of useI18n
  // And submit to configuration modification
  async function changeLocale(locale: LocaleType) {
    const globalI18n = i18n.global
    const currentLocale = unref(globalI18n.locale)
    if (currentLocale === locale) {
      return locale
    }

    if (loadLocalePool.includes(locale)) {
      setI18nLanguage(locale)
      return locale
    }
    const langModule = ((await import(`./lang/${locale}.ts`)) as any).default as LangModule
    if (!langModule) return

    const { message } = langModule

    globalI18n.setLocaleMessage(locale, message)
    loadLocalePool.push(locale)

    setI18nLanguage(locale)
    return locale
  }

  return {
    changeLocale,
    getAntdLocale
  }
}
