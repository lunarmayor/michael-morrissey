import React, { Component } from 'react'
import * as THREE from 'three'
import { AbsoluteFill } from 'components/layouts'
import lunar from 'assets/lunar.png'

import RoomApp from 'lib/RoomApp'

class MeshGraphicView extends Component {
  componentDidMount() {
    let mesh = new RoomApp(this.ref)
    return mesh
  }

  render() {
    return (
      <AbsoluteFill innerRef={ref => this.ref = ref}/>
    )
  }
}

export default MeshGraphicView
