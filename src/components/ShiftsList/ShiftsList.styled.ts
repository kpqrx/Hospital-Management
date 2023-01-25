import styled from 'styled-components'

export const StyledItemsContainer = styled.ul`
  display: flex;
  flex-flow: column;
  gap: ${({ theme }) => theme.size.xs};
`

export const StyledItem = styled.li`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.size.md} ${theme.size.lg}`};
  gap: ${({ theme }) => theme.size.md};
  border-radius: ${({ theme }) => theme.size.xs};
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[100]};
  }
`
export const StyledItemLabel = styled.h3`
  font-size: ${({ theme }) => theme.font.size.default};
  flex: 1;
`

export const StyledItemDate = styled.div`
  text-align: right;
  color: ${({ theme }) => theme.color.gray[300]};
`
