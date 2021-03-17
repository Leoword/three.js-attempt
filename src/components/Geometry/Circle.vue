<template>
	<div id="geo-circle"></div>
</template>

<script>
export default {
	mounted () {
		const Three = this.THREE
		const renderer = new Three.WebGLRenderer()

		renderer.setSize(1500, 750)
		renderer.setClearColor(0x000000)

		document.getElementById('geo-circle').appendChild(renderer.domElement)

		const scene  = new Three.Scene()
		const camera = new Three.OrthographicCamera(-3, 3, 1.5, -1.5, 1, 10)
		camera.position.set(-4,5,5)

		camera.lookAt(new Three.Vector3(0, 0, 0))

		scene.add(camera)

		const geo1 = new Three.Mesh(
			new Three.CircleGeometry(1, 60, Math.PI /6, 2 * Math.PI),
			new Three.MeshBasicMaterial({
				color: 0xff00ff,
				wireframe: true
			})
		)
		geo1.position.x = -1
		const geo = new Three.Mesh(
			new Three.CircleGeometry(1, 60, Math.PI /6,Math.PI / 6 * 8),
			new Three.MeshBasicMaterial({
				color: 0xff00ff,
				wireframe: true
			})
		)

		geo.position.x = 1
		scene.add(geo1)
		scene.add(geo)

		renderer.render(scene, camera)
	}
}
</script>