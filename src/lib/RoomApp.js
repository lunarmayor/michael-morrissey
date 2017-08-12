import * as THREE from 'three'

import CameraManager from './CameraManager'
import NodeArtObject from './NodeArtObject'
import Table from './Table'

class RoomApp {
  constructor(ref) {
    let { width, height } = ref.getBoundingClientRect()
    this.setup(width, height, ref)
  }

  setup(width, height, ref) {
    this.scene = new THREE.Scene()
    this.cameraManager = new CameraManager(width, height, 0, 200, 400)
    this.renderer = this.createRenderer(width, height)
    ref.appendChild(this.renderer.domElement)

    this.createObjects()
    this.renderer.render(this.scene, this.cameraManager.camera)
    this.render()
  }

  createRenderer(width, height) {
    let renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })

    renderer.setPixelRatio(2)
    renderer.setSize(width, height)

    return renderer
  }

  createObjects() {
    let rotatedGroup = new THREE.Group()
    rotatedGroup.rotation.y =  Math.PI / 4
    rotatedGroup.scale.set(1.1,1.1,1.1)
    rotatedGroup.position.set(0, -125, 0)

    this.artInstallation = new NodeArtObject()
    rotatedGroup.add(this.artInstallation.object)

    this.table = new Table(this.scene)

    let floorGeom = new THREE.BoxGeometry(300, 10, 300)
    let floorMaterial = new THREE.MeshLambertMaterial( {color: 'grey'} );
    let floor = new THREE.Mesh(floorGeom, floorMaterial)
    floor.position.set(0,  5, 0)
    floor.receiveShadow = true
    rotatedGroup.add(floor)

    let floorGeom2 = new THREE.BoxGeometry(300, 250, 10)
    let floorMaterial2 = new THREE.MeshLambertMaterial( {color: '#ddd'} );
    let floor2 = new THREE.Mesh(floorGeom2, floorMaterial2)
    floor2.position.set(0,  125, -155)
    rotatedGroup.add(floor2)

    let floorGeom3 = new THREE.BoxGeometry(300, 250, 10)
    let floorMaterial3 = new THREE.MeshLambertMaterial( {color: '#eee'} );
    let floor3 = new THREE.Mesh(floorGeom3, floorMaterial3)
    floor3.rotation.y = Math.PI / 2
    floor3.position.set(155,  125, 0)
    rotatedGroup.add(floor3)


    let light = new THREE.DirectionalLight('white', 1)
    light.castShadow = true
    light.position.set(0, 80, 40)
    window.light = light
    let pointLightHelper = new THREE.DirectionalLightHelper( light, 30 );
    this.scene.add( pointLightHelper )
    this.scene.add(light)

    this.scene.add(rotatedGroup)
  }

  render() {
    requestAnimationFrame(() => this.render())
    this.artInstallation.update()
    this.renderer.render(this.scene, this.cameraManager.camera)
  }
}

export default RoomApp
