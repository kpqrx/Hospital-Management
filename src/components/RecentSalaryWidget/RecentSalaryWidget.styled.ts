import styled from 'styled-components'
import Icon from '../Icon/Icon'

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

export const StyledItemAmount = styled.span`
  flex: 1;
`

export const StyledItemPeriod = styled.span`
  text-align: right;
`

export const StyledItemIcon = styled(Icon)``
