import React from 'react'
import styled from 'styled-components'
import { palette, spacing } from 'theme'
import lunar from 'assets/lunar.png'
import { Grid, Section, Hero, AbsoluteFill, Distribute, FlexContainer } from 'components/layouts'
import { Link } from 'react-router-dom'
import RoomView from './RoomView'

const StyledAbsoluteFill = AbsoluteFill.extend`
  background: linear-gradient(to bottom, #3994F2, #6793F5, #8792F7, #A290FA, #BA8EFC, #D18BFF);
  background: #e46565
`

const DistributedSection = Section.withComponent(Distribute)

const Logo = styled.img`
  width: 50px;
`
const Name = styled.div`
  font-family: rubik;
  font-size: 20px;
  position: relative;
  bottom: 3px;
`

const NavLink = styled(Link)`
  font-family: rubik;
  font-size: 18px;
  position: relative;
  top: 13px;
  text-decoration: none;
  color: black;
  margin-left: ${spacing * 2}px;
`

const AppView = ({ children }) => (
  <StyledAbsoluteFill>
    <DistributedSection>
      <FlexContainer style={{ alignItems: 'center' }}>
        <div style={{ marginRight: spacing}}>
          <Logo src={lunar}/>
        </div>
        <Name>Lunar Mayor</Name>
      </FlexContainer>
      <nav>
        <FlexContainer>
          <NavLink to="">Identity</NavLink>
          <NavLink to="">Projects</NavLink>
          <NavLink to="">Art</NavLink>
        </FlexContainer>
      </nav>
    </DistributedSection>
    <Hero style={{ position: 'relative'}}>
      <RoomView/>
    </Hero>
    {children}
  </StyledAbsoluteFill>
)

export default AppView
