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
  position: sticky;
  top: 0;
  padding: ${({ theme }) =>
    `${theme.size.lg} 0 ${theme.size.lg} ${theme.size.lg}`};
`

export const StyledMainWrapper = styled.main`
  flex: 1;
  padding: 0 ${({ theme }) => theme.size.xxxxl};
  margin-top: ${({ theme }) => theme.size.topDecorator};
`

export const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.font.size.lg};
  line-height: ${({ theme }) => theme.size.xxl};
  padding-top: ${({ theme }) => theme.size.lg};
  position: sticky;
  top: 0;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.color.gray[50]} 50%,
    transparent
  );
  margin-bottom: ${({ theme }) => theme.size.lg};
`

export const StyledContentWrapper = styled.div`
  min-height: 100%;
  columns: 2 auto;
  column-gap: ${({ theme }) => theme.size.xxxl};
  column-fill: auto;
`
