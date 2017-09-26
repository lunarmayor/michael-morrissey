import * as THREE from 'three'

class Orb {
  constructor() {
    this.object = this.setup()
    this.animatingUp = false

    setTimeout(() => {
      this.animatingUp = true
    }, 2000)

    return this
  }

  setup() {
    let size = 10
    let group = new THREE.Group()
    group.position.set(0, -20, 0)

    let geometry = new THREE.IcosahedronGeometry(size, 1)
    let darkMaterial = new THREE.MeshLambertMaterial({ color: 'rgb(226, 40, 41)' })
    let blackMaterial = new THREE.MeshLambertMaterial({ color: '#000' })
    let wireframeMaterial = new THREE.MeshLambertMaterial({
      color: 'rgb(0,0,0)',
      wireframe: true,
      transparent: false,
      wireframeLinewidth: 2
    })

    let multiMaterial = [wireframeMaterial, darkMaterial]
    this.multiOrb = THREE.SceneUtils.createMultiMaterialObject(geometry, multiMaterial)
    this.blackOrb = new THREE.Mesh(geometry, blackMaterial)

    group.add(this.multiOrb).add(this.blackOrb)
    this.group = group
    return group
  }

  update() {
    this.multiOrb.rotation.x += 0.001
    this.multiOrb.rotation.y += 0.001
    this.multiOrb.position.y = Math.sin(Date.now() / 2000) * 10
    this.blackOrb.rotation.x += 0.011
    this.blackOrb.rotation.y += 0.011
    this.blackOrb.position.y = Math.sin(Date.now() / 2000) * 12

    this.group.rotation.y += 0.01

    if (this.animatingUp && this.group.position.y < 70) {
      this.group.position.y += 0.1
    }

    return this.object
  }
}

export default Orb
