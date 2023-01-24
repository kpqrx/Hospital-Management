import TimeSummary from '../TimeSummary/TimeSummary'
import {
  StyledSvgChart,
  StyledTimeSummary,
  StyledWidgetContainer,
} from './TimeChartWidget.styled'

const weekCurrentTime = {
  hours: 40,
  minutes: 12,
}

const weekTotalTime = {
  hours: 40,
  minutes: 0,
}

const dayTotalTime = {
  hours: 8,
  minutes: 0,
}

const todayCurrentTime = {
  hours: 4,
  minutes: 42,
}

const yesterdayCurrentTime = {
  hours: 7,
  minutes: 26,
}

function TimeChartWidget() {
  return (
    <StyledWidgetContainer
      label="Czas pracy"
      renderHeadingAction={() => (
        <TimeSummary
          variant="correct"
          currentTime={weekCurrentTime}
          totalTime={weekTotalTime}
        />
      )}
    >
      <StyledSvgChart />
      <StyledTimeSummary
        variant="information"
        label="Dzisiaj"
        currentTime={todayCurrentTime}
        totalTime={dayTotalTime}
      />
      <StyledTimeSummary
        variant="warning"
        label="Wczoraj"
        currentTime={yesterdayCurrentTime}
        totalTime={dayTotalTime}
      />
    </StyledWidgetContainer>
  )
}

export default TimeChartWidget
