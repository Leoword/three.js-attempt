<template>
	<div id="perspective-camera"></div>
</template>

<script>
export default {
	mounted () {
		const Three = this.THREE

		const renderer = new Three.WebGLRenderer()

		renderer.setSize(1500, 750)
		renderer.setClearColor(0x000000)
		document.getElementById('perspective-camera').appendChild(renderer.domElement)

		const scene = new Three.Scene()
		const camera = new Three.PerspectiveCamera(90, 2/1, 1, 10) //1500/750
		camera.position.set(3, 0, 5)
		// camera.lookAt(new Three.Vector3(0,0,0))
		scene.add(camera)

		//物体 = 形状 + 材质

		const material = new Three.MeshBasicMaterial({
			color: 0x00ff00, wireframe: false
		})
		const cubeGeo = new Three.CubeGeometry(1,1,1)
		const cube = new Three.Mesh(cubeGeo, material)

		scene.add(cube)

		renderer.render(scene, camera)
	}
}
</script>