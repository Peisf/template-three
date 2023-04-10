<script setup lang="ts">
import {
  Scene,
  BoxGeometry,
  MeshLambertMaterial,
  Mesh,
  AmbientLight,
  PointLight,
  WebGLRenderer,
  PerspectiveCamera,
  AxesHelper,
  PointLightHelper,
  DirectionalLight,
  DirectionalLightHelper
  // MeshPhongMaterial
  // Clock
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { onMounted, ref } from 'vue'
import Stats from 'three/examples/jsm/libs/stats.module'

// 引入gui可视化交互界面
import GUI from 'three/examples/jsm/libs/lil-gui.module.min'

// 创建可视化对象
const gui = new GUI()
// gui.domElement.style.position = 'position'
// gui.domElement.style.left = '0px'

// 创建一个三维场景scene
const scene = new Scene()
// 创建一个几何体 长方体 长宽高都 是100
const geometry = new BoxGeometry(100, 100, 100)
// 创建一个材质对象  漫反射 没有镜面反射效果
const material = new MeshLambertMaterial({
  color: 0x00ffff, // 设置材质颜色
  transparent: true, // 开启透明
  opacity: 0.7 // 透明度
})
// 创建高光网格材质
// const material = new MeshPhongMaterial({})
// 创建一个网格模型 用来表示生活中的物体
const mesh = new Mesh(geometry, material)
const mat = gui.addFolder('材质')
mat.add(mesh.position, 'x', 0, 200).onChange(() => {
  console.log('gui onchange')
})
// 创建FBX加载器对象
const loader = new FBXLoader()
console.log('loader====', loader)
loader.load('/src/components/jdxx.fbx', function (fbx) {
  console.log('控制台查看加载fbx文件返回的对象结构', fbx)
  fbx.position.set(0, 0, 0)
  fbx.scale.set(0.001, 0.001, 0.001)
  scene.add(fbx)
})

const obj = {
  color: '0x00ffff',
  scale: 0,
  bool: false
}
mat.addColor(obj, 'color').onChange((value) => {
  mesh.material.color.set(value)
})

mat.add(obj, 'scale', [-100, 0, 100]).name('Y坐标').onChange((value) => {
  mesh.position.y = value
})

mat.add(obj, 'scale', {
  left: -100,
  center: 0,
  right: 100
}).name('X方位选择').onChange((value) => {
  mesh.position.x = value
})

mat.add(obj, 'bool').name('是否旋转')
// gui.add(mesh.position, 'y', 0, 200)
mat.add(mesh.position, 'z', 0, 200).step(10)
// 网格模型位置
// mesh.position.set(0, 100, 0)
// 旋转网格模型
// mesh.rotateY(Math.PI / 4)
// 把网格模型添加到场景中
scene.add(mesh)
// 沿着X轴循环创建阵列
// for (let i = 0; i < 10; i++) {
//   const mesh = new Mesh(geometry, material)
//   mesh.position.set(i * 200, 0, 0)
//   scene.add(mesh)
// }
// 沿着X0Z轴循环创建多个阵列
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     const mesh = new Mesh(geometry, material)
//     mesh.position.set(i * 200, 0, j * 200)
//     scene.add(mesh)
//   }
// }
// 批量创建长方体
// const num = 1000
// for (let i = 0; i < num; i++) {
//   const geometry = new BoxGeometry(10, 10, 10)
//   const material = new MeshLambertMaterial({
//     color: 0x00ffff, // 设置材质颜色
//     transparent: true, // 开启透明
//     opacity: 0.7 // 透明度
//   })
//   const mesh = new Mesh(geometry, material)
//   const x = (Math.random() - 0.5) * 200
//   const y = (Math.random() - 0.5) * 200
//   const z = (Math.random() - 0.5) * 200
//   mesh.position.set(x, y, z)
//   scene.add(mesh)
// }

// 添加一个环境光
const ambient = new AmbientLight(0xffffff, 0.5)
scene.add(ambient)
// 通过gui改变环境光强度 进行调试
const ambientFolder = gui.addFolder('环境光')
ambientFolder.add(ambient, 'intensity', 0, 1).name('环境光强度')

// 添加一个点光源
const pointLight = new PointLight(0xffffff, 0.4)
pointLight.position.set(150, 100, 90)
scene.add(pointLight)
// 可视化点光源
const pointLightHelper = new PointLightHelper(pointLight, 10)
scene.add(pointLightHelper)

// 添加一个平行光
const directionalLight = new DirectionalLight(0xffffff, 1)
// 设置光源点方向， 通过光源position属性和目标指向对象点position属性计算
directionalLight.position.set(50, 100, 60)
const directionalLightFolder = gui.addFolder('平行光')
directionalLightFolder.add(directionalLight, 'intensity', 0, 1)?.name('平行光强度')
// 方向光指对象 网格模块mesh原点
// directionalLight.target.add(mesh)
scene.add(directionalLight)
const dirLightHelper = new DirectionalLightHelper(directionalLight, 5, 0xffff00)
scene.add(dirLightHelper)

const axesHelper = new AxesHelper(100)
scene.add(axesHelper)

// 创建一个相机
const width = window.innerWidth // 800
const height = window.innerHeight // 500
// 创建一个透视投影相机
const camera = new PerspectiveCamera(30, width / height, 1, 8000)
// 设置相机位置
camera.position.set(800, 800, 800)
// 设置相机观察目标点
camera.lookAt(0, 0, 0)
// camera.lookAt(1000, 0, 1000)
// 设置观察一个模型
// camera.lookAt(mesh.position)

/// 创建一个webgl渲染器
const renderer = new WebGLRenderer({
  antialias: true
})
renderer.setSize(width, height)
// renderer.render(scene, camera)

// 创建性能监视器
const stats = Stats()
// 设置监视器面板，传入面板id（0: fps, 1: ms, 2: mb）
stats.setMode(0)
// 设置监视器位置
stats.domElement.style.position = 'absolute'
stats.domElement.style.left = '0px'
stats.domElement.style.top = '0px'

// 将监视器添加到页面中
const webgl = ref<HTMLBodyElement | null>(null)
const statsRef = ref<HTMLBodyElement | null>(null)
onMounted(() => {
  console.log(webgl.value)
  if (webgl.value != null) {
    webgl.value.appendChild(renderer.domElement)
    if (statsRef.value != null) {
      statsRef.value.appendChild(stats.domElement)
    }
  }

  window.onresize = function () {
    // 重置渲染器输入画布canvas尺寸
    renderer.setSize(window.innerWidth, window.innerHeight)
    /// 全屏下： 设置观察范围长宽比aspect为窗口宽高比
    camera.aspect = window.innerWidth / window.innerHeight
    // 如果相机的一些属性发生了变化， 需要执行updateProjectionMatrix方法更新
    camera.updateProjectionMatrix()
  }
})
// document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
// 改变相机camera.lookAt观察目标点 则需要手动设置OrbitControls的目标参数
// controls.target.set(1000, 0, 1000)
// controls.update()
controls.addEventListener('change', function () {
  // renderer.render(scene, camera)
})

// const clock = new Clock()

function render() {
  stats.update()
  // const spt = clock.getDelta() * 1000
  // console.log('渲染时间间隔 单位毫秒' + spt)
  // console.log('渲染帧率' + 1000 / spt)
  renderer.render(scene, camera)
  if (obj.bool) mesh.rotateY(0.01)
  requestAnimationFrame(render)
}

console.log(`查看当前屏幕设备像素比：${window.devicePixelRatio}`)
render()
</script>

<template>
  <div ref="webgl" class="site">
    <div ref="statsRef" class="stats"></div>
  </div>
</template>

<style scoped lang="scss">
.site{
  position: relative;
}
.read-the-docs {
  color: #888;
}
</style>
