<template>
	<div id="geo-hedron"></div>
</template>

<script>
export default {
	mounted () {
		const Three = this.THREE
		const renderer = new Three.WebGLRenderer()

		renderer.setSize(1500, 750)
		renderer.setClearColor(0x00aaaa)

		document.getElementById('geo-hedron').appendChild(renderer.domElement)

		const scene = new Three.Scene()
		const camera = new Three.OrthographicCamera(-3, 3, 1.5, -1.5, 1, 10)

		camera.position.set(0,2,6)
		camera.lookAt(new Three.Vector3(0,0,0))

		scene.add(camera)

		const material = new Three.MeshBasicMaterial({
			color: 0xffffff, wireframe: true
		})

		const tetra = new Three.Mesh(
			new Three.TetrahedronGeometry(1), material
		)

		const octa = new Three.Mesh(
			new Three.OctahedronGeometry(1), material
		)

		const icosa = new Three.Mesh(
			new Three.IcosahedronGeometry(1), material
		)

		tetra.position.x = -2
		octa.position.x = 0
		icosa.position.x = 2

		scene.add(tetra)
		scene.add(octa)
		scene.add(icosa)

		renderer.render(scene, camera)
	}
}
</script>