import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Line from './components/Line.vue'
import Text from './components/Text.vue'
import Triggle from './components/Triggle.vue'

export default new VueRouter({
	routes: [
		{
			path: '/line', component: Line
		},
		{
			path: '/triggle', component: Triggle
		},
		{
			path: '/text', component: Text
		}
	]
})