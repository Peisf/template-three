<template>
    <ElConfigProvider :locale="getAntdLocale">
      <RouterView/>
    </ElConfigProvider>
</template>
<script lang="ts" setup>
import { useLocale } from '@/locales/useLocale'

import 'dayjs/locale/zh-cn'

const { getAntdLocale } = useLocale()
</script>

<style scoped lang="scss">
.site {
  padding: 20px;
}
</style>
