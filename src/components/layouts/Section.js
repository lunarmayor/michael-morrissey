import styled from 'styled-components'
import { spacing, palette } from 'theme'

const Section = styled.section`
  padding: ${props => props.big ? spacing * 4 : spacing * 2}px;
  background-color: ${props => props.secondary ? palette.canvasSecondary : palette.canvas};
`

export default Section
