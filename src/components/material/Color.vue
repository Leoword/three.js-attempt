<template>
	<div id="mat-color"></div>
</template>

<script>
export default {
	mounted () {
		const {
			WebGLRenderer, Scene, PerspectiveCamera, PointLight,
			Mesh, CubeGeometry,
			MeshBasicMaterial, MeshLambertMaterial, MeshPhongMaterial, MeshNormalMaterial
		} = this.THREE

		const renderer = new WebGLRenderer()
		renderer.setSize(1500, 750)
		renderer.setClearColor(0x0a0a0a)

		document.getElementById('mat-color').appendChild(renderer.domElement)

		const scene = new Scene()
		const camera = new PerspectiveCamera(45, 2/1, 1, 10)
		camera.position.set(0,0,5)
		
		scene.add(camera)

		const light = new PointLight(0xffffff, 3, 10)
		light.position.set(2,0,5)
		scene.add(light)

		const cubeGeo = new CubeGeometry(1,1,1)

		const basicMaterial = new Mesh(
			cubeGeo,
			new MeshBasicMaterial({
				color: 0xa0a0a0
			})
		)

		basicMaterial.position.x = -3
		scene.add(basicMaterial)

		const LambertMaterial = new Mesh(
			cubeGeo,
			new MeshLambertMaterial({
				color: 0xa0a0a0
			})
		)
		LambertMaterial.position.x = -1
		scene.add(LambertMaterial)
		const PhongMaterial = new Mesh(
			cubeGeo,
			new MeshPhongMaterial({
				color: 0x0000ff,
				specular: 0xffff00,
				shininess: 20000
			})
		)
		PhongMaterial.position.x = 1
		scene.add(PhongMaterial)
		const NormalMaterial = new Mesh(
			cubeGeo,
			new MeshNormalMaterial()
		)
		NormalMaterial.position.x = 3
		scene.add(NormalMaterial)

		renderer.render(scene, camera)
	}
}
</script>