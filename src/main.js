import Vue from 'vue'
import App from './App.vue'
import * as THREE from 'three';
import { WEBGL} from 'three/examples/jsm/WebGL';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
camera.position.set(0, 0, 100)
camera.lookAt(0, 0, 0)

const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial({ color: 0X0000ff })
const points = []
points.push(new THREE.Vector3(-10, 0, 0))
points.push(new THREE.Vector3(0, 10, 0))
points.push(new THREE.Vector3(10, 0, 0))

const geometry = new THREE.BufferGeometry().setFromPoints(points)

const line = new THREE.Line(geometry, material)

scene.add(line)

renderer.render(scene, camera)

window.onload = () => {
  document.body.appendChild(renderer.domElement )
}

if (WEBGL.isWebGLAvailable()) {
  //执行3D动画
} else {
  const warning = WEBGL.getWebGLErrorMessage();

  console.log(warning)
}