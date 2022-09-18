import { createStitches } from '@stitches/react'

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config
} = createStitches({
    theme: {
        colors: {
            primaryColor: '#B50808',
            selectedColor: '#E40C0C',
            grey: '#CCCCCC'
        }
    }
})