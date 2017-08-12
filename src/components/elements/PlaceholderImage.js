import styled from 'styled-components'

const PlaceholderImage = styled.img.attrs({
  src: props => `http://via.placeholder.com/${props.width}x${props.height}`
})`
  width: 100%
`

export default PlaceholderImage
