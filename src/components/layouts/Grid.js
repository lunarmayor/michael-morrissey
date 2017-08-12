import styled from 'styled-components'
import theme from 'theme'

const Grid = styled.div`
  max-width: ${theme.maxWidth}px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 3}, 1fr);
  grid-gap: ${props => theme.spacing * (props.gap || 0)}px;
  width: 100%;
  @media(max-width: 650px) {
    grid-template-columns: 1fr;
  }
`

export default Grid
