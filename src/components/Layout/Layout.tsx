import type { LayoutProps } from './Layout.types'
import Sidebar from '../Sidebar/Sidebar'
import {
  StyledContainer,
  StyledSidebarWrapper,
  StyledMainWrapper,
  StyledContentWrapper,
  StyledHeading,
} from './Layout.styled'

function Layout(props: LayoutProps) {
  const { children, heading } = props

  return (
    <StyledContainer>
      <StyledSidebarWrapper>
        <Sidebar />
      </StyledSidebarWrapper>
      <StyledMainWrapper>
        <StyledHeading>{heading}</StyledHeading>
        <StyledContentWrapper>{children}</StyledContentWrapper>
      </StyledMainWrapper>
    </StyledContainer>
  )
}

export default Layout
