import styled from "styled-components"
import Image from 'next/image'

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${({ theme }) => theme.size.lg};
  align-items: center;
`

export const StyledAvatar = styled(Image)`
  border-radius: 50%;
`

export const StyledGreetings = styled.p`
  color: ${({ theme }) => theme.color.gray[400]};
`

export const StyledName = styled.span`
  color: ${({ theme }) => theme.color.black};
`

export const StyledControlPanel = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.size.lg};
`