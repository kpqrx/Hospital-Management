import type { Meta, StoryObj } from '@storybook/react'

import IconButton from './IconButton'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
}

export default meta
type Story = StoryObj<typeof IconButton>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    icon: 'Bell',
    label: "I'm a bell",
  },
}

export const WithBadge: Story = {
    args: {
      icon: 'Bell',
      label: "I'm a bell",
      hasBadge: true
    },
  }
