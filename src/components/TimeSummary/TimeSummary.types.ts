type VariantType = 'warning' | 'information' | 'correct'

export interface TimeSummaryProps {
  label?: string
  variant: VariantType
  currentTime: TimeType
  totalTime: TimeType
}

export type StyledSummaryTextProps = {
  variant: VariantType
}

export type VariantColorsType = {
  [K in VariantType]: 'red' | 'blue' | 'green'
}

type TimeType = {
    hours: number
    minutes: number
  }