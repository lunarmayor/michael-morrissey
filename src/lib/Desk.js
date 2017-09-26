import * as THREE from 'three'

class Desk {
  constructor(scene) {
    this.object = this.setup(scene)
    return this
  }

  setup(scene) {
    let loader = new THREE.ObjectLoader()

    loader.load(process.env.PUBLIC_URL + '/server-desk-box.json', (object) => {
      this.object = object.children[2]
      this.object.position.set(0, 40, -118)
      this.object.scale.set(80, 80, 80)
      scene.add(this.object)
    })
  }

  update() {
  }
}

export default Desk
