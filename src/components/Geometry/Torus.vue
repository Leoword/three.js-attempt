<template>
	<div id="geo-torus"></div>
</template>

<script>
export default {
	mounted () {
		const Three = this.THREE 
		const renderer = new Three.WebGLRenderer()
		renderer.setSize(1500, 750)
		renderer.setClearColor(0x000000)

		document.getElementById('geo-torus').appendChild(renderer.domElement)

		const scene = new Three.Scene()
		const camera = new Three.PerspectiveCamera(45, 2/1, 1, 10)

		camera.position.set(-1,0,7)
		scene.add(camera)

		const material = new Three.MeshBasicMaterial({
			color: 0x880808, wireframe: true
		})

		const torus1 = new Three.Mesh(
			new Three.TorusGeometry(1.5,.5,8,8), material
		)

		torus1.position.x = -4
		const torus2 = new Three.Mesh(
			new Three.TorusGeometry(1.5,.5,18,18), material
		)

		torus2.position.x = 0
		const torus3 = new Three.Mesh(
			new Three.TorusGeometry(1.5,.5,8,8, Math.PI / 2), material
		)

		torus3.position.x = 2

		scene.add(torus1)
		scene.add(torus2)
		scene.add(torus3)

		renderer.render(scene, camera)
	}
}
</script>