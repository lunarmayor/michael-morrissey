import { css } from 'styled-components'
import { padding as polishedPadding } from 'polished'

const addPixel = (i) => `${i}px`

export const padding = (...args) => polishedPadding(...args.map(addPixel))

export const handleRelative = props => props.relative && css`
  position: relative;
`

export const handleMobileVisibility = css`
  ${p => p.hideMobile && `
    @media (max-width: 640px) {
      display: none;
    };
  `}

  ${p => p.showMobile && `
    @media(min-width: 641px) {
      display: none;
    };
  `}
`
