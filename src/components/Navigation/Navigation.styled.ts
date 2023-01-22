import Link from 'next/link'
import styled from 'styled-components'

export const StyledContainer = styled.ul`
  display: flex;
  flex-flow: column;
  gap: ${({ theme }) => theme.size.md};
  flex: 1;
  width: 100%;
`

export const StyledLink = styled(Link)`
  display: flex;
  gap: ${({ theme }) => theme.size.sm};
  align-items: center;
  padding: ${({ theme }) => `${theme.size.sm} ${theme.size.xl}`};
  width: 100%;
  border-radius: ${({ theme }) => theme.size.md};

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.color.gray[100]};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`
