import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Line from './components/Line.vue'

export default new VueRouter({
	routes: [
		{
			path: '/line', component: Line
		}
	]
})