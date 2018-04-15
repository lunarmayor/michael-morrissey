import * as THREE from 'three'

import CameraManager from './CameraManager'
import NodeArtObject from './NodeArtObject'
import Table from './Table'
import Desk from './Desk'
import WallArt from './WallArt'
import Picture from './Picture'
import Orb from './Orb'

import art1 from 'assets/1.jpg'
import art2 from 'assets/8.jpg'
import art3 from 'assets/7.mp4'
import art4 from 'assets/10.png'
import art5 from 'assets/11.jpg'
import art6 from 'assets/4.jpg'
import art7 from 'assets/3.jpg'
import art8 from 'assets/2.jpg'
import art9 from 'assets/5.jpg'
import art10 from 'assets/6.jpg'
import art11 from 'assets/flyingaway.mp4'
import art12 from 'assets/13.png'
import neonate from 'popmotion/animations/tween'
import { easing, spring, stagger } from 'popmotion'
console.log(neonate)

class RoomApp {
  constructor(ref) {
    let { width, height } = ref.getBoundingClientRect()
    this.ref = ref
    this.animating = true
    this.setup(width, height, ref)
    window.addEventListener( 'resize', this.onResize.bind(this), false );
  }

  onResize() {
    let { width, height } = this.ref.getBoundingClientRect()
    let camera = this.cameraManager.camera
    camera.left = width / - 2
    camera.right = width / 2
    camera.top = height / 2
    camera.bottom = height / - 2

	  camera.updateProjectionMatrix();
		this.renderer.setSize(width, height);
  }

  cleanup() {
    while(this.scene.children.length > 0){
      this.scene.remove(this.scene.children[0]);
    }

    this.animating = false
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
    this.rotatedGroup = rotatedGroup
    rotatedGroup.rotation.y =  Math.PI / 4
    rotatedGroup.scale.set(1.1,1.1,1.1)
    rotatedGroup.position.set(0, -125, 0)

    let size = 300
    let divisions = 10

    let gridHelper = new THREE.GridHelper( size, divisions )
    gridHelper.position.y = 10
    rotatedGroup.add( gridHelper)

    //this.artInstallation = new NodeArtObject()
    //rotatedGroup.add(this.artInstallation.object)

    this.table = new Table(rotatedGroup)
    this.orb = new Orb()
    rotatedGroup.add(this.orb.object)
//    this.wallArt = new WallArt(rotatedGroup)
    //this.desk = new Desk(rotatedGroup)

    this.createArt()



    let floorGeom = new THREE.BoxGeometry(300, 10, 300)
    let floorMaterial = new THREE.MeshLambertMaterial( {color: '#ffffff'} );
    let floor = new THREE.Mesh(floorGeom, floorMaterial)
    floor.position.set(0,  5, 0)
    floor.receiveShadow = true
    rotatedGroup.add(floor)

    let floorGeom2 = new THREE.BoxGeometry(310, 250, 10)
    let floorMaterial2 = new THREE.MeshLambertMaterial( {color: '#FFFFFF'} );
    let floor2 = new THREE.Mesh(floorGeom2, floorMaterial2)
    floor2.receiveShadow = true
    floor2.position.set(5,  125, -155)
    rotatedGroup.add(floor2)

    let floorGeom3 = new THREE.BoxGeometry(300, 250, 10)
    let floorMaterial3 = new THREE.MeshLambertMaterial( {color: '#FFFFFF'} );
    let floor3 = new THREE.Mesh(floorGeom3, floorMaterial3)
    floor3.rotation.y = Math.PI / 2
    floor3.receiveShadow = true
    floor3.position.set(155,  125, 0)
    rotatedGroup.add(floor3)

    let light = new THREE.SpotLight('white', 1.2)
    light.castShadow = true

    light.position.set(0, 400,400)
    light.shadow.mapSize.width = 1024;
		light.shadow.mapSize.height = 1024;
		light.shadow.camera.near = 0;
		light.shadow.camera.far = 100;
    light.shadowDarkness = 1

    window.light = light
    this.scene.add(light)

    this.scene.add(rotatedGroup)
  }

  createArt() {
    let leftWall = new THREE.Group()
    leftWall.position.z = -145
    leftWall.position.y = 125

    let rightWall = new THREE.Group()
    rightWall.position.x = 145
    rightWall.position.y = 125
    rightWall.rotation.y = 3 * Math.PI / 2

    let picture1 = new Picture(art1, 75, 100)
    picture1.object.position.set(7.5, 50, -10)
    leftWall.add(picture1.object)

    let picture2 = new Picture(art2, 80, 100)
    picture2.object.position.set(-90, 50, -10)
    leftWall.add(picture2.object)

    let picture3 = new Picture(art3, 70, 70, { video: true })
    picture3.object.position.set(-95, -55, -10)
    leftWall.add(picture3.object)

    let picture4 = new Picture(art4, 70, 100)
    picture4.object.position.set(95, 50, -10)
    rightWall.add(picture4.object)

    let picture5 = new Picture(art5, 60, 90)
    picture5.object.position.set(-100, 55, -10)
    rightWall.add(picture5.object)

    let picture6 = new Picture(art6, 70, 70)
    picture6.object.position.set(95, -50, -10)
    rightWall.add(picture6.object)

    let picture7 = new Picture(art7, 90, 90)
    picture7.object.position.set(-5, -40, -10)
    rightWall.add(picture7.object)

    let picture8 = new Picture(art8, 90, 80)
    picture8.object.position.set(-5, 60, -10)
    rightWall.add(picture8.object)

    let picture9 = new Picture(art9, 60, 80)
    picture9.object.position.set(-100, -45, -10)
    rightWall.add(picture9.object)

    let picture10 = new Picture(art10, 70, 70)
    picture10.object.position.set(-5, -55, -10)
    leftWall.add(picture10.object)

    let picture11 = new Picture(art11, 65, 100, { video: true })
    picture11.object.position.set(97.5, 50, -10)
    leftWall.add(picture11.object)

    let picture12 = new Picture(art12, 85, 70)
    picture12.object.position.set(90, -55, -10)
    leftWall.add(picture12.object)

    this.rotatedGroup.add(rightWall)
    this.rotatedGroup.add(leftWall)


    const pictures = [
      picture1,
      picture12,
      picture4,
      picture7,
      picture10,
      picture8,
      picture2,
      picture5,
      picture9,
      picture6,
      picture3,
      picture11,
    ]

    const animations = Array(pictures.length)
      .fill(spring({
        from: -100,
        to: 0,
        duration: 300,
      }))

    setTimeout(() => {
      stagger(animations, 150)
        .start((v) => v.forEach((x, i) => pictures[i].object.position.z = x / 10));
    }, 600)


    neonate({
      from: -10,
      to: 0,
      duration: 1000,
      ease: easing.easeIn,
    })
  }

  render() {
    requestAnimationFrame(() => this.animating && this.render())
    //this.artInstallation.update()
    this.table.update()
    this.orb.update()

    //this.wallArt.update()
    this.renderer.render(this.scene, this.cameraManager.camera)
  }
}

export default RoomApp
