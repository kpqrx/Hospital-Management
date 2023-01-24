import styled, { css } from 'styled-components'
import type { StyledContainerProps } from './Button.types'

export const StyledContainer = styled.button<StyledContainerProps>`
  display: flex;
  gap: ${({ theme }) => theme.size.md};
  flex-flow: ${({ flexFlow }) => flexFlow};
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  transition: ${({ theme }) => theme.transition};
  user-select: none;
  cursor: pointer;

  ${({ theme, variant }) =>
    variant === 'primary' &&
    css`
      padding: ${`${theme.size.sm} ${theme.size.xl}`};
      border-radius: ${theme.size.md};

      &:hover,
      &:active {
        background-color: ${theme.color.gray[100]};
      }
    `};
`
