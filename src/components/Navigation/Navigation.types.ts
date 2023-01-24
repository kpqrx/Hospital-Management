import type { IconNameType } from '../Icon/Icon.types'

export type NavigationItemType = {
  icon: IconNameType
  label: string
  href: string
}

export interface NavigationProps {
  items: NavigationItemType[]
}
