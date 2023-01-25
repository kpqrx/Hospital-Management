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
  | 'UserCircle'
  | 'Bookmark'

export interface IconProps {
  name: IconNameType
  size?: number
  color?: 'white' | 'black' | 'gray'
}
