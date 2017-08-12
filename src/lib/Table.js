import * as THREE from 'three'
import ObjLoader from 'three-obj-loader'
import table from 'assets/table.obj'
let proxyTHREE = THREE
ObjLoader(proxyTHREE)

class Table {
  constructor(scene) {
    this.object = this.setup(scene)
    return this
  }

  setup(scene) {
    let material = new THREE.MeshLambertMaterial({
      ambient: '#e46565',
      wireframe: true,
      color:'#e46565',
      shininess: 50,
      shading: THREE.SmoothShading
    })
    let loader = new proxyTHREE.OBJLoader()

    loader.load(table, (obj) => {
      console.log(obj)
      scene.add(obj)
      window.obj = obj
    })
  }

  update() {
  }
}

export default Table
