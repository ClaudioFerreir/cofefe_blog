import styled from 'styled-components'

import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.brown};
  height: 70px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;

  p {
    color: ${colors.yellow};
    margin-left: 26px;
    font-size: 14px;
    font-weight: 600;
  }
`
