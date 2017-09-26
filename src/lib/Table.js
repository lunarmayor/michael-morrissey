import * as THREE from 'three'
import { range } from 'ramda'
import ObjLoader from 'three-obj-loader'
let proxyTHREE = THREE
ObjLoader(proxyTHREE)

class Table {
  constructor(scene) {
    this.object = this.setup(scene)
    return this
  }

  setup(scene) {
    let loader = new THREE.ObjectLoader()
    this.group = new THREE.Group()

    loader.load(process.env.PUBLIC_URL + '/skull.json', (object) => {
      range(0, 8).map(i => {
        let skull = object.clone()
        skull.position.y = 10
        skull.position.x = 60 * Math.sin(2 * Math.PI / 8 * i)
        skull.position.z = 60 * Math.cos(2 * Math.PI / 8 * i)
        skull.rotation.y = (Math.PI * 2  / 8 *  i ) - Math.PI * 2
        skull.scale.set(3, 3, 3)
        this.group.add(skull)
      })

      scene.add(this.group)
    })

    let sphereGeometry = new THREE.CircleGeometry(30, 32)
    let sphereMaterial = new THREE.MeshBasicMaterial({
      color: '#151515'
    })
    sphereMaterial.side = THREE.DoubleSide


    this.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    this.sphere.rotation.x = Math.PI / 2
    this.sphere.position.y = 11
    scene.add(this.sphere)
  }

  update() {
    this.group.rotation.y += 0.004
    let scale = 0.7 + 0.1 * Math.sin(Math.cos(+new Date() / 1000))
    this.sphere.scale.y = scale
    this.sphere.scale.z = scale
    this.sphere.scale.x = scale
  }
}

export default Table
