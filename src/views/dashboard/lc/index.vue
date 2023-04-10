<script setup lang="ts">
import { renderer } from '@/views/dashboard/lc/scene'
import { onMounted, ref } from 'vue'
// 将监视器添加到页面中
const webgl = ref<HTMLBodyElement | null>(null)
onMounted(() => {
  if (webgl.value != null) {
    webgl.value.appendChild(renderer.domElement)
    renderer.domElement.style.position = 'absolute'
    renderer.domElement.style.top = '0px'
    renderer.domElement.style.zIndex = '-1' // canvas全屏，不遮挡其它HTML元素
  }
})
</script>

<template>
  <div ref="webgl" class="site-webgl">
  </div>
</template>

<style scoped lang="scss">
.site-webgl{
  position: relative;
}
.read-the-docs {
  color: #888;
}
</style>
