<template>
<!--  <div class="about">-->
<!--    <h1>This is an about page</h1>-->
<!--    <h3>counter: {{counter}}</h3>-->
<!--    <el-button @click="add">-->
<!--      <el-icon>-->
<!--        <Plus></Plus>-->
<!--      </el-icon>-->
<!--    </el-button>-->

<!--  </div>-->
  <div>
    <el-button mb-2 @click="toggle">{{ t('common.searchText') }}</el-button>
    <br />
      <el-table mb-1 :data="[]" />
      <el-pagination :total="100" />
  </div>
</template>

<script lang="ts" setup>
import type { LocaleType } from '#/config'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { useLocale } from '@/locales/useLocale'

const { changeLocale } = useLocale()

// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import en from 'element-plus/dist/locale/en.mjs'

const language = ref('zh_CN')
// const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const { t } = useI18n()
const title = t('common.searchText')
console.log(title)

const toggle = () => {
  const lang = language.value = language.value === 'zh_CN' ? 'en' : 'zh_CN'
  console.log(lang)
  changeLocale(lang as LocaleType)
}
// import useDemoStore from '@/store/modules/demo'
// import { storeToRefs } from 'pinia'
// const demoStore = useDemoStore()
// const { counter } = storeToRefs(demoStore)
// const add = () => {
//   demoStore.increment()
// }
</script>
<style scoped>
.icon {
  color: cornflowerblue;
  font-size: 30px;
}
</style>
