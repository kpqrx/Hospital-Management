import { StyledContainer, StyledLabel, StyledInput } from './Input.styled'
import type { InputProps } from './Input.types'

function Input(props: InputProps) {
  const { label, ...restProps } = props
  const { className } = restProps

  return (
    <StyledContainer className={className}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...restProps} />
    </StyledContainer>
  )
}

export default Input
