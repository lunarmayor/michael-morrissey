import styled from 'styled-components'
import { padding } from 'components/utils/cssHelpers'
import { transparentize } from 'polished'
import { fonts, palette, spacing } from 'utils/theme'

const Button = styled.button`
  cursor: pointer;
  background: none;
  font-size: 16px;
  font-family: ${fonts.secondary};
  color: ${palette.primary};
  border: 1px solid ${palette.primary};
  border-bottom: 3px solid ${palette.primary};
  border-right: 3px solid ${palette.primary};
  ${props => padding(spacing / 2, spacing)};
  transition: color 300ms, background 300ms;
  &:hover {
    background: ${transparentize(0.9, palette.primary)};
  };
  &:focus {
    outline: none;
  }
`

export default Button
