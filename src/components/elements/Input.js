import styled from 'styled-components'
import { padding } from 'components/utils/cssHelpers'
import { fonts, palette, spacing } from 'utils/theme'

const Input = styled.input`
  border: 1px solid ${palette.primary};
  font-size: 16px;
  border-radius: 3px;
  ${props => padding(spacing / 2, spacing)};
  font-family: ${fonts.secondary};
  color: ${palette.copy};
`

export default Input
