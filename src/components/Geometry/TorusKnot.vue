<template>
	<div id="geo-torus-knot"></div>
</template>

<script>
export default {
	mounted () {
		const Three = this.THREE 
		const renderer = new Three.WebGLRenderer()

		renderer.setSize(1500, 750)
		renderer.setClearColor(0x000000)

		document.getElementById('geo-torus-knot').appendChild(renderer.domElement)

		const scene = new Three.Scene()
		const camera = new Three.OrthographicCamera(-3, 3, 1.5, -1.5, 1, 10)

		camera.position.set(0,1,7)
		camera.lookAt(new Three.Vector3(0,0,0))

		scene.add(camera)

		const torusKnot = new Three.Mesh(
			new Three.TorusKnotGeometry(1, 0.5,28, 28),
			new Three.MeshBasicMaterial({
				color: 0x55aa55, wireframe: true
			})
		)
		// torusKnot.position.x = -1

		scene.add(torusKnot)

		renderer.render(scene, camera)
	}
}
</script>