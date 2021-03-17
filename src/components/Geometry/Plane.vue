<template>
	<div id="geo-plane"></div>
</template>

<script>
export default {
	mounted () {
		const Three = this.THREE
		const renderer = new Three.WebGLRenderer()
		renderer.setSize(1500, 750)
		renderer.setClearColor(0x000000)
		document.getElementById('geo-plane').appendChild(renderer.domElement)

		const scene = new Three.Scene()
		const camera = new Three.PerspectiveCamera(45, 2/1, 1, 10)
		camera.position.set(0, 0, 5)

		scene.add(camera)

		const plane = new Three.Mesh(
			new Three.PlaneGeometry(1.5, 1.5),
			new Three.MeshBasicMaterial({
				color: 0xffff00,
				wireframe: true
			})
		)

		scene.add(plane)

		renderer.render(scene, camera)
	}
}
</script>