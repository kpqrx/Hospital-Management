import {
  StyledContainer,
  StyledLabel,
  StyledSummaryText,
} from './TimeSummary.styled'
import type { TimeSummaryProps } from './TimeSummary.types'

function TimeSummary(props: TimeSummaryProps) {
  const { label, variant, totalTime, currentTime, ...restProps } = props

  return (
    <StyledContainer {...restProps}>
      <StyledSummaryText variant={variant}>
        {`${currentTime.hours}h ${currentTime.minutes}min`}
      </StyledSummaryText>
      {` / ${totalTime.hours}h ${totalTime.minutes}min`}
      {label && <StyledLabel>{label}</StyledLabel>}
    </StyledContainer>
  )
}

export default TimeSummary
