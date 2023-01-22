import type { PropsWithChildren } from 'react'
import { ThemeProvider as Provider, createGlobalStyle } from 'styled-components'
import { Poppins } from '@next/font/google'

export const theme = {
  size: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '36px',
    xxl: '48px',
    xxxl: '82px',
    xxxxl: '112px',
    sidebar: '280px',
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
  shadow: {
    box: '0px 4px 12px 2px hsla(0, 0%, 0%, 8%);',
  },
  font: {
    family: 'Poppins, sans-serif',
    weight: '400',
    size: {
      default: '14px',
      xs: '10px',
      md: '16px',
      lg: '24px',
    },
  },
}

export const font = Poppins({
  weight: '400',
  subsets: ['latin'],
})

const GlobalStyles = createGlobalStyle`
  html {
    font-size: ${theme.font.size.default};
    font-family: ${theme.font.family};
  }

  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, input, textarea {
    font-family: inherit;
    font-size: inherit;
  }
`

export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <Provider theme={theme}>
    <GlobalStyles />
    {children}
  </Provider>
)

export type ThemeType = typeof theme
