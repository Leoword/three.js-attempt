<template>
	<div id="geo-cylinder"></div>
</template>

<script>
export default {
	mounted() {
		const Three = this.THREE
		const renderer = new Three.WebGLRenderer()

		renderer.setSize(1500, 750)
		renderer.setClearColor(0x000000)

		document.getElementById('geo-cylinder').appendChild(renderer.domElement)

		const scene = new Three.Scene()
		const camera = new Three.PerspectiveCamera(60, 2/1, 1, 10)
		camera.position.set(-1, 0, 8)
		scene.add(camera)
		const material = new Three.MeshBasicMaterial({
			color: 0x00ffff,
			wireframe: true
		})

		const cylinder1 = new Three.Mesh(
			new Three.CylinderGeometry(1,1,2,50,10),
			material
		)

		cylinder1.position.x = -4

		const cylinder2 = new Three.Mesh(
			new Three.CylinderGeometry(1,1.5,2,50,10),
			material
		)

		cylinder2.position.x = -1

		const cylinder3 = new Three.Mesh(
			new Three.CylinderGeometry(1,1.5,2,50,10, true),
			material
		)

		cylinder3.position.x =2.5

		scene.add(cylinder1)
		scene.add(cylinder2)
		scene.add(cylinder3)
		renderer.render(scene, camera)
	}
}
</script>