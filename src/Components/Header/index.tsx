import logo from '../../assets/icons/hatena-blog-logo.png'
import Button from '../Button'

import { HeaderContainer, HeaderLinks, HeaderLogo, HeaderNav } from './styles'

const Header = () => (
  <HeaderContainer>
    <HeaderNav>
      <HeaderLogo>
        <img src={logo} alt="Cafefe Blog" />
      </HeaderLogo>
      <HeaderLinks>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Posts</a>
      </HeaderLinks>
    </HeaderNav>
    <div>
      <Button>Register</Button>
      <Button>Login</Button>
    </div>
  </HeaderContainer>
)

export default Header
