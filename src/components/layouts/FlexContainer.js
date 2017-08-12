import styled, { css } from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  ${props => props.reverse && css`flex-direction: row-reverse;`}
  ${props => props.column && css`flex-direction: column;`}
  ${props => props.columnrReverse && css`flex-direction: column-reverse;`}
`

export default FlexContainer
