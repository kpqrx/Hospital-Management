import styled, { css } from 'styled-components'
import type { StyledContainerProps } from './IconButton.types'

export const StyledLabel = styled.span`
  position: absolute;
  bottom: -75%;
  left: 50%;
  transform-origin: top;
  transform: translateX(-50%);
  width: max-content;
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.gray[400]};
  border-radius: ${({ theme }) => theme.size.xs};
  padding: ${({ theme }) => `${theme.size.xs} ${theme.size.md}`};
  transition: ${({ theme }) => theme.transition};
  opacity: 0;

  &::before {
    content: '';
    position: absolute;
    top: -${({ theme }) => theme.size.xs};
    left: calc(50% - ${({ theme }) => theme.size.xs});
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${({ theme }) => theme.size.xs};
    border-top-width: 0;
    border-color: transparent;
    border-bottom-color: ${({ theme }) => theme.color.gray[400]};
  }
`
export const StyledContainer = styled.button<StyledContainerProps>`
  position: relative;
  border: none;
  background-color: ${({ theme }) => theme.color.gray[100]};
  border-radius: 50%;
  width: ${({ theme }) => theme.size.xxl};
  height: ${({ theme }) => theme.size.xxl};
  transition: ${({ theme }) => theme.transition};

  svg {
    vertical-align: middle;
  }

  ${({ hasBadge }) =>
    hasBadge &&
    css`
      &::after {
        content: '';
        background-color: ${({ theme }) => theme.color.red};
        border-radius: 50%;
        border: 4px solid ${({ theme }) => theme.color.white};
        width: 20px;
        height: 20px;
        position: absolute;
        right: -4px;
        top: -4px;
      }
    `}

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.color.gray[200]};

    ${StyledLabel} {
      opacity: 1;
      transform: translate(-50%, ${({ theme }) => theme.size.xs});
    }
  }
`
