<template>
	<div id="geo-custom"></div>
</template>

<script>
export default {
	mounted() {
		const {
			WebGLRenderer, Scene, OrthographicCamera, Vector3, Face3,
			Mesh, MeshBasicMaterial, Geometry
		} = this.THREE

		const renderer = new WebGLRenderer()

		renderer.setSize(1500, 750)
		renderer.setClearColor(0xffa000)

		document.getElementById('geo-custom').appendChild(renderer.domElement)

		const scene = new Scene()
		const camera = new OrthographicCamera(-3, 3, 1.5, -1.5, 1, 10)

		camera.position.set(-2,2,5)

		camera.lookAt(new Vector3(0,0,0))

		const geometry = new Geometry()

		geometry.vertices = [
			new Vector3(0,0,-1), //0
			new Vector3(0,1,0), //1
			new Vector3(0,0,1),//2
			new Vector3(1,0,0)//3
		]

		geometry.faces = [
			new Face3(1,0,2),
			new Face3(1,0,3),
			new Face3(2,0,3),
			new Face3(1,2,3)
		]

		const mesh = new Mesh(
			geometry,
			new MeshBasicMaterial({
				color: 0xae1e55,
				wireframe: false
			})
		)

		mesh.position.x = -2

		const mesh1 = new Mesh(
			geometry,
			new MeshBasicMaterial({
				color: 0xae1e55,
				wireframe: true
			})
		)

		scene.add(mesh)
		scene.add(mesh1)
		renderer.render(scene, camera)
	}
}
</script>