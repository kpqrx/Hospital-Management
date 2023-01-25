import styled from 'styled-components'

export const StyledContainer = styled.form`
  display: flex;
  flex-flow: column;
  break-inside: avoid;
  gap: ${({ theme }) => `${theme.size.lg} ${theme.size.xl}`};
`

export const StyledHeading = styled.h2`
  margin-bottom: ${({ theme }) => theme.size.md};
  flex: 1;
`
