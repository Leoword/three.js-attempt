<template>
  <div></div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'Line',
  mounted () {
    const scene = new THREE.Scene()

    const material = new THREE.LineBasicMaterial({ color: 0x0000ff })

    const points = []

    points.push(new THREE.Vector3(-10, 0, 0))
    points.push(new THREE.Vector3(0, 10, 0))
    points.push(new THREE.Vector3(10, 0 ,0))

    const geometry = new THREE.BufferGeometry().setFromPoints(points)

    const line = new THREE.Line(geometry, material)

    scene.add(line)

    this.renderer(scene)
  }
}
</script>
