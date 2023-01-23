import type { IconButtonProps } from './IconButton.types'
import { StyledContainer, StyledLabel } from './IconButton.styled'
import Icon from '../Icon/Icon'

function IconButton(props: IconButtonProps) {
  const { icon, label, hasBadge = false } = props

  return (
    <StyledContainer hasBadge={hasBadge}>
      <Icon name={icon} />
      <StyledLabel>{label}</StyledLabel>
    </StyledContainer>
  )
}

export default IconButton
