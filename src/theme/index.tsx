import type { PropsWithChildren } from 'react'
import { ThemeProvider as Provider } from 'styled-components'

export const theme = {
  space: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 36,
    xxl: 48,
    xxxl: 82,
    xxxxl: 112,
  },
  color: {
    white: 'hsl(0, 0%, 98%)',
    black: 'hsl(0, 0%, 2%)',
    gray: {
      100: 'hsl(0, 0%, 94%)',
      200: 'hsl(0, 0%, 86%)',
      300: 'hsl(0, 0%, 70%)',
      400: 'hsl(0, 0%, 48%)',
    },
    blue: 'hsl(194, 48%, 50%)',
    green: 'hsl(112, 76%, 41%)',
    red: 'hsl(360, 62%, 50%)',
  },
}

export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <Provider theme={theme}>{children}</Provider>
)

export type ThemeType = typeof theme
