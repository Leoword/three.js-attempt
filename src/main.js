import Vue from 'vue'
import router from './router'
import App from './App.vue'
import * as THREE from 'three';
import { WEBGL} from 'three/examples/jsm/WebGL';

Vue.config.productionTip = false

const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth- 100, window.innerHeight - 100)

const camera1 = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
camera1.position.set(0, 0, 100)
camera1.lookAt(0, 0, 0)

Vue.prototype.renderer = (scene, camera = camera1) => {
  renderer.render(scene, camera)
}

window.onload = () => {
  document.body.appendChild(renderer.domElement )
}

if (WEBGL.isWebGLAvailable()) {
  //执行3D动画
} else {
  const warning = WEBGL.getWebGLErrorMessage();

  console.log(warning)
}

new Vue({
  render: h => h(App),
  router
}).$mount('#app')