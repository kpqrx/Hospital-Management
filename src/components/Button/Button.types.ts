import type { PropsWithChildren } from 'react'
import type { IconNameType } from '../Icon/Icon.types'

type ButtonVariantType = 'primary' | 'secondary' | 'tertiary' | 'quaternary'

//TODO: Improve typings
export interface ButtonProps extends PropsWithChildren {
  variant?: ButtonVariantType
  icon?: {
    name: IconNameType
    position?: 'before' | 'after'
  }
}

export type StyledContainerProps = {
  variant: ButtonVariantType
  flexFlow: 'row' | 'row-reverse'
}
