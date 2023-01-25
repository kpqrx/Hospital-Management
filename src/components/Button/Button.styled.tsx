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

  ${({ theme, variant }) =>
    variant === 'secondary' &&
    css`
      font-size: ${({ theme }) => theme.font.size.xs};
      text-transform: uppercase;
      padding: ${`${theme.size.xs} ${theme.size.md}`};
      border-radius: ${theme.size.xs};
      border: 2px solid ${({ theme }) => theme.color.gray[300]};

      &:hover,
      &:active {
        border-color: ${theme.color.gray[400]};
      }
    `};

  ${({ theme, variant }) =>
    variant === 'tertiary' &&
    css`
      padding: ${`${theme.size.sm} ${theme.size.xl}`};
      border-radius: ${theme.size.md};
      background-color: ${({ theme }) => theme.color.gray[400]};
      color: ${({ theme }) => theme.color.white};

      &:hover,
      &:active {
        background-color: ${theme.color.black};
      }

      // TODO: Remove temporary styles
      align-self: flex-start;
      width: 280px;
      margin-top: 16px;
    `};
`
