import { PropsWithChildren } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import {
  StyledContainer,
  StyledSidebarWrapper,
  StyledContentWrapper,
} from './Layout.styled'

import { font } from '@/theme'

function Layout(props: PropsWithChildren) {
  const { children } = props

  return (
    <StyledContainer className={font.className}>
      <StyledSidebarWrapper>
        <Sidebar />
      </StyledSidebarWrapper>
      <StyledContentWrapper>{children}</StyledContentWrapper>
    </StyledContainer>
  )
}

export default Layout
