import { ButtonContainer } from './styles'

type Props = {
  children: string
}

const Button = ({ children }: Props) => (
  <ButtonContainer>{children}</ButtonContainer>
)

export default Button
