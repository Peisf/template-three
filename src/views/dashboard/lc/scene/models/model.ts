// 引入threejs
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const model = new THREE.Group()// 声明一个组对象，用来添加加载成功的三维场景
const loader = new GLTFLoader() // 创建一个GLTF加载器

const granaryArr :any[] = [] // 所有粮仓模型对象的集合，export导出用于射线拾取
loader.load('/models/model.gltf', function (gltf: any) { // gltf加载成功后返回一个对象
  console.log('控制台查看gltf对象结构', gltf)
  // console.log('gltf对象场景属性', gltf.scene);
  // 递归遍历gltf.scene
  gltf.scene.traverse(function (object) {
    if (object.type === 'Mesh') {
      // 批量更改所有Mesh的材质
      object.material = new THREE.MeshLambertMaterial({
        map: object.material.map, // 获取原来材质的颜色贴图属性值
        color: object.material.color // 读取原来材质的颜色
      })
    }
  })
  // 所有粮仓模型的父对象名称：'粮仓'
  const group = gltf.scene.getObjectByName('粮仓')
  // console.log('粮仓', group);
  group.traverse(function (obj) {
    if (obj.type === 'Mesh') {
      granaryArr.push(obj)
    }
  })
  model.add(gltf.scene)
})
export {
  model,
  granaryArr
}
