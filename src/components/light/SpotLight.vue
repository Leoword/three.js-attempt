<template>
	<div id="light-spot"></div>
</template>

<script>
export default {
	mounted () {
		const {
			WebGLRenderer, PerspectiveCamera, Scene, SpotLight, SphereGeometry,
			Mesh, MeshPhongMaterial, PlaneGeometry
		} = this.THREE

		const renderer = new WebGLRenderer()

		renderer.shadowMap.enabled = true

		renderer.setSize(1500, 750)

		renderer.setClearColor(0x000000)

		document.getElementById('light-spot').appendChild(renderer.domElement)

		const camera = new PerspectiveCamera(45, 2/1, 1, 10)

		camera.position.set(0,0,5)

		const spotLight = new SpotLight(0x555500, 13,10, Math.PI / 6,25)

		spotLight.position.set(3,3,5)

		spotLight.castShadow = true
		spotLight.shadow.camera.far = 10
		spotLight.shadow.camera.near = 1
		spotLight.shadow.camera.fov = Math.PI / 2
		spotLight.shadow.camera.visible = true

		const P1 = new Mesh(
			new PlaneGeometry(4,3),
			new MeshPhongMaterial({
				color: 0xffffff
			})
		)

		P1.rotation.x = -Math.PI/3
		P1.position.y = -.4
		P1.position.z= -2
		P1.receiveShadow  = true

		const S1 = new Mesh(
			new SphereGeometry(.5, 35, 35),
			new MeshPhongMaterial({
				color: 0x00f0f0,
				specular: 0x0000ff,
				shininess: 1000
			})
		)
		S1.position.x = -2
		S1.position.y = -.5
		const S2 = new Mesh(
			new SphereGeometry(.8, 15, 5),
			new MeshPhongMaterial({
				color: 0xf000f0,
				specular: 0x0f000f,
				shininess: 100
			})
		)

		S2.position.x = 2
		S2.position.z = -2

		spotLight.target = S1
		const scene = new Scene()

		scene.add(camera)
		scene.add(spotLight)
		scene.add(P1)
		scene.add(S1)
		scene.add(S2)
		let isRight = true, id = null

		S1.castShadow = true
		S2.castShadow = true

		function draw() {
			if (S1.position.x ==2 || S2.position.x == -2) {
				isRight = false
			} else if (S1.position.x == -2 || S2.position.x == 2) {
				isRight = true
			}


			if (isRight) {
				if (S1.position.x < 2) {
					S1.position.x = S1.position.x + 0.05
					S1.rotation.z = (S1.rotation.z - 0.11) % (2 * Math.PI)
				} else {
					S1.position.x = 2
				}
			} else {
				if (S1.position.x > -2) {
					S1.position.x = S1.position.x - 0.05
					S1.rotation.z = (S1.rotation.z + 0.11) % (2 * Math.PI)
				} else {
					S1.position.x = -2
				}
			}
			
			if (isRight) {
				if (S2.position.x > -2) {
					S2.position.x = S2.position.x - 0.05
					S2.rotation.z = (S2.rotation.z + 0.11) % (2 * Math.PI)
				} else {
					S2.position.x = -2
				}
			} else {
				if (S2.position.x < 2) {
					S2.position.x = S2.position.x + 0.05
					S2.rotation.z = (S2.rotation.z - 0.11) % (2 * Math.PI)
				} else {
					S2.position.x = 2
				}
			}

			renderer.render(scene, camera)

			id = requestAnimationFrame(draw)
		}

		id = requestAnimationFrame(draw)

		setTimeout(() => {
			cancelAnimationFrame(id)
		}, 20000)
	}
}
</script>