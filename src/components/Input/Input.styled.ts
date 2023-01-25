import styled from 'styled-components'

export const StyledContainer = styled.label`
  display: flex;
  flex-flow: column;
  transition: ${({ theme }) => theme.transition};
  position: relative;
`
export const StyledLabel = styled.span`
  position: absolute;
  left: ${({ theme }) => theme.size.lg};
  top: 6px;
  font-size: ${({ theme }) => theme.font.size.xs};
`
export const StyledInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  border: none;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) =>
    `${theme.size.lg} ${theme.size.lg} ${theme.size.xs}`};
  border-radius: ${({ theme }) => theme.size.xs};
  border: 2px solid ${({ theme }) => theme.color.gray[200]};
  outline: none;

  &:hover {
    border-color: ${({ theme }) => theme.color.gray[300]};
  }

  &:active,
  &:focus {
    border-color: ${({ theme }) => theme.color.gray[400]};
  }
`
