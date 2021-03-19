<template>
	<div id="ma-ima"></div>
</template>

<script>
export default {
	mounted () {
		const {
			WebGLRenderer, Scene, OrthographicCamera, PointLight, Vector3,
			Mesh, MeshPhongMaterial,RpeatWrapping,
			CubeGeometry, TextureLoader
		} = this.THREE

		const renderer = new WebGLRenderer()
		renderer.setSize(1500, 750)
		renderer.setClearColor(0x000000)

		document.getElementById('ma-ima').appendChild(renderer.domElement)

		const scene = new Scene()
		const camera = new OrthographicCamera(-3, 3,1.5, -1.5, 1, 10)

		camera.position.set(-4,3,5)
		camera.lookAt(new Vector3(0,0,0))

		scene.add(camera)

		const light = new PointLight(0xaaaccc, 5, 10)

		light.position.set(-4,2,3)
		scene.add(light)

		const cubeGeo = new CubeGeometry(1,1,1, 2,2)

		new TextureLoader().load('1.jpg', (texture) => {
			texture.wrapS = texture.wrapT = RpeatWrapping
			texture.repeat.set(1, 1)
			const mesh = new Mesh(
				cubeGeo,
				new MeshPhongMaterial({
					map: texture
				})
			)
			scene.add(mesh)
	
			renderer.render(scene,camera)
			// 实现多个面设置不同的材质
		})
	}
}
</script>