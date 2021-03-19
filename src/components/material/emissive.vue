<template>
	<div id="ma-em"></div>
</template>

<script>
export default {
	mounted () {
		const {
			WebGLRenderer, Scene, PerspectiveCamera, PointLight,
			TorusKnotGeometry, MeshPhongMaterial, Mesh
		} = this.THREE

		const renderer = new WebGLRenderer()
		renderer.setSize(1500, 750)
		renderer.setClearColor(0x000000)

		document.getElementById('ma-em').appendChild(renderer.domElement)

		const scene = new Scene()
		const camera = new PerspectiveCamera(45, 2/1, 1, 10)
		camera.position.set(0, 0, 6)

		scene.add(camera)
		const Light = new PointLight(0xa00000, 2, 10)
		Light.position.set(1, 0, 6)
		scene.add(Light)

		scene.add(
			new Mesh(
				new TorusKnotGeometry(1.4, .5, 18, 18),
				new MeshPhongMaterial({
					emissive: 0x00ddee,
					specular: 0x0a0000,
					shininess: 100
				})
			)
		)

		renderer.render(scene, camera)
	}
}
</script>