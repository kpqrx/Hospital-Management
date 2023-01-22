import styled from 'styled-components'

export const StyledContainer = styled.header`
  width: 230px;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.gray[200]};
  padding: ${({ theme }) => theme.space.lg};
`
