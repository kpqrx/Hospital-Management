export type IconNameType =
  | 'Bell'
  | 'Cog'
  | 'ChartPie'
  | 'Clock'
  | 'Calendar'
  | 'Cash'
  | 'Sun'
  | 'Logout'

export interface IconProps {
  name: IconNameType
  size?: number
  color?: 'white' | 'black'
}
