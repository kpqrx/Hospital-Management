import type React from 'react'

export interface InputProps {
  id: string
  name: string
  value?: string
  className?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  label: string
  type?: string
  required?: boolean
}
