import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Orthographic from './components/cameras/Orthographic.vue'
import Perspective from './components/cameras/Perspective.vue'
import Cube from './components/Geometry/Cube.vue'
import Plane from './components/Geometry/Plane.vue'
import Sphere from './components/Geometry/Sphere.vue'
import Circle from './components/Geometry/Circle.vue'
import Cylinder from './components/Geometry/Cylinder.vue'

export default new VueRouter({
	routes: [
		{
			path: '/camera/orthographic', component: Orthographic
		},
		{
			path: '/camera/perspective', component: Perspective
		},
		{
			path: '/geometry/cube', component: Cube
		},
		{
			path: '/geometry/plane', component: Plane
		},
		{
			path: '/geometry/sphere', component: Sphere
		},
		{
			path: '/geometry/circle', component: Circle
		},
		{
			path: '/geometry/cylinder', component: Cylinder
		}
	]
})