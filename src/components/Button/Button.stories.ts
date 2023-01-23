import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        values: ['primary', 'secondary', 'tertiary', 'quaternary'],
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args

export const Default: Story = {
  args: {
    children: 'Default button',
    variant: 'primary',
  },
}

export const WithIconBefore: Story = {
  args: {
    children: 'Button with icon before',
    variant: 'primary',
    icon: {
      name: 'Bell',
      position: 'before',
    },
  },
}

export const WithIconAfter: Story = {
  args: {
    children: 'Button with icon after',
    variant: 'primary',
    icon: {
      name: 'Bell',
      position: 'after',
    },
  },
}
