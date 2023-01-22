import styled from 'styled-components'

export const StyledContainer = styled.header`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: ${({ theme }) => theme.size.xxl};
  width: ${({ theme }) => theme.size.sidebar};
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => `${theme.size.xl} ${theme.size.lg}`};
  box-shadow: ${({ theme }) => theme.shadow.box};
  border-radius: ${({ theme }) => theme.size.lg};
`
