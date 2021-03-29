<template>
	<div id="animation-complex"></div>
</template>

<script>
import Stat from 'stats.js'

export default {
	mounted () {
		const {
			WebGLRenderer, Scene, OrthographicCamera, PointLight,
			Mesh, MeshLambertMaterial,MeshBasicMaterial, SphereGeometry,
			RepeatWrapping, TextureLoader, PlaneGeometry, Vector3
		} = this.THREE

		const renderer = new WebGLRenderer()
		renderer.setSize(1500, 750)
		renderer.setClearColor(0x000000)

		const container = document.getElementById('animation-complex')

		container.appendChild(renderer.domElement)

		const stat = new Stat()

		stat.domElement.style.position = 'absolute'
		stat.domElement.style.top = '100px'
		stat.domElement.style.left = '10px'

		container.appendChild(stat.domElement)

		const scene = new Scene()
		const camera = new OrthographicCamera(-3, 3, 1.5, -1.5, 1, 10)

		camera.position.set(0,0,5)
		camera.lookAt(new Vector3(0,0,0))
		const pointLight = new PointLight(0xffffff, 2, 10)
		pointLight.position.set(0,0,5)

		scene.add(camera)
		scene.add(pointLight)

		const sphere = new Mesh(
			new SphereGeometry(.1, 25, 25),
			new MeshLambertMaterial({
				color: 0x00f0f0,
				emissive: 0x000f0f, wireframe: true
			})
		)

		let maxHeight = 1.3

		sphere.position.y = maxHeight

		scene.add(sphere)

		new TextureLoader().load('2.jpg', (texture) => {
			texture.wrapS = texture.wrapT = RepeatWrapping
			texture.repeat.set(4,4)

			const plane = new Mesh(
				new PlaneGeometry(2,2),
				new MeshBasicMaterial({
					map: texture
				})
			)
			plane.rotation.x = -Math.PI / 3
			plane.position.y = -0.1
			scene.add(plane)

			let v = 0, a = 0.003, id, isDown = true;

			function draw() {
				stat.begin()

				if (maxHeight <=0) {
					return
				}

				maxHeight-=0.01;

				if (v >=maxHeight && isDown) {
					a = -0.003;
					isDown = false
				} else if (v<=0 && !isDown) {
					a = 0.003;
					isDown = true
				}

				v+=a

				if (!isDown) {
					if (sphere.position.y < maxHeight) {
						sphere.position.y = Math.round((sphere.position.y + v) * 100) / 100
					} else {
						sphere.position.y =  maxHeight
						isDown = true
						v = 0
					}
				} else {
					if (Math.round((sphere.position.y - v) * 100) / 100 > 0) {
						sphere.position.y = Math.round((sphere.position.y - v) * 100) / 100
					} else {
						sphere.position.y = 0
						isDown = false
						v= maxHeight
					}
				}

				sphere.rotation.x = (sphere.rotation.x + 0.01) %(Math.PI * 2)
				sphere.rotation.y = (sphere.rotation.y + 0.01) %(Math.PI * 2)


				renderer.render(scene, camera)

				id = requestAnimationFrame(draw)

				stat.end()
			}

			id = requestAnimationFrame(draw)

			setTimeout(() => {
				cancelAnimationFrame(id)
			} , 60000)
		})

	}
}
</script>