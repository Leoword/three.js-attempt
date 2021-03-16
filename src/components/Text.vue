<template>
	<div></div>
</template>

<script>
import * as THREE from 'three'

export default {
	name: 'TextT',
	mounted () {
		const scene = new THREE.Scene()
		const loader = new THREE.FontLoader();

		loader.load(
			'fonts/helvetiker_regular.typeface.json',
			(font) => {
				const geometry = new THREE.TextGeometry('Hello three.js', {
					font,
					size: 70,
					height: 20,
					curveSegments: 4,
					bevelEnabled: true,
					bevelThickness: 2,
					bevelSize: 1.5,
					bevelOffset: 0,
					bevelSegments: 5
				})

				scene.add(geometry)

				this.renderer(scene)
			}
		)
	}
}
</script>