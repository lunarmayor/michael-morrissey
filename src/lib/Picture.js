import * as THREE from 'three'

class Picture {
  constructor(image, width, height, options = {}) {
    this.group = new THREE.Group()
    this.width = width
    this.height = height
    this.image = image

    this.createFrame()

    options.video ? this.createVideo() : this.createImage()
    this.object = this.group
    return this
  }

  createFrame() {
    let frameMaterial = new THREE.MeshLambertMaterial({ color: '#191919' })
    let frameWidth = 5
    let leftRightGeom = new THREE.BoxGeometry(frameWidth, this.height, frameWidth)
    let topBottomGeom = new THREE.BoxGeometry(this.width + frameWidth, frameWidth, frameWidth)

    let leftFrame = new THREE.Mesh(leftRightGeom, frameMaterial)
    leftFrame.position.set(0 - this.width / 2, 0, 0)
    this.group.add(leftFrame)

    let topFrame = new THREE.Mesh(topBottomGeom, frameMaterial)
    topFrame.position.set(0, 0 + this.height / 2, 0)
    this.group.add(topFrame)

    let rightFrame = new THREE.Mesh(leftRightGeom, frameMaterial)
    rightFrame.position.set(0 + this.width / 2, 0, 0)
    this.group.add(rightFrame)

    let bottomFrame = new THREE.Mesh(topBottomGeom, frameMaterial)
    bottomFrame.position.set(0, 0 - this.height / 2, 0)
    this.group.add(bottomFrame)
  }

  createImage() {
    let loader = new THREE.TextureLoader()
    loader.load(this.image, texture => {
      this.texture = texture
      let material = new THREE.MeshLambertMaterial({
        map: texture,
        side: THREE.DoubleSide,
      })

      let geometry = new THREE.PlaneGeometry(this.width, this.height, 2)
      let image = new THREE.Mesh(geometry, material)
      this.group.add(image)
    })
  }

  createVideo() {
    let video = document.createElement('video')
    video.src = this.image
    video.loop = true
    video.muted = true
    video.playbackRate = 0.5
    video.onloadedmetadata = () => {
      video.play()
      let texture = new THREE.VideoTexture(video)
      texture.minFilter = THREE.LinearFilter
      texture.magFilter = THREE.LinearFilter
      texture.format = THREE.RGBFormat

      let material = new THREE.MeshLambertMaterial({
        map: texture
      })

      let geometry = new THREE.PlaneGeometry(this.width, this.height, 2)
      let image = new THREE.Mesh(geometry, material)
      this.group.add(image)
    }
  }
}

export default Picture
