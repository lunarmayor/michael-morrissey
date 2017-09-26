import { handleRelative, handleMobileVisibility } from 'components/utils/cssHelpers'
import { Box as GSBox } from 'grid-styled'

const Box = GSBox.extend`
  ${handleRelative}
  ${handleMobileVisibility}
`

export default Box
