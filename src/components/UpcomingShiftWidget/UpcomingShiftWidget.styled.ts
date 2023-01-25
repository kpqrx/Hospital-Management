import styled from 'styled-components'
import TimeSummary from '../TimeSummary/TimeSummary'
import WidgetContainer from '../WidgetContainer/WidgetContainer'

export const StyledWidgetContainer = styled(WidgetContainer)`
  display: flex;
  gap: ${({ theme }) => theme.size.lg};
`

export const StyledDate = styled.div`
  font-size: ${({ theme }) => theme.font.size.xs};
  text-transform: uppercase;
  padding: ${({ theme }) => theme.size.sm};
  border-radius: ${({ theme }) => theme.size.xs};
  border: 1px solid ${({ theme }) => theme.color.gray[200]};
`

export const StyledDateDay = styled.span`
  display: block;
  font-size: 42px;
  line-height: 42px;
  color: ${({ theme }) => theme.color.red};
`

export const StyledContentWrapper = styled.div`
  flex: 1;
`

export const StyledTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.md};
  margin-bottom: ${({ theme }) => theme.size.sm};
`

export const StyledDetails = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.size.sm} 0;
`

export const StyledDetailsItem = styled.li`
  display: inline-flex;
  gap: ${({ theme }) => theme.size.xs};
  color: ${({ theme }) => theme.color.gray[300]};
  flex-basis: 50%;
  font-size: ${({ theme }) => theme.font.size.xs};
`
