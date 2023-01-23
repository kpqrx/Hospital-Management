import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    width: 100%;
    height: ${({ theme }) => theme.size.topDecorator};
    background-color: ${({ theme }) => theme.color.gray[200]};
    z-index: -1;
  }
`

export const StyledSidebarWrapper = styled.div`
  padding: ${({ theme }) =>
    `${theme.size.lg} 0 ${theme.size.lg} ${theme.size.lg}`};
`
export const StyledContentWrapper = styled.main`
  columns: 2 auto;
  column-gap: ${({ theme }) => theme.size.xxxl};
  padding: ${({ theme }) => `${theme.size.lg} ${theme.size.xxxxl}`};
  flex: 1;
  margin-top: ${({ theme }) => theme.size.topDecorator};
`
