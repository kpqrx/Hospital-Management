import styled from 'styled-components'
import TimeSummary from '../TimeSummary/TimeSummary'
import WidgetContainer from '../WidgetContainer/WidgetContainer'

export const StyledWidgetContainer = styled(WidgetContainer)`
  display: flex;
  flex-wrap: wrap;
`

export const StyledSvgChart = styled.svg`
  flex-basis: 100%;
`

export const StyledTimeSummary = styled(TimeSummary)`
  flex-basis: 50%;
`
