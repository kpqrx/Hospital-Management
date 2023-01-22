import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.size.md};
  align-items: center;
`

export const StyledTypographyFirstLine = styled.span`
  text-transform: uppercase;
`
