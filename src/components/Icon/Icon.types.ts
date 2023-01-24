export type IconNameType =
  | 'Bell'
  | 'Cog'
  | 'ChartPie'
  | 'Clock'
  | 'Calendar'
  | 'Cash'
  | 'Sun'
  | 'Logout'
  | 'ChevronRight'

export interface IconProps {
  name: IconNameType
  size?: number
  color?: 'white' | 'black' | 'gray'
}
