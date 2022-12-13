import { createGlobalStyle } from 'styled-components'

import UbuntuBold from '../assets/fonts/Ubuntu-Bold.ttf'
import UbuntuItalic from '../assets/fonts/Ubuntu-Italic.ttf'
import UbuntuMedium from '../assets/fonts/Ubuntu-Medium.ttf'
import UbuntuRegular from '../assets/fonts/Ubuntu-Regular.ttf'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${UbuntuRegular}') format('truetype')
  }
  @font-face {
    font-family: 'Ubuntu';
    font-weight: 500;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${UbuntuMedium}') format('truetype')
  }
  @font-face {
    font-family: 'Ubuntu';
    font-weight: 600;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${UbuntuBold}') format('truetype')
  }
  @font-face {
    font-family: 'Ubuntu';
    font-weight: 300;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${UbuntuItalic}') format('truetype')
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Ubuntu, sans-serif;
  }

  body {
    background: #FFF
    color: #333
  }
`
