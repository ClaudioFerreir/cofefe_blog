import styled from 'styled-components'

import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.brown};
  color: ${colors.yellow};
  padding: 10px 30px;
  font-size: 20px;
  height: 70px;

  button {
    margin-left: 35px;
  }
`

export const HeaderLogo = styled.h1`
  width: 50px;
  height: 50px;
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
`

export const HeaderLinks = styled.div`
  a {
    text-decoration: none;
    color: ${colors.yellow};
    font-weight: 700;
    margin-left: 55px;
  }
`
