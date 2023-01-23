import Link from 'next/link'
import styled from 'styled-components'

export const StyledContainer = styled.ul`
  display: flex;
  flex-flow: column;
  gap: ${({ theme }) => theme.size.md};
  flex: 1;
  width: 100%;
`

export const StyledNavigationItem = styled(Link)`
  display: flex;
  gap: ${({ theme }) => theme.size.md};
  padding: ${({ theme }) => `${theme.size.sm} ${theme.size.xl}`};
  border-radius: ${({ theme }) => theme.size.md};
  justify-content: flex-start;
  width: 100%;
  white-space: nowrap;
  transition: ${({ theme }) => theme.transition};

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.color.gray[100]};
  }
`
