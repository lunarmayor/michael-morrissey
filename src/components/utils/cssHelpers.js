import { padding as polishedPadding } from 'polished'

const addPixel = (i) => `${i}px`

export const padding = (...args) => polishedPadding(...args.map(addPixel))
