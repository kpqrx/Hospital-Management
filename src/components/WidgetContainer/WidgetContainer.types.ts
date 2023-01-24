import type { PropsWithChildren, ReactNode } from 'react'

export interface WidgetContainerProps extends PropsWithChildren {
  label: string
  renderHeadingAction?: () => ReactNode
}
