import * as THREE from 'three'
import { range } from 'ramda'

class WallArt {
  constructor(scene) {
    this.object = this.setup(scene)
    this.scene = scene
    return this
  }

  setup(scene) {
    navigator.mediaDevices
      .getUserMedia({ video: true }).then(stream => {
        this.setupVideo(stream)
      })
  }

  setupVideo(stream) {
    let videoURL = window.URL.createObjectURL(stream)
    let video = document.createElement('video')
    video.src = videoURL
    video.onloadedmetadata = () => {
      video.play()
      this.createPortait(video)
    }
  }

  createPortait(videoEl) {
    this.texture = new THREE.Texture(videoEl)
    this.texture.minFilter = THREE.NearestFilter
    let material = new THREE.MeshLambertMaterial({
      map: this.texture,
      side: THREE.DoubleSide,
    })


    let geometry = new THREE.PlaneGeometry(100, 100)

    let mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(80, 180, -149)
    this.scene.add(mesh)
  }

  update() {
    if (this.texture) {
      this.texture.needsUpdate = true
    }
  }
}

export default WallArt
