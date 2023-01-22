import type { IconType } from 'react-icons/lib'

export type NavigationItemType = {
  icon: IconType
  label: string
  href: string
}

export interface NavigationProps {
  items: NavigationItemType[]
}
