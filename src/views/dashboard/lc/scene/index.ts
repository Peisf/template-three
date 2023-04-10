// 引入threejs
import * as THREE from 'three'

// 引入扩展库
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { model } from '@/views/dashboard/lc/scene/models/model'
import { choose } from '@/views/dashboard/lc/scene/choose'

// 创建场景
export const scene = new THREE.Scene()

const textureLoader = new THREE.TextureLoader()
scene.background = textureLoader.load('/images/back.jpg')
scene.add(model)// 粮仓基地三维模型添加到场景中

// 设置雾化效果，雾的颜色和背景颜色相近，这样远处网格线和背景颜色融为一体
// scene.fog = new THREE.Fog(0x005577, -100, 1000)
/**
 * 光源设置
 */
// 平行光1
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
directionalLight.position.set(400, 200, 300)
scene.add(directionalLight)
// 平行光2
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.6)
directionalLight2.position.set(-400, -200, -300)
scene.add(directionalLight2)
// 环境光
const ambient = new THREE.AmbientLight(0xffffff, 0.6)
scene.add(ambient)

/**
 * 相机设置
 */
const width = window.innerWidth // 窗口文档显示区的宽度
const height = window.innerHeight // 窗口文档显示区的高度
// const k = width / height // Three.js输出的Cnavas画布宽高比
// const s = 100 // 控制相机渲染空间左右上下渲染范围，s越大，相机渲染范围越大
// // THREE.OrthographicCamera()创建一个正投影相机对象
// // -s * k, s * k, s, -s, 1, 1000定义了一个长方体渲染空间，渲染空间外的模型不会被渲染
// export const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
// 透视投影相机设置
export const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000)
// camera.position.set(200, 300, 200); //相机在Three.js坐标系中的位置
camera.position.set(325, 223, 185) // 浏览器控制台选择一个相机视角
camera.lookAt(0, 0, 0) // 相机指向Three.js坐标系原点

/**
 * 创建渲染器对象
 */
export const renderer = new THREE.WebGLRenderer({
  antialias: true // 开启锯齿
})
renderer.setPixelRatio(window.devicePixelRatio)// 设置设备像素比率,防止Canvas画布输出模糊。
renderer.setSize(width, height) // 设置渲染区域尺寸
// 设置three.js背景颜色 和雾化颜色相配
// renderer.setClearColor(0x005577, 1)
renderer.outputEncoding = THREE.sRGBEncoding// 解决加载gltf格式模型纹理贴图和原图不一样问题
renderer.localClippingEnabled = true
// 渲染循环
function render() {
  renderer.render(scene, camera) // 执行渲染操作
  requestAnimationFrame(render) // 请求再次执行渲染函数render，渲染下一帧
  // console.log(camera.position)
}
render()

window.onresize = function () {
  // 重置渲染器输出画布canvas尺寸
  renderer.setSize(window.innerWidth, window.innerHeight)
  // 重置相机投影的相关参数
  // k = window.innerWidth / window.innerHeight
  // camera.left = -s * k
  // camera.right = s * k
  // camera.top = s
  // camera.bottom = -s
  // 渲染器执行render方法的时候会读取相机对象的投影矩阵属性projectionMatrix
  // 但是不会每渲染一帧，就通过相机的属性计算投影矩阵（节约计算资源）
  // 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix()方法更新相机的投影矩阵
  camera.updateProjectionMatrix()
}
// 创建控件对象  控件可以监听鼠标的变化，改变相机对象的属性
// 旋转：拖动鼠标左键
// 缩放：滚动鼠标中键
// 平移：拖动鼠标右键
const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener('change', () => {})

window.addEventListener('click', choose)
