import styled from 'styled-components'
import type {
  StyledSummaryTextProps,
  VariantColorsType,
} from './TimeSummary.types'

const variantColors: VariantColorsType = {
  warning: 'red',
  information: 'blue',
  correct: 'green',
}

export const StyledContainer = styled.div`
  white-space: nowrap;
`

export const StyledSummaryText = styled.em<StyledSummaryTextProps>`
  font-style: normal;
  color: ${({ theme, variant }) => theme.color[variantColors[variant]]};
`

export const StyledLabel = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.size.xs};
  color: ${({ theme }) => theme.color.gray[300]};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.xs};
`
