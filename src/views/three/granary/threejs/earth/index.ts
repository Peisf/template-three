// 引入threejs
import * as THREE from 'three'
import { countryLine } from '@/views/three/granary/threejs/earth/lines'
import Sprite from '@/views/three/granary/threejs/earth/sprite'
import { ThreeEnum } from '@/enums/threeEnum'
export const earth = new THREE.Group()
const R = ThreeEnum.R
earth.add(createSphereMesh(R))// 球体Mesh插入earthGroup中
// R * 1.001比地球R稍大，以免深度冲突
earth.add(countryLine(R * 1.001))// 国家边界集合插入earthGroup中

earth.add(Sprite)// 地球光圈

// r：地球半径
function createSphereMesh(r) {
  // TextureLoader创建一个纹理加载器对象，可以加载图片作为纹理贴图
  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load('/images/earth.png')// 加载纹理贴图
  // var geometry = new THREE.SphereBufferGeometry(r, 40, 40); //创建一个球体几何对象
  const geometry = new THREE.SphereGeometry(r, 40, 40)
  // 材质对象Material
  // MeshLambertMaterial  MeshBasicMaterial
  const material = new THREE.MeshLambertMaterial({
    // color: 0x00ffff,
    map: texture // 设置地球颜色贴图map
    // transparent:true,
    // opacity:0.5,//半透明效果
  })
  const mesh = new THREE.Mesh(geometry, material) // 网格模型对象Mesh
  return mesh
}
