import styled from 'styled-components'

export const StyledContainer = styled.article`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.size.lg};
  padding: ${({ theme }) =>
    `${theme.size.xs} ${theme.size.lg} ${theme.size.md}`};
  break-inside: avoid;
  margin-bottom: ${({ theme }) => theme.size.xxl};
`

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.size.xxl};
  padding-bottom: ${({ theme }) => theme.size.md};
  margin: ${({ theme }) => theme.size.md} 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[200]};
`

export const StyledLabel = styled.h2`
  font-size: ${({ theme }) => theme.font.size.default};
`
