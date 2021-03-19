<template>
	<div id="mat-am"></div>
</template>

<script>
export default {
	mounted () {
		const {
			WebGLRenderer, Scene, OrthographicCamera, Vector3, AmbientLight,
			Mesh, MeshBasicMaterial, MeshLambertMaterial, MeshPhongMaterial,
			SphereGeometry
		} = this.THREE

		const renderer = new WebGLRenderer()

		renderer.setSize(1500, 750)
		renderer.setClearColor(0x000000)

		document.getElementById('mat-am').appendChild(renderer.domElement)

		const scene = new Scene()
		const camera = new OrthographicCamera(-3, 3, 1.5, -1.5, 1, 10)
		camera.position.set(0,0,5)
		camera.lookAt(new Vector3(0,0,0))

		scene.add(camera)
		scene.add(new AmbientLight(0xffff00))

		const sphereGeo = new SphereGeometry(.5, 20, 20)

		const basic = new Mesh(
			sphereGeo,
			new MeshBasicMaterial({
				color: 0x00ffff
			})
		)

		basic.position.x = -2

		const lambert = new Mesh(
			sphereGeo,
			new MeshLambertMaterial({
				color: 0x00a000
			})
		)

		lambert.position.x = 0

		const Phong = new Mesh(
			sphereGeo,
			new MeshPhongMaterial({
				color: 0xa000aa,
				specular: 0x00ff00,
				shininess: 2000
			})
		)

		Phong.position.x = 2

		scene.add(basic)
		scene.add(lambert)
		scene.add(Phong)

		renderer.render(scene, camera)
	}
}
</script>