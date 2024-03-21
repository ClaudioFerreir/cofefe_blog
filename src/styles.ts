import { createGlobalStyle } from 'styled-components'

export const colors = {
  yellow: '#FFE9BE',
  brown: '#8B7A67',
  darkBrown: '#574837',
  lightBrown: '#80694F',
  extraLightBrown: '#C1AD9D',
  black: '#000'
}

const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: ${colors.yellow};
    color: ${colors.black};
  }
`

export default GlobalCss
