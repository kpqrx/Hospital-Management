import { IconNameType } from '../Icon/Icon.types'

export interface IconButtonProps {
  label: string
  icon: IconNameType
  hasBadge?: boolean
}

export type StyledContainerProps = {
  hasBadge: boolean
}
