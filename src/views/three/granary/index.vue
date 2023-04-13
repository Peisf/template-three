<template>
<div ref="webgl" id="webgl">
  <page-header/>
  <Echarts/>
</div>
</template>

<script setup lang="ts">
import { renderer } from '@/views/three/granary/threejs/scene'
import { onMounted, ref } from 'vue'
import Echarts from '@/views/three/granary/echarts.vue'
import PageHeader from '@/views/three/granary/PageHeader.vue'

// 将监视器添加到页面中
const webgl = ref<HTMLBodyElement | null>(null)
onMounted(() => {
  console.log(webgl.value)
  if (webgl.value != null) {
    webgl.value.appendChild(renderer.domElement)
    renderer.domElement.style.position = 'absolute'
    renderer.domElement.style.top = '0px'
    renderer.domElement.style.zIndex = '-1' // canvas全屏，不遮挡其它HTML元素
  }
})
</script>

<style scoped>

</style>
