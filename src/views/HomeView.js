import React from 'react'
import { Section } from 'components/layouts'
import { Hero } from 'components/layouts'
import RoomView from './RoomView'

const HomeView = (props) => (
  <Hero style={{ position: 'relative'}}>
    <RoomView/>
  </Hero>
)

export default HomeView
