import FlexContainer from './FlexContainer'

const CenterCenter = FlexContainer.extend`
  justify-content: center;
  align-items: center;
  height: ${props => props.full ? '100%' : 'auto'};
`

export default CenterCenter
