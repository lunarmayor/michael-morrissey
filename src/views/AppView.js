import React from 'react'
import styled from 'styled-components'
import { lighten, darken } from 'polished'
import { palette, spacing } from 'theme'
import lunar from 'assets/lunar.png'
import lunarp from 'assets/lunar.webp'
import { Grid, Section, Hero, AbsoluteFill, Distribute, FlexContainer, Box } from 'components/layouts'
import { Link, withRouter } from 'react-router-dom'
import RoomView from './RoomView'

const StyledAbsoluteFill = styled.div`
  background: ${props => props.background || palette.canvas};
  overflow: auto;
  min-height: 100vh;
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
  color: ${props => props.light ? '#e2e2e2' : 'black'};
`

const Title = Name.extend`
  font-size: 16px;
  color: ${
    props => !props.light ?
      lighten(0.13, '#000')
    : darken(0.13, '#e2e2e2')
  };
  margin-top: 4px;
`

const NavLink = styled(Link)`
  font-family: rubik;
  font-size: 18px;
  position: relative;
  top: 13px;
  text-decoration: none;
  color: ${props => props.light ? '#e2e2e2' : 'black'};
  margin-left: ${spacing * 2}px;
`

const ExternalLink = NavLink.withComponent('a')

const getBackground = (path) => {
  switch (path) {
    case '/projects':
      return 'rgb(245, 245, 245)'
    case '/art':
      return 'black'
    default:
      return palette.canvas
  }
}

const isDark = (path) => path === '/art'


const AppView = ({ children, location }) => {
  const isDarkBackground = isDark(location.pathname)

  return (
    <StyledAbsoluteFill background={getBackground(location.pathname)}>
      <DistributedSection>
        <FlexContainer style={{ alignItems: 'center' }}>
          <div style={{ marginRight: spacing}}>
            <Link to="">
              <picture>
                <source srcSet={lunarp} type="image/webp"/>
                <Logo src={lunar}/>
              </picture>
            </Link>
          </div>
          <Box hideMobile>
            <Name light={isDarkBackground}>Lunar Mayor</Name>
            <Title light={isDarkBackground}>Design Technologist</Title>
          </Box>
        </FlexContainer>
        <nav>
          <FlexContainer>
            <NavLink light={isDarkBackground} to="identity">Identity</NavLink>
            <NavLink light={isDarkBackground} to="projects">Projects</NavLink>
            <NavLink light={isDarkBackground} to="art">Art</NavLink>
            <Box hideMobile>
              <ExternalLink
                light={isDarkBackground}
                href="mailto:mikehmorrissey@gmail.com"
              >
                Talk to Me
              </ExternalLink>
            </Box>
          </FlexContainer>
        </nav>
      </DistributedSection>
      {children}
    </StyledAbsoluteFill>
  )
}

export default withRouter(AppView)
