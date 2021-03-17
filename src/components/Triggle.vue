<template>
	<div id="container"></div>
</template>

<script>
export default {
	mounted() {
		const Three = this.THREE
		const renderer = new Three.WebGLRenderer()
		renderer.setSize( window.innerWidth - 175, window.innerHeight-138 );
		renderer.setClearColor(0x000000)

		document.getElementById('container').appendChild(renderer.domElement)

		const scene = new Three.Scene()
		// const camera = new Three.PerspectiveCamera(45, 4 / 3, 1, 1000)
		const camera = new Three.OrthographicCamera(-3, 3, 1.5, -1.5, 1, 10)
		camera.position.set(5, 0, 5)
		// camera.lookAt(new Three.Vector3(0, 0, 0))
		
		scene.add(camera)

		const material = new Three.MeshBasicMaterial({
			color: 0xffffff
		})

		const planeGeo = new Three.PlaneGeometry(1.5,1.5)
		const plane = new Three.Mesh(planeGeo, material)
		plane.position.x = 1
		scene.add(plane)

		const cubeGeo = new Three.CubeGeometry(1,2,3)
		const plane1 = new Three.Mesh(cubeGeo, new Three.MeshBasicMaterial({
			color: 0xff0000
		}))
		plane1.position.x = 1
		scene.add(plane1)

		const triGeo = new Three.Geometry()
		triGeo.vertices = [
			new Three.Vector3(0, -0.8, 0),
			new Three.Vector3(-2,-0.8, 0),
			new Three.Vector3(-1, 0.8, 0)
		]

		triGeo.faces.push(new Three.Face3(0, 2,1))

		const triangle = new Three.Mesh(triGeo, material)

		scene.add(triangle)

		renderer.render(scene, camera)
	}
}
</script>