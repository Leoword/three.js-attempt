<template>
	<div id="orthographic-camera"></div>
</template>

<script>
export default {
	mounted () {
		const Three = this.THREE
		const renderer = new Three.WebGLRenderer()
		renderer.setSize(1500, 750)
		renderer.setClearColor(0x000000)
		document.getElementById('orthographic-camera').appendChild(renderer.domElement)

		const scene = new Three.Scene()
		const camera = new Three.OrthographicCamera(-3, 3, 1.5, -1.5, 1, 10)

		camera.position.set(2, 3, 5)
		camera.lookAt(new Three.Vector3(0,0,0))

		scene.add(camera)

		//物体
		const material = new Three.MeshBasicMaterial({
			color: 0xf0f0f0
		})

		const cubeGeo = new Three.CubeGeometry(1.5, 1.5, 1.5)
		const plane = new Three.Mesh(cubeGeo, material)
		plane.position.x = 1

		scene.add(plane)

		renderer.render(scene, camera)
	}
}
</script>