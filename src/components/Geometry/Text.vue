<template>
	<div id="geo-text"></div>
</template>

<script>
export default {
	mounted () {
		const {
			WebGLRenderer, Scene, PerspectiveCamera,
			Mesh, MeshBasicMaterial, TextGeometry,
			FontLoader
		} = this.THREE 

		const renderer = new WebGLRenderer()

		renderer.setSize(1500, 750)
		renderer.setClearColor(0x000000)

		document.getElementById('geo-text').appendChild(renderer.domElement)

		const scene = new Scene()
		const camera = new PerspectiveCamera(60, 2/1, 1, 10)

		camera.position.set(0,1,5)

		scene.add(camera)

		const material = new MeshBasicMaterial({
			color: 0xcccc55, wireframe: false
		})

		new FontLoader().load('/helvetiker_regular.typeface.json', (font) => {
			const text1 = new Mesh(
				new TextGeometry('H', {
					size: 1,
					font,
					height: 1
				}),
				material
			)

			text1.position.x = 0

			const text2 = new Mesh(
				new TextGeometry('e', {
					size: 1,
					height: 1,
					font,
					weight: 'normal',
					curveSegments: 1
				}),
				material
			)

			text2.position.x = 1

			const text3 = new Mesh(
				new TextGeometry('l', {
					size:1,
					font,
					height: 1,
					style: 'italic'
				}),
				material
			)
			text3.position.x = 2
			const text4 = new Mesh(
				new TextGeometry('l',{
					size: 1,
					height:1,
					font
				}),
				material
			)
			text4.position.x = 3
			const text5 = new Mesh(
				new TextGeometry('o',{
					size: 1,
					height:.2,
					font,
					curveSegments: 3
				}),
				material
			)
			text5.position.x = 4

			scene.add(text1)
			scene.add(text2)
			scene.add(text3)
			scene.add(text4)
			scene.add(text5)
			renderer.render(scene, camera)
		})
	}
}
</script>