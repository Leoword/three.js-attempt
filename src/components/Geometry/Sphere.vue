<template>
	<div id="geo-sphere"></div>
</template>

<script>
export default {
	mounted () {
		const Three = this.THREE
		const renderer = new Three.WebGLRenderer()
		renderer.setSize(1500, 750)
		renderer.setClearColor(0x000000)

		document.getElementById('geo-sphere').appendChild(renderer.domElement)
		const scene = new Three.Scene()

		const camera = new Three.PerspectiveCamera(60, 2/1, 1, 10)

		camera.position.set(0, 0, 5)
		scene.add(camera)

		const sphere1 = new Three.Mesh(
			new Three.SphereGeometry(2, 35, 35, Math.PI/2, Math.PI, Math.PI/5, Math.PI/15 * 7 ),
			new Three.MeshBasicMaterial({
				color: 0x00ffff,
				wireframe: true
			})
		)

		sphere1.position.x = -3
		const sphere = new Three.Mesh(
			new Three.SphereGeometry(2, 35, 35),
			new Three.MeshBasicMaterial({
				color: 0x00ffff,
				wireframe: true
			})
		)

		sphere.position.x = 2

		scene.add(sphere1)
		scene.add(sphere)
		renderer.render(scene, camera)
	}
}
</script>