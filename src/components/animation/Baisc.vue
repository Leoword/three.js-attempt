<template>
	<div id="animation-basic"></div>
</template>

<script>
export default {
	mounted () {
		const {
			WebGLRenderer, PerspectiveCamera, MeshLambertMaterial, SphereGeometry, Mesh,
			Scene, PointLight
		} = this.THREE

		const renderer = new WebGLRenderer()

		renderer.setSize(1500, 700)
		renderer.setClearColor(0x000000)

		document.getElementById('animation-basic').appendChild(renderer.domElement)

		const scene = new Scene()
		const camera = new PerspectiveCamera(45, 2/1, 1, 10)
		const pointLight = new PointLight(0xffffff, 2, 10)

		camera.position.set(0, 0, 5)
		pointLight.position.set(0, 0, 5)

		scene.add(camera)
		scene.add(pointLight)

		const material = new MeshLambertMaterial({
			color: 0x00f0f0,
			emissive: 0x000f0f,
			wireframe: true
		})
		const sphereGeo = new SphereGeometry(1, 20, 20)

		const sph1 = new Mesh(
			sphereGeo, material
		)
		const sph2 = new Mesh(
			sphereGeo, material
		)

		sph1.position.x = -1

		sph2.position.x = 2
		scene.add(sph1, sph2)

		let id = null, id1 = null

		id = setInterval(() => {
			sph1.rotation.y = (sph1.rotation.y + 0.01) % (Math.PI * 2)
			renderer.render(scene, camera)
		}, 1000/60)

		function draw1 () {
			sph2.rotation.y = (sph2.rotation.y + 0.01) % (Math.PI * 2)
			renderer.render(scene, camera)

			id1 = requestAnimationFrame(draw1)
		}

		requestAnimationFrame(draw1)

		setTimeout(() => {
			clearInterval(id)
			cancelAnimationFrame(id1)
		}, 60000)
	}
}
</script>