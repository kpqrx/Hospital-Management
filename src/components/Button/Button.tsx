import { StyledContainer } from './Button.styled'
import { ButtonProps } from './Button.types'
import Icon from '../Icon/Icon'

function Button(props: ButtonProps) {
  const { children, icon, variant = 'primary', ...restProps } = props

  const isContentReversed = icon?.position === 'after'

  return (
    <StyledContainer
      variant={variant}
      flexFlow={isContentReversed ? 'row-reverse' : 'row'}
      {...restProps}
    >
      {icon && <Icon {...icon} />}
      {children}
    </StyledContainer>
  )
}

export default Button
