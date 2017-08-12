import * as THREE from 'three'

class NodeArtObject {
  constructor() {
    this.object = this.setup()
    return this
  }

  setup() {
    let group = new THREE.Group()
    let geometry = new THREE.TetrahedronGeometry(40, 1, 1)
    let material = new THREE.MeshLambertMaterial({
      ambient: '#e46565',
      wireframe: true,
      color:'#e46565',
      shininess: 50,
      shading: THREE.SmoothShading
    })
    let object = new THREE.Mesh(geometry, material)
    object.castShadow = true
    group.add(object)

    this.createDots(geometry.vertices, group)

    return group
  }

  createDots(verts, group) {
    let material = new THREE.MeshBasicMaterial({
      color: '#e46565'
    })

    return verts.map(vert => {
      let geometry = new THREE.SphereGeometry(Math.random() * 5 + 2, 32, 32)
      let sphere = new THREE.Mesh(geometry, material)
      sphere.position.x = vert.x
      sphere.position.y = vert.y
      sphere.position.z = vert.z
      group.add(sphere)
      return sphere
    })
  }

  update() {
    this.object.rotation.y += 0.002
    this.object.rotation.x += 0.002
    this.object.scale.y = Math.sin(+(new Date()) / 5000) * 0.1 + 1
    this.object.scale.x = Math.sin(+(new Date()) / 5000) * 0.1 + 1
    this.object.scale.z = Math.sin(+(new Date()) / 5000) * 0.1 + 1
    return this.object
  }
}

export default NodeArtObject
