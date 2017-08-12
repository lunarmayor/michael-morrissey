import * as THREE from 'three'

class CameraManager {
  constructor(width, height, x, y, z) {
    this.camera = this.setupCamera(width, height, x, y, z)
    return this
  }

  setupCamera(width, height, x, y, z) {
    let camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 )
    camera.position.set(x, y, z)
    camera.lookAt(new THREE.Vector3(0, 0, 0))
    return camera
  }
}

export default CameraManager
