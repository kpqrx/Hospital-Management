import type { Meta, StoryObj } from '@storybook/react'

import Input from './Input'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Input',
  },
}
