<template>
	<div id="light-po"></div>
</template>
<script>
export default {
	mounted () {
		const {
			WebGLRenderer, PerspectiveCamera, PointLight,
			Scene, MeshLambertMaterial, Mesh, SphereGeometry, MeshPhongMaterial
		} = this.THREE

		const renderer = new WebGLRenderer()

		renderer.setSize(1500, 750)
		renderer.setClearColor(0x000000)
		
		document.getElementById('light-po').appendChild(renderer.domElement)

		const scene = new Scene()

		const camera = new PerspectiveCamera(90, 2/1, 1, 10)

		camera.position.set(0,0,5)

		scene.add(camera)

		const light = new PointLight(0xf0f000, 3, 10)

		light.position.set(0,0,5)

		scene.add(light)

		const S1 = new Mesh(
			new SphereGeometry(1, 50, 50),
			new MeshLambertMaterial({
				color: 0x00f0f0
			})
		)
		S1.position.x = -3

		const S2 = new Mesh(
			new SphereGeometry(1, 50,50),
			new MeshPhongMaterial({
				color: 0x00f0f0,
				specular: 0xff0000,
				shininess: 2
			})
		)

		S2.position.x = 3

		scene.add(S1)
		scene.add(S2)

		renderer.render(scene, camera)
	}
}
</script>