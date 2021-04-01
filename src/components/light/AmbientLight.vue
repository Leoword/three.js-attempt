<template>
	<div id="light-am"></div>
</template>

<script>
export default {
	mounted () {
		const {
			WebGLRenderer, Scene, OrthographicCamera, AmbientLight, Vector3,
			CylinderGeometry, MeshLambertMaterial, Mesh
		} = this.THREE

		const renderer = new WebGLRenderer()
		renderer.setSize(1500, 750)
		renderer.setClearColor(0x000000)

		document.getElementById('light-am').appendChild(renderer.domElement)

		const camera = new OrthographicCamera(-3, 3, 1.5, -1.5, 1, 10)

		camera.position.set(0,1,5)
		camera.lookAt(new Vector3(0,0,0))

		const scene = new Scene()

		scene.add(camera)

		const light = new AmbientLight(0xfff000)
		scene.add(light)

		const cylinder1 = new Mesh(
			new CylinderGeometry(.5, 1, 1,35, 35),
			new MeshLambertMaterial({
				color: 0xff0000
			})
		)
		cylinder1.position.x = -1
		const cylinder2 = new Mesh(
			new CylinderGeometry(.5, 1, 1,35, 35),
			new MeshLambertMaterial({
				color: 0x00ff000, wireframe: true
			})
		)
		cylinder2.position.x = 1

		scene.add(cylinder1)
		scene.add(cylinder2)

		renderer.render(scene, camera)
	}
}
</script>