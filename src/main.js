import Vue from 'vue'
import router from './router'

import App from './App.vue'
import * as THREE from 'three';

Vue.config.productionTip = false
Vue.prototype.THREE = THREE

new Vue({
  render: h => h(App),
  router
}).$mount('#app')