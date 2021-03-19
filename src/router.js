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
import Hedron from './components/Geometry/Hedron.vue'
import Torus from './components/Geometry/Torus.vue'
import TorusKnot from './components/Geometry/TorusKnot.vue'
import Text from './components/Geometry/Text.vue'
import Custom from './components/Geometry/Custom.vue'
import MaterialColor from './components/material/Color.vue'
import MaterialAmbient from './components/material/ambient.vue'
import MaterialEmissive from './components/material/emissive.vue'
import MaterialImage from './components/material/Image.vue'

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
		},
		{
			path: '/geometry/hedron', component: Hedron
		},
		{
			path: '/geometry/torus', component: Torus
		},
		{
			path: '/geometry/torusKnot', component: TorusKnot
		},
		{
			path: '/geometry/text', component: Text
		},
		{
			path: '/geometry/custom', component: Custom
		},
		{
			path: '/material/color', component: MaterialColor
		},
		{
			path: '/material/ambient', component: MaterialAmbient
		},
		{
			path: '/material/emissive', component: MaterialEmissive
		},
		{
			path: '/material/image', component: MaterialImage
		}
	]
})