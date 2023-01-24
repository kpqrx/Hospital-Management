import {
  StyledContainer,
  StyledHeader,
  StyledLabel,
} from './WidgetContainer.styled'
import type { WidgetContainerProps } from './WidgetContainer.types'

function WidgetContainer(props: WidgetContainerProps) {
  const { renderHeadingAction, children, label, ...restProps } = props

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledLabel>{label}</StyledLabel>
        {renderHeadingAction && renderHeadingAction()}
      </StyledHeader>
      <div {...restProps}>{children}</div>
    </StyledContainer>
  )
}

export default WidgetContainer
