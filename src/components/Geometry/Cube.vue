<template>
	<div id="geo-cube"></div>
</template>

<script>
export default {
	mounted () {
		const Three = this.THREE
		const renderer = new Three.WebGLRenderer()
		renderer.setSize(1500, 750)
		renderer.setClearColor(0x000000)
		document.getElementById('geo-cube').appendChild(renderer.domElement)

		const scene = new Three.Scene()
		const camera = new Three.OrthographicCamera(-3, 3, 1.5, -1.5, 1, 10)

		camera.position.set(3, -1, 5)
		camera.lookAt(new Three.Vector3(0, 0, 0))
		scene.add(camera)

		const cube = new Three.Mesh(
			new Three.CubeGeometry(1,1,1, 2, 2, 2),
			new Three.MeshBasicMaterial({
				color: 0xffff00,
				wireframe: true
			})
		)

		cube.position.x = -2

		const cube1 = new Three.Mesh(
			new Three.CubeGeometry(1,1,1),
			new Three.MeshLambertMaterial({
				emissive: 0xffaa00,
			})
		)

		cube1.position.x = 0

		scene.add(cube)
		scene.add(cube1)
		renderer.render(scene, camera)
	}
}
</script>