<template>
	<div id="light-direc"></div>
</template>

<script>
export default {
	mounted () {
		const {
			WebGLRenderer, Scene, OrthographicCamera, DirectionalLight,
			Mesh, MeshLambertMaterial, MeshPhongMaterial, CubeGeometry,
			SphereGeometry, Vector3
		} = this.THREE

		const renderer = new WebGLRenderer()

		renderer.setSize(1500, 750)
		renderer.setClearColor(0x000000)

		document.getElementById('light-direc').appendChild(renderer.domElement)

		const scene = new Scene()

		const camera = new OrthographicCamera(-3, 3, 1.5, -1.5, 1, 10)

		camera.position.set(1,3,5)
		camera.lookAt(new Vector3(0,0,0))

		scene.add(camera)

		const light = new DirectionalLight(0xffffff, 53)

		light.position.set(0,2,5)

		scene.add(light)

		const S1 = new Mesh(
			new SphereGeometry(.5, 30, 30),
			new MeshLambertMaterial({
				color: 0x20000
			})
		)
		S1.position.x = -2

		const c1 = new CubeGeometry(1,1,1)

		const c11 = new Mesh(
			c1, 
			new MeshLambertMaterial({
				color: 0xf3f000
			})
		)
		c11.position.x = 0

		const c12 = new Mesh(
			c1, 
			new MeshPhongMaterial({
				color: 0xff00ff,
				specular: 0x000000,
				shininess: 20
			})
			// 平行光无法生成光斑
		)
		c11.rotation.y =( c11.rotation.y + 0.28) % (Math.PI * 2)

		c12.position.x = 2

		scene.add(S1)
		scene.add(c11)
		scene.add(c12)

		renderer.render(scene, camera)
	}
}
</script>